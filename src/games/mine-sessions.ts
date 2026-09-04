import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export type MineState = {
  grid: number[][];
  revealed: boolean[][];
  flagged: boolean[][];
  size: number;
  mines: number;
  userId: string;
  status: "playing" | "won" | "lost";
};

const EMOJI = ["⬜", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];

export function createMineGame(userId: string, size: number, mines: number): MineState {
  const grid = Array.from({ length: size }, () => Array(size).fill(0));
  const revealed = Array.from({ length: size }, () => Array(size).fill(false));
  const flagged = Array.from({ length: size }, () => Array(size).fill(false));

  let placed = 0;
  while (placed < mines) {
    const r = Math.floor(Math.random() * size);
    const c = Math.floor(Math.random() * size);
    if (grid[r][c] === -1) continue;
    grid[r][c] = -1;
    placed++;
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === -1) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < size && nc >= 0 && nc < size && grid[nr][nc] === -1) count++;
        }
      grid[r][c] = count;
    }
  }

  return { grid, revealed, flagged, size, mines, userId, status: "playing" };
}

export function reveal(state: MineState, r: number, c: number): void {
  if (state.status !== "playing" || state.revealed[r][c] || state.flagged[r][c]) return;
  if (state.grid[r][c] === -1) {
    state.revealed[r][c] = true;
    state.status = "lost";
    return;
  }
  flood(state, r, c);
  if (won(state)) state.status = "won";
}

function flood(state: MineState, r: number, c: number): void {
  if (r < 0 || r >= state.size || c < 0 || c >= state.size) return;
  if (state.revealed[r][c] || state.flagged[r][c] || state.grid[r][c] === -1) return;
  state.revealed[r][c] = true;
  if (state.grid[r][c] === 0) {
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) flood(state, r + dr, c + dc);
  }
}

export function toggleFlag(state: MineState, r: number, c: number): void {
  if (state.status !== "playing" || state.revealed[r][c]) return;
  state.flagged[r][c] = !state.flagged[r][c];
}

function won(state: MineState): boolean {
  return state.revealed.flat().filter(Boolean).length === state.size * state.size - state.mines;
}

export function cellEmoji(value: number, revealed: boolean, flagged: boolean): string {
  if (flagged) return "🚩";
  if (!revealed) return "🟦";
  if (value === -1) return "💣";
  return EMOJI[value];
}

export function mineRows(gameId: string, state: MineState): ActionRowBuilder<ButtonBuilder>[] {
  return state.grid.map((row, r) =>
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      row.map((_, c) => {
        const revealed = state.revealed[r][c];
        const flagged = state.flagged[r][c];
        const value = revealed ? state.grid[r][c] : undefined;
        const style = (() => {
          if (flagged) return ButtonStyle.Danger;
          if (value === -1) return ButtonStyle.Danger;
          return ButtonStyle.Secondary;
        })();
        return new ButtonBuilder()
          .setCustomId(`mine:${gameId}:${r}:${c}`)
          .setLabel("·")
          .setEmoji(cellEmoji(value!, revealed, flagged))
          .setStyle(style)
          .setDisabled(state.status !== "playing" || revealed);
      })
    )
  );
}
