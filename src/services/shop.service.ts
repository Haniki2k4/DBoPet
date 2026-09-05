import { HouseType } from "@prisma/client";
import { GAME, houseSlotCount, HOUSE_PRIORITY } from "../config/game.js";
import { prisma } from "../database/prisma.js";

export async function buyFood(userId: string, foodId: string, quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    throw new Error("Số lượng mua phải là số nguyên từ 1 đến 99.");
  }
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });
    const food = await tx.food.findUniqueOrThrow({ where: { id: foodId } });
    if (user.level < food.unlockLevel) throw new Error(`Cần level chủ ${food.unlockLevel} để mua ${food.name}.`);
    const cost = food.price * quantity;
    if (user.gold < cost) throw new Error(`Bạn cần ${cost} vàng nhưng hiện chỉ có ${user.gold} vàng.`);
    await tx.user.update({ where: { id: userId }, data: { gold: { decrement: cost } } });
    await tx.userInventory.upsert({
      where: { userId_foodId: { userId, foodId } },
      update: { quantity: { increment: quantity } },
      create: { userId, foodId, quantity }
    });
    return { food, cost };
  });
}

export interface BuyHouseResult {
  house: HouseType;
  added: boolean;
  replaced?: HouseType;
  totalSlots: number;
  ownedCount: number;
}

export async function buyHouse(userId: string, house: HouseType, replaceHouseType?: HouseType): Promise<BuyHouseResult> {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });
    const offer = GAME.house[house];

    if (user.level < offer.unlockLevel) {
      throw new Error(`Cần level chủ ${offer.unlockLevel} để mua ${offer.name} (hiện Lv.${user.level}).`);
    }
    if (user.gold < offer.price) {
      throw new Error(`Bạn cần ${offer.price} vàng để mua ${offer.name} (hiện có ${user.gold} vàng).`);
    }

    const owned = await tx.userHouse.findMany({ where: { userId } });
    const ownedTypes = owned.map((h) => h.houseType);

    if (ownedTypes.includes(house)) {
      throw new Error(`Bạn đã sở hữu ${GAME.house[house].icon} **${offer.name}** rồi. Không thể mua trùng.`);
    }

    const slots = houseSlotCount(user.level);
    let result: BuyHouseResult = { house, added: false, totalSlots: slots, ownedCount: owned.length };

    if (owned.length < slots) {
      await tx.userHouse.create({ data: { userId, houseType: house } });
      result.added = true;
      result.ownedCount = owned.length + 1;
    } else {
      if (!replaceHouseType) {
        throw new Error(
          `Bạn đã dùng hết ${slots} slot nhà. Muốn mua ${offer.name} để nâng cấp, hãy chỉ định căn nhà cũ cần thay thế (option replace). Hoặc lên cấp ${GAME.houseSlotUnlockLevels[owned.length] ?? "?"} để mở slot thứ ${owned.length + 1}.`
        );
      }
      if (!ownedTypes.includes(replaceHouseType)) {
        throw new Error(`Bạn không sở hữu nhà **${GAME.house[replaceHouseType].name}** để thay thế.`);
      }
      if (replaceHouseType === house) {
        throw new Error(`Bạn không thể thay thế bằng chính căn nhà đang định mua.`);
      }
      await tx.userHouse.update({ where: { userId_houseType: { userId, houseType: replaceHouseType } }, data: { houseType: house } });
      result.added = true;
      result.replaced = replaceHouseType;
    }

    // Deduct gold
    await tx.user.update({ where: { id: userId }, data: { gold: { decrement: offer.price } } });

    // Apply comfort floor from the best owned house to all pets
    const updatedOwned = result.replaced
      ? ownedTypes.filter((t) => t !== result.replaced).concat(house)
      : ownedTypes.concat(house);
    const best = updatedOwned.reduce((max, t) => (HOUSE_PRIORITY[t] > HOUSE_PRIORITY[max] ? t : max), updatedOwned[0]);
    await tx.user.update({ where: { id: userId }, data: { activeHouse: best } });
    const bestConfig = GAME.house[best];
    await tx.pet.updateMany({
      where: { ownerId: userId, comfort: { lt: bestConfig.comfortFloor } },
      data: { comfort: bestConfig.comfortFloor }
    });

    return result;
  });
}

/** Apply comfort floor (min comfort) from owned houses to pets. Convenience helper. */
export async function applyComfortFloor(userId: string): Promise<void> {
  const houses = await prisma.userHouse.findMany({ where: { userId } });
  if (houses.length === 0) return;
  const best = houses.reduce((max, h) => (HOUSE_PRIORITY[h.houseType] > HOUSE_PRIORITY[max] ? h.houseType : max), houses[0].houseType);
  const config = GAME.house[best];
  await prisma.pet.updateMany({
    where: { ownerId: userId, comfort: { lt: config.comfortFloor } },
    data: { comfort: config.comfortFloor }
  });
}
