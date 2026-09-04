import { prisma } from "../database/prisma.js";
import { addUserExperience } from "./experience.service.js";
import { GAME } from "../config/game.js";

const DAY_MS = 24 * 60 * 60 * 1_000;
const STREAK_BONUS_PER_DAY = 5;
const STREAK_BONUS_CAP = 50;

export interface DailyResult {
  claimed: boolean;
  gold: number;
  experience: number;
  streak: number;
  bonusPercent: number;
  nextInHours: number;
}

export async function claimDaily(userId: string): Promise<DailyResult> {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });
    const now = new Date();

    if (user.lastDailyAt) {
      const elapsed = now.getTime() - user.lastDailyAt.getTime();
      if (elapsed < DAY_MS) {
        const nextInHours = Math.ceil((DAY_MS - elapsed) / 3_600_000);
        return { claimed: false, gold: 0, experience: 0, streak: user.dailyStreak, bonusPercent: 0, nextInHours };
      }
    }

    const wasStreakBroken = user.lastDailyAt && (now.getTime() - user.lastDailyAt.getTime()) >= 2 * DAY_MS;
    const streak = wasStreakBroken ? 1 : user.dailyStreak + 1;
    const bonusPercent = Math.min((streak - 1) * STREAK_BONUS_PER_DAY, STREAK_BONUS_CAP);

    const baseGold = Math.floor(GAME.daily.baseGold + user.level * GAME.daily.goldPerLevel);
    const gold = Math.floor(baseGold * (1 + bonusPercent / 100));
    const baseExperience = GAME.daily.baseExp + user.level * GAME.daily.expPerLevel;
    const experience = Math.floor(baseExperience * (1 + bonusPercent / 100));

    await tx.user.update({ where: { id: userId }, data: { lastDailyAt: now, dailyStreak: streak, gold: { increment: gold } } });
    await addUserExperience(tx, userId, experience);

    return { claimed: true, gold, experience, streak, bonusPercent, nextInHours: 0 };
  });
}
