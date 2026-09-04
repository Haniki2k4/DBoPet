import { ActionRowBuilder, ButtonInteraction, StringSelectMenuBuilder, StringSelectMenuInteraction } from "discord.js";
import { addUserExperience } from "../services/experience.service.js";
import { beginGame } from "../services/minigame.service.js";
import { prisma } from "../database/prisma.js";
import { boardRows, botMove, GameState, winner } from "../games/tic-tac-toe.js";
import { createMineGame, MineState, mineRows, reveal } from "../games/mine-sessions.js";

const ticTacToe = new Map<string, GameState>();
const mineGames = new Map<string, MineState>();

const WIN_BASE_GOLD = 40;
const DRAW_BASE_GOLD = 10;
const WIN_BASE_EXPERIENCE = 30;
const DRAW_BASE_EXPERIENCE = 8;

export const MINE_DIFFICULTY = {
  easy: { size: 5, mines: 4, gold: 20, exp: 15, label: "Dễ" },
  medium: { size: 6, mines: 8, gold: 45, exp: 30, label: "Trung bình" },
  hard: { size: 7, mines: 14, gold: 80, exp: 50, label: "Khó" }
} as const;

type DifficultyKey = keyof typeof MINE_DIFFICULTY;

export function startTicTacToe(gameId: string, userId: string, state: GameState): void {
  ticTacToe.set(gameId, state);
  setTimeout(() => ticTacToe.delete(gameId), 10 * 60 * 1_000);
}

export function mineDifficultyRow(gameId: string): ActionRowBuilder<StringSelectMenuBuilder> {
  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(`minediff:${gameId}`)
      .setPlaceholder("Chọn độ khó dò mìn")
      .addOptions(
        ...(Object.entries(MINE_DIFFICULTY) as Array<[DifficultyKey, typeof MINE_DIFFICULTY[DifficultyKey]]>).map(([key, config]) => ({
          label: `${config.label} (${config.size}x${config.size}, ${config.mines} mìn)`,
          description: `Thắng nhận ${config.gold} vàng + ${config.exp} EXP`,
          value: key,
          emoji: key === "easy" ? "🟢" : key === "medium" ? "🟡" : "🔴"
        }))
      )
  );
}

export async function handleButton(interaction: ButtonInteraction): Promise<void> {
  const [type, ...rest] = interaction.customId.split(":");
  if (type === "xo") return handleXo(interaction, rest);
  if (type === "mine") return handleMine(interaction, rest);
}

export async function handleSelectMenu(interaction: StringSelectMenuInteraction): Promise<void> {
  const [type, ...rest] = interaction.customId.split(":");
  if (type === "minediff") return handleMineDiff(interaction, rest);
}

async function handleMineDiff(interaction: StringSelectMenuInteraction, rest: string[]): Promise<void> {
  const [gameId] = rest;
  if (!gameId) return;
  const difficulty = interaction.values[0] as DifficultyKey | undefined;
  if (!difficulty || !MINE_DIFFICULTY[difficulty]) throw new Error("Độ khó không hợp lệ.");
  const config = MINE_DIFFICULTY[difficulty];
  const game = createMineGame(interaction.user.id, config.size, config.mines);
  mineGames.set(gameId, game);
  setTimeout(() => mineGames.delete(gameId), 10 * 60 * 1_000);
  await interaction.update({ content: `💣 **Dò mìn ${config.label}** (${config.size}x${config.size}, ${config.mines} mìn). Bấm ô để dò, tránh mìn!`, components: mineRows(gameId, game) });
}

