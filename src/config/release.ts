import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface ChangelogEntry {
  version: string;
  date: string;
  /** Thông tin tổng quan về bản cập nhật do dev soạn (hiển thị trong thông báo). */
  info: string[];
}

/**
 * Danh sách thay đổi theo phiên bản (mới nhất trước).
 * Khi phát hành bản mới: thêm entry + bump version trong package.json cùng lúc.
 */
export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.2.0",
    date: "2026-09-10",
    info: [
      "📣 Thêm lệnh /notify (và p!notify) — đăng ký kênh nhận thông báo cập nhật.",
      "🔔 Bot tự gửi thông báo cập nhật phiên bản mới đến kênh đã đăng ký.",
    ],
  },
];

export function currentVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf8")) as { version?: string };
    return pkg.version ?? "0.0.0";
  } catch {
    return "0.0.0";
  }
}

export function changelogFor(version: string): ChangelogEntry | null {
  return CHANGELOG.find((entry) => entry.version === version) ?? null;
}