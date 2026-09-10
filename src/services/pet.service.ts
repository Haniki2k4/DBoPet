import { HouseType, PetSpecies } from "@prisma/client";
import { GAME, HOUSE_PRIORITY, moodForComfort, petExperienceBonus, SPECIES_TIER } from "../config/game.js";
import { prisma } from "../database/prisma.js";
import { addPetExperience, addUserExperience } from "./experience.service.js";
import { isNewVnDay } from "../utils/time.js";

const DAY_MS = 24 * 60 * 60 * 1_000;

function resolvePetCode(input: string): string {
  const match = input.match(/\[([a-zA-Z0-9_-]+)\]/);
  if (match) return match[1];
  return input.trim();
}

const SPECIES_PREFIX: Record<PetSpecies, string> = {
  [PetSpecies.DOG]:     "00",
  [PetSpecies.CAT]:     "01",
  [PetSpecies.HAMSTER]: "02",
  [PetSpecies.RABBIT]:  "03",
  [PetSpecies.BIRD]:    "04",
  [PetSpecies.FISH]:    "05",
  [PetSpecies.SNAKE]:   "06",
  [PetSpecies.SPIDER]:  "07",
  [PetSpecies.RAT]:     "08",
  [PetSpecies.FERRET]:  "09",
  [PetSpecies.UNICORN]: "10",
};

/** Total pet capacity from all owned houses (sum of maxPets). Defaults to BASIC capacity if no house owned. */
export async function totalPetCapacity(userId: string): Promise<number> {
  const houses = await prisma.userHouse.findMany({ where: { userId } });
  if (houses.length === 0) return GAME.house[HouseType.BASIC].maxPets;
  return houses.reduce((sum, h) => sum + GAME.house[h.houseType].maxPets, 0);
}

/** Best house owned (highest priority) — used for comfort floor. */
export async function bestHouseOwned(userId: string): Promise<HouseType> {
  const houses = await prisma.userHouse.findMany({ where: { userId } });
  if (houses.length === 0) return HouseType.BASIC;
  return houses.reduce((max, h) => (HOUSE_PRIORITY[h.houseType] > HOUSE_PRIORITY[max] ? h.houseType : max), houses[0].houseType);
}

export async function adoptPet(ownerId: string, species: PetSpecies, name: string, variant: string) {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id: ownerId } });

    // Tên pet phải unique trong cùng owner
    const existingName = await tx.pet.findFirst({ where: { ownerId, name } });
    if (existingName) {
      throw new Error(`Bạn đã có pet tên “${name}” rồi. Hãy chọn tên khác.`);
    }

    const petCount = await tx.pet.count({ where: { ownerId } });
    const speciesCount = await tx.pet.count({ where: { ownerId, species } });
    const capacity = await totalPetCapacity(ownerId);
    if (petCount >= capacity) {
      throw new Error(
        `Pet của bạn đã đầy (${capacity}/${capacity}). Hãy mua thêm hoặc nâng cấp nhà bằng /shop house để mở thêm sức chứa.`
      );
    }

    // Kiểm tra yêu cầu level và giá theo tier loài
    const tier = SPECIES_TIER[species];
    if (tier && user.level < tier.minLevel) {
      throw new Error(`Bạn cần đạt **Level ${tier.minLevel}** để nhận nuôi loài này. Level hiện tại của bạn: ${user.level}.`);
    }

    const feeApplied = petCount >= GAME.adopt.freeAdopts;
    const tierExtra = tier?.extraCost ?? 0;
    const totalCost = GAME.adopt.cost + tierExtra;
    if (feeApplied) {
      if (user.gold < totalCost) {
        throw new Error(`Bạn cần ${totalCost} vàng để nhận pet thứ ${petCount + 1}. Hiện có ${user.gold} vàng. Kiếm thêm bằng /daily hoặc /play.`);
      }
      await tx.user.update({ where: { id: ownerId }, data: { gold: { decrement: totalCost } } });
    } else if (tierExtra > 0) {
      // Pet miễn phí nhưng loài v2/v3 vẫn cần trừ tiền tier
      if (user.gold < tierExtra) {
        throw new Error(`Bạn cần ${tierExtra} vàng để nhận nuôi loài này. Hiện có ${user.gold} vàng.`);
      }
      await tx.user.update({ where: { id: ownerId }, data: { gold: { decrement: tierExtra } } });
    }

    const seq = String(speciesCount + 1).padStart(3, "0");
    const petCode = `${SPECIES_PREFIX[species]}${seq}`;
    const pet = await tx.pet.create({ data: { ownerId, species, name, variant, petCode } });
    return { pet, feeApplied, tierExtra };
  });
}

