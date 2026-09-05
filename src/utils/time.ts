// Vietnam timezone offset: UTC+7 = 7 * 60 * 60 * 1000 ms
const VN_OFFSET_MS = 7 * 60 * 60 * 1_000;

// Daily reset at 06:00 VN time (UTC+7)
const RESET_HOUR_VN = 6;

/**
 * Returns the most recent 06:00 VN-time boundary (as UTC epoch ms) at or before `date`.
 * Two timestamps belong to the same "VN day" when they share the same boundary value.
 */
export function vnDayBoundary(date: Date): number {
  // Shift to VN wall-clock
  const vnMs = date.getTime() + VN_OFFSET_MS;
  const vnDate = new Date(vnMs);

  // 06:00 VN = 06:00 UTC+7 expressed as UTC epoch ms
  const boundary =
    Date.UTC(
      vnDate.getUTCFullYear(),
      vnDate.getUTCMonth(),
      vnDate.getUTCDate(),
      RESET_HOUR_VN,
    ) - VN_OFFSET_MS;

  // If we have not yet reached 06:00 today (VN time), the active boundary is yesterday's
  return date.getTime() < boundary ? boundary - 24 * 60 * 60 * 1_000 : boundary;
}

/**
 * Returns true when `last` belongs to an earlier VN day than `now`.
 * Use this to decide whether a daily-limited action should reset.
 */
export function isNewVnDay(last: Date, now: Date): boolean {
  return vnDayBoundary(last) < vnDayBoundary(now);
}

/**
 * Milliseconds from `now` until the next 06:00 VN reset.
 */
export function msUntilNextVnReset(now: Date): number {
  return vnDayBoundary(now) + 24 * 60 * 60 * 1_000 - now.getTime();
}
