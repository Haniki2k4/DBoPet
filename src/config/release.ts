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
    version: "0.3.0",
    date: "2026-09-10",
    info: [
      "🐍 Th\u00eam lo\u00e0i v2 (+50 v\u00e0ng): R\u1eafn, Nh\u1ec7n, Chu\u1ed9t, Ch\u1ed3n — m\u1edf kh\u00f3a ngay t\u1eeb lv1.",
      "🦄 Th\u00eam lo\u00e0i v3 (+100 v\u00e0ng, y\u00eau c\u1ea7u lv15): K\u1ef3 l\u00e2n.",
      "💰 Ph\u00ed nh\u1eadn nu\u00f4i theo tier \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb r\u00f5 khi /adopt.",
    ],
  },
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