export async function petPet(ownerId: string, petCode: string): Promise<{ petName: string; affection: number; remaining: number }> {
  return prisma.$transaction(async (tx) => {
    const cleanCode = resolvePetCode(petCode);
    const pet = await tx.pet.findFirst({
      where: {
        ownerId,
        OR: [
          { petCode: cleanCode },
          { petCode: petCode.trim() },
          { name: cleanCode },
          { name: petCode.trim() },
        ],
      },
    });
    if (!pet) throw new Error(`Không tìm thấy pet "${petCode}". Hãy dùng /pets để xem danh sách pet của bạn.`);
    const now = new Date();
    const shouldReset = isNewVnDay(pet.lastPetResetAt, now);
    const dailyPetCount = shouldReset ? 0 : pet.dailyPetCount;
    if (dailyPetCount >= GAME.dailyPetLimit) throw new Error(`${pet.name} đã được âu yếm đủ ${GAME.dailyPetLimit} lần hôm nay. Lượt mới vào 06:00.`);

    const nextCount = dailyPetCount + 1;
    const affection = pet.affection + GAME.affectionPerPet;
    await tx.pet.update({
      where: { id: pet.id },
      data: { affection, dailyPetCount: nextCount, lastPetResetAt: shouldReset ? now : pet.lastPetResetAt, lastPettedAt: now }
    });
    await addUserExperience(tx, ownerId, GAME.petOwnerExperience);
    await addPetExperience(tx, pet.id, GAME.petPetExperience);
    return { petName: pet.name, affection, remaining: GAME.dailyPetLimit - nextCount };
  });
}

export async function feedPet(ownerId: string, petCode: string, foodId: string): Promise<{ petName: string; foodName: string; userExperience: number; petExperience: number }> {
  return prisma.$transaction(async (tx) => {
    const cleanCode = resolvePetCode(petCode);
    const pet = await tx.pet.findFirst({
      where: {
        ownerId,
        OR: [
          { petCode: cleanCode },
          { petCode: petCode.trim() },
          { name: cleanCode },
          { name: petCode.trim() },
        ],
      },
    });
    if (!pet) throw new Error(`Không tìm thấy pet "${petCode}". Hãy dùng /pets để xem danh sách pet của bạn.`);
    const food = await tx.food.findUnique({ where: { id: foodId } });
    if (!food) throw new Error(`Không tìm thấy món ăn "${foodId}". Hãy dùng /shop food để xem danh mục.`);
    const inventory = await tx.userInventory.findUnique({ where: { userId_foodId: { userId: ownerId, foodId } } });
    if (!inventory || inventory.quantity < 1) throw new Error(`Bạn không còn ${food.name}. Hãy dùng /shop food để mua thêm.`);

    const preferred = food.preferredBy === pet.species;
    const bonus = petExperienceBonus(pet.level);
    const userExperience = Math.floor(food.ownerExperience * (1 + bonus / 100));
    const petExperience = preferred ? Math.floor(food.petExperience * 1.25) : food.petExperience;
    const comfort = Math.min(pet.comfort + food.comfortGain + (preferred ? 3 : 0), GAME.comfort.max);

    await tx.userInventory.update({ where: { userId_foodId: { userId: ownerId, foodId } }, data: { quantity: { decrement: 1 } } });
    await tx.pet.update({ where: { id: pet.id }, data: { comfort, mood: moodForComfort(comfort), lastFedAt: new Date() } });
    await tx.user.update({ where: { id: ownerId }, data: { feedCount: { increment: 1 } } });
    await addUserExperience(tx, ownerId, userExperience);
    await addPetExperience(tx, pet.id, petExperience);
    return { petName: pet.name, foodName: food.name, userExperience, petExperience };
  });
}

export type FeedSummary = {
  foodName: string;
  fed: Array<{ petName: string; petExperience: number }>;
  skipped: Array<{ petName: string; reason: string }>;
  totalUserExperience: number;
};

/**
 * Feed nhiều pet cùng lúc với 1 loại thức ăn.
 * petIdentifiers: mảng tên pet, hoặc ["all"] để feed tất cả.
 * Mỗi pet được feed trong transaction riêng — lỗi 1 pet không ảnh hưởng pet khác.
 * Kho trừ đúng số lần feed thành công.
 */
