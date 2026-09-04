import { HouseType } from "@prisma/client";
import { GAME } from "../config/game.js";
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

export async function buyHouse(userId: string, house: HouseType): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });
    const offer = GAME.house[house];
    if (user.level < offer.unlockLevel) throw new Error(`Cần level chủ ${offer.unlockLevel} để mua ${offer.name}.`);
    if (user.gold < offer.price) throw new Error(`Bạn cần ${offer.price} vàng để mua ${offer.name}.`);
    await tx.user.update({ where: { id: userId }, data: { gold: { decrement: offer.price }, activeHouse: house } });
    await tx.pet.updateMany({
      where: { ownerId: userId, comfort: { lt: offer.comfortFloor } },
      data: { comfort: offer.comfortFloor }
    });
  });
}
