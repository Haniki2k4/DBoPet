import { prisma } from "../database/prisma.js";
import { GAME } from "../config/game.js";
import { HouseType } from "@prisma/client";

export async function ensurePlayer(discordId: string) {
  const player = await prisma.user.upsert({
    where: { discordId },
    update: {},
    create: { discordId, gold: GAME.starterGold }
  });

  await prisma.userInventory.upsert({
    where: { userId_foodId: { userId: player.id, foodId: "basic-kibble" } },
    update: {},
    create: { userId: player.id, foodId: "basic-kibble", quantity: GAME.starterFoodQuantity }
  });

  const hasHouse = await prisma.userHouse.findFirst({ where: { userId: player.id } });
  if (!hasHouse) {
    await prisma.userHouse.create({ data: { userId: player.id, houseType: HouseType.BASIC } });
  }

  return player;
}

export async function getPlayer(discordId: string) {
  return prisma.user.findUnique({
    where: { discordId },
    include: { pets: { orderBy: { createdAt: "asc" } }, inventory: { include: { food: true } } }
  });
}
