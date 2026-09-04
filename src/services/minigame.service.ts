import { prisma } from "../database/prisma.js";
import { GAME } from "../config/game.js";

const DAY_MS = 24 * 60 * 60 * 1_000;

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
    const resetNeeded = now.getTime() - user.lastGameResetAt.getTime() >= DAY_MS;
    const gamesToday = resetNeeded ? 0 : user.gamesToday;

    if (gamesToday >= GAME.minigame.maxGamesPerDay) {
      throw new Error(`Bạn đã chơi đủ ${GAME.minigame.maxGamesPerDay} ván hôm nay. Quay lại vào ngày mai nhé!`);
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
