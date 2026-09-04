import { PetSpecies } from "@prisma/client";
import { GAME, moodForComfort, petExperienceBonus } from "../config/game.js";
import { prisma } from "../database/prisma.js";
import { addPetExperience, addUserExperience } from "./experience.service.js";

const DAY_MS = 24 * 60 * 60 * 1_000;

export async function adoptPet(ownerId: string, species: PetSpecies, name: string, variant: string) {
  return prisma.pet.create({ data: { ownerId, species, name, variant } });
}

export async function petPet(ownerId: string, petId: string): Promise<{ affection: number; remaining: number }> {
  return prisma.$transaction(async (tx) => {
    const pet = await tx.pet.findFirstOrThrow({ where: { id: petId, ownerId } });
    const now = new Date();
    const shouldReset = now.getTime() - pet.lastPetResetAt.getTime() >= DAY_MS;
    const dailyPetCount = shouldReset ? 0 : pet.dailyPetCount;
    if (dailyPetCount >= GAME.dailyPetLimit) throw new Error("Pet này đã được âu yếm đủ 5 lần hôm nay.");

    const nextCount = dailyPetCount + 1;
    const affection = pet.affection + GAME.affectionPerPet;
    await tx.pet.update({
      where: { id: pet.id },
      data: { affection, dailyPetCount: nextCount, lastPetResetAt: shouldReset ? now : pet.lastPetResetAt, lastPettedAt: now }
    });
    await addUserExperience(tx, ownerId, GAME.petOwnerExperience);
    await addPetExperience(tx, pet.id, GAME.petPetExperience);
    return { affection, remaining: GAME.dailyPetLimit - nextCount };
  });
}

export async function feedPet(ownerId: string, petId: string, foodId: string): Promise<{ foodName: string; userExperience: number; petExperience: number }> {
  return prisma.$transaction(async (tx) => {
    const pet = await tx.pet.findFirstOrThrow({ where: { id: petId, ownerId } });
    const food = await tx.food.findUniqueOrThrow({ where: { id: foodId } });
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
    return { foodName: food.name, userExperience, petExperience };
  });
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
