import { prisma } from "../database/prisma.js";
import { GAME } from "../config/game.js";
import { isNewVnDay } from "../utils/time.js";

export interface GameBudget {
  gamesLeftToday: number;
  rewardMultiplier: number;
  gold: number;
  experience: number;
}

export async function beginGame(discordId: string, baseGold: number, baseExp: number): Promise<GameBudget> {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { discordId } });
    const now = new Date();
    const resetNeeded = isNewVnDay(user.lastGameResetAt, now);
    const gamesToday = resetNeeded ? 0 : user.gamesToday;

    if (gamesToday >= GAME.minigame.maxGamesPerDay) {
      throw new Error(`Bạn đã chơi đủ ${GAME.minigame.maxGamesPerDay} ván hôm nay. Lượt làm mới vào 06:00.`);
    }

    const nextCount = gamesToday + 1;
    const decayed = nextCount > GAME.minigame.rewardDecayAfter;
    const rewardMultiplier = decayed ? 0.5 : 1;

    await tx.user.update({
      where: { id: user.id },
      data: { gamesToday: nextCount, gamesPlayed: { increment: 1 }, lastGameResetAt: resetNeeded ? now : user.lastGameResetAt }
    });

    return {
      gamesLeftToday: GAME.minigame.maxGamesPerDay - nextCount,
      rewardMultiplier,
      gold: Math.floor(baseGold * rewardMultiplier),
      experience: Math.floor(baseExp * rewardMultiplier)
    };
  });
}
