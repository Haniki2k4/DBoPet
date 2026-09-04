import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const BOARD_SIZE = 9;
const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
] as const;

export type GameState = { board: Array<"X" | "O" | null>; userId: string; completed: boolean };

export function createGame(userId: string): GameState {
  return { board: Array.from({ length: BOARD_SIZE }, () => null), userId, completed: false };
}

export function winner(board: GameState["board"]): "X" | "O" | "DRAW" | null {
  for (const [first, second, third] of WINNING_LINES) {
    if (board[first] && board[first] === board[second] && board[first] === board[third]) return board[first];
  }
  return board.every(Boolean) ? "DRAW" : null;
}

export function botMove(board: GameState["board"]): void {
  const empty = board.map((value, index) => value === null ? index : -1).filter((index) => index >= 0);
  if (empty.length === 0) return;
  const selected = empty[Math.floor(Math.random() * empty.length)];
  board[selected] = "O";
}

export function boardRows(gameId: string, state: GameState): ActionRowBuilder<ButtonBuilder>[] {
  return [0, 1, 2].map((row) => {
    const buttons = [0, 1, 2].map((column) => {
      const index = row * 3 + column;
      const value = state.board[index];
      return new ButtonBuilder()
        .setCustomId(`xo:${gameId}:${index}`)
        .setLabel(value ?? "·")
        .setStyle(value === "X" ? ButtonStyle.Primary : value === "O" ? ButtonStyle.Danger : ButtonStyle.Secondary)
        .setDisabled(value !== null || state.completed);
    });
    return new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);
  });
}