async function handleMine(interaction: ButtonInteraction, rest: string[]): Promise<void> {
  const [gameId, r, c] = rest;
  if (!gameId || r === undefined || c === undefined) return;
  const game = mineGames.get(gameId);
  if (!game) throw new Error("Ván dò mìn này đã hết hạn. Chọn lại bằng /play.");
  if (game.userId !== interaction.user.id) throw new Error("Đây không phải ván dò mìn của bạn.");
  const row = Number(r);
  const col = Number(c);
  if (!Number.isInteger(row) || !Number.isInteger(col)) throw new Error("Nước đi không hợp lệ.");

  const config = difficultyFor(game);
  let gamesLeft = 0;
  let rewardMultiplier = 1;
  if (game.status === "playing") {
    try {
      const budget = await beginGame(interaction.user.id, config.gold, config.exp);
      gamesLeft = budget.gamesLeftToday;
      rewardMultiplier = budget.rewardMultiplier;
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? error.message : "Không thể bắt đầu ván.");
    }
  }

  reveal(game, row, col);

  if (game.status === "lost") {
    await interaction.update({ content: `💣 Bạn trúng mìn! Thử lại với /play nhé.`, components: mineRows(gameId, game) });
    mineGames.delete(gameId);
    return;
  }

  if (game.status === "won") {
    const gold = Math.floor(config.gold * rewardMultiplier);
    const exp = Math.floor(config.exp * rewardMultiplier);
    await grantReward(interaction.user.id, gold, exp);
    await interaction.update({ content: `🎉 Bạn thắng dò mìn! Nhận ${gold} vàng và ${exp} EXP${rewardMultiplier < 1 ? " (nửa thưởng)" : ""}.`, components: mineRows(gameId, game) });
    mineGames.delete(gameId);
    return;
  }

  await interaction.update({ content: `💣 **Dò mìn ${config.label}** — bấm ô để dò, tránh mìn. Còn ${gamesLeft} ván hôm nay.`, components: mineRows(gameId, game) });
}

function difficultyFor(game: MineState): typeof MINE_DIFFICULTY[DifficultyKey] {
  for (const config of Object.values(MINE_DIFFICULTY)) {
    if (config.size === game.size && config.mines === game.mines) return config;
  }
  return MINE_DIFFICULTY.easy;
}

async function handleXo(interaction: ButtonInteraction, rest: string[]): Promise<void> {
  const [gameId, cell] = rest;
  if (!gameId || !cell) return;
  const game = ticTacToe.get(gameId);
  if (!game) throw new Error("Ván XO này đã hết hạn. Hãy dùng /play để chơi lại.");
  if (game.userId !== interaction.user.id) throw new Error("Đây không phải ván XO của bạn.");
  const cellIndex = Number(cell);
  if (!Number.isInteger(cellIndex) || game.board[cellIndex] !== null || game.completed) throw new Error("Nước đi này không hợp lệ.");

  let gamesLeft = 0;
  let rewardMultiplier = 1;
  try {
    const budget = await beginGame(interaction.user.id, WIN_BASE_GOLD, WIN_BASE_EXPERIENCE);
    gamesLeft = budget.gamesLeftToday;
    rewardMultiplier = budget.rewardMultiplier;
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : "Không thể bắt đầu ván.");
  }

  game.board[cellIndex] = "X";
  let outcome = winner(game.board);
  if (!outcome) {
    botMove(game.board);
    outcome = winner(game.board);
  }
  if (outcome) game.completed = true;

  let content = `Bạn là **X**, bot là **O**. Còn ${gamesLeft} ván hôm nay.`;
  if (outcome === "X") {
    const gold = Math.floor(WIN_BASE_GOLD * rewardMultiplier);
    const exp = Math.floor(WIN_BASE_EXPERIENCE * rewardMultiplier);
    await grantReward(interaction.user.id, gold, exp);
    content = `🎉 Bạn thắng! Nhận ${gold} vàng và ${exp} EXP${rewardMultiplier < 1 ? " (nửa thưởng)" : ""}. Còn ${gamesLeft} ván hôm nay.`;
  } else if (outcome === "DRAW") {
    const gold = Math.floor(DRAW_BASE_GOLD * rewardMultiplier);
    const exp = Math.floor(DRAW_BASE_EXPERIENCE * rewardMultiplier);
    await grantReward(interaction.user.id, gold, exp);
    content = `🤝 Hòa! Nhận ${gold} vàng và ${exp} EXP${rewardMultiplier < 1 ? " (nửa thưởng)" : ""}. Còn ${gamesLeft} ván hôm nay.`;
  } else if (outcome === "O") {
    content = `Bot thắng lần này. Thử lại với /play nhé! (Còn ${gamesLeft} ván hôm nay)`;
  }
  await interaction.update({ content, components: boardRows(gameId, game) });
  if (outcome) ticTacToe.delete(gameId);
}

async function grantReward(discordId: string, gold: number, experience: number): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { discordId } });
    await tx.user.update({ where: { id: user.id }, data: { gold: { increment: gold } } });
    await addUserExperience(tx, user.id, experience);
  });
}