export async function feedPetList(ownerId: string, petIdentifiers: string[], foodId: string): Promise<FeedSummary> {
  const food = await prisma.food.findUnique({ where: { id: foodId } });
  if (!food) throw new Error(`Không tìm thấy món ăn "${foodId}". Hãy dùng /shop food để xem danh mục.`);

  // Resolve danh sách pet cần feed
  let pets: Array<{ id: string; name: string; petCode: string; species: PetSpecies; level: number; comfort: number; mood: import("@prisma/client").Mood }>;
  if (petIdentifiers.length === 1 && petIdentifiers[0] === "all") {
    pets = await prisma.pet.findMany({ where: { ownerId }, orderBy: { createdAt: "asc" } });
  } else {
    const resolved = await Promise.all(
      petIdentifiers.map((id) => {
        const clean = resolvePetCode(id);
        return prisma.pet.findFirst({
          where: { ownerId, OR: [{ name: clean }, { petCode: clean }] },
        });
      })
    );
    pets = resolved.filter((p): p is NonNullable<typeof p> => p !== null);
  }

  const summary: FeedSummary = { foodName: food.name, fed: [], skipped: [], totalUserExperience: 0 };

  for (const pet of pets) {
    // Kiểm tra kho trước mỗi lượt (tránh race condition nếu loop song song)
    const inv = await prisma.userInventory.findUnique({ where: { userId_foodId: { userId: ownerId, foodId } } });
    if (!inv || inv.quantity < 1) {
      summary.skipped.push({ petName: pet.name, reason: "Hết thức ăn trong kho" });
      continue;
    }

    try {
      const result = await feedPet(ownerId, pet.petCode, foodId);
      summary.fed.push({ petName: result.petName, petExperience: result.petExperience });
      summary.totalUserExperience += result.userExperience;
    } catch (err) {
      summary.skipped.push({ petName: pet.name, reason: err instanceof Error ? err.message : "Lỗi không xác định" });
    }
  }

  return summary;
}

export type PetSummary = {
  petting: Array<{ petName: string; affection: number; remaining: number }>;
  skipped: Array<{ petName: string; reason: string }>;
};

/**
 * Âu yếm nhiều pet cùng lúc.
 * petIdentifiers: mảng tên pet, hoặc ["all"] để âu yếm tất cả.
 * Mỗi pet được xử lý trong transaction riêng.
 */
export async function petPetList(ownerId: string, petIdentifiers: string[]): Promise<PetSummary> {
  // Resolve danh sách pet
  let pets: Array<{ id: string; name: string; petCode: string }>;
  if (petIdentifiers.length === 1 && petIdentifiers[0] === "all") {
    pets = await prisma.pet.findMany({ where: { ownerId }, orderBy: { createdAt: "asc" } });
  } else {
    const resolved = await Promise.all(
      petIdentifiers.map((id) => {
        const clean = resolvePetCode(id);
        return prisma.pet.findFirst({
          where: { ownerId, OR: [{ name: clean }, { petCode: clean }] },
        });
      })
    );
    pets = resolved.filter((p): p is NonNullable<typeof p> => p !== null);
  }

  const summary: PetSummary = { petting: [], skipped: [] };

  for (const pet of pets) {
    try {
      const result = await petPet(ownerId, pet.petCode);
      summary.petting.push({ petName: result.petName, affection: result.affection, remaining: result.remaining });
    } catch (err) {
      summary.skipped.push({ petName: pet.name, reason: err instanceof Error ? err.message : "Lỗi không xác định" });
    }
  }

  return summary;
}

export async function applyNeglect(): Promise<number> {
  const pets = await prisma.pet.findMany({ include: { owner: true } });
  const now = Date.now();
  let changed = 0;
  for (const pet of pets) {
    const lastCare = Math.max(pet.lastFedAt?.getTime() ?? pet.createdAt.getTime(), pet.lastPettedAt?.getTime() ?? pet.createdAt.getTime());
    const days = Math.floor((now - lastCare) / DAY_MS);
    if (days < GAME.neglect.daysBeforePenalty) continue;
    const comfort = Math.max(GAME.comfort.min, pet.comfort - GAME.neglect.comfortPenaltyPerDay);
    await prisma.pet.update({ where: { id: pet.id }, data: { comfort, mood: moodForComfort(comfort) } });
    changed += 1;
  }
  return changed;
}
