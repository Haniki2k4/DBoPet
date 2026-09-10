import { Client, EmbedBuilder } from "discord.js";
import { prisma } from "../database/prisma.js";
import { changelogFor, currentVersion, type ChangelogEntry } from "../config/release.js";

/**
 * Nâng cấp schema nhẹ cho các DB cũ (server chạy bản trước khi có
 * các cột thông báo): thêm cột nếu chưa tồn tại, không xoá dữ liệu.
 */
export async function ensureAnnouncementColumns(): Promise<void> {
  const fields = await prisma.$queryRawUnsafe<{ name: string }[]>("PRAGMA table_info(\"GuildConfig\")");
  const names = fields.map((field) => field.name);
  if (!names.includes("announcementChannelId")) {
    await prisma.$executeRawUnsafe('ALTER TABLE "GuildConfig" ADD COLUMN "announcementChannelId" TEXT');
  }
  if (!names.includes("lastAnnouncedVersion")) {
    await prisma.$executeRawUnsafe('ALTER TABLE "GuildConfig" ADD COLUMN "lastAnnouncedVersion" TEXT');
  }
}

export async function getNotificationChannel(guildId: string): Promise<string | null> {
  const config = await prisma.guildConfig.findUnique({
    where: { guildId },
    select: { announcementChannelId: true },
  });
  return config?.announcementChannelId ?? null;
}

export async function setNotificationChannel(guildId: string, channelId: string | null): Promise<void> {
  await prisma.guildConfig.upsert({
    where: { guildId },
    update: { announcementChannelId: channelId },
    create: { guildId, announcementChannelId: channelId },
  });
}

function buildAnnouncementEmbed(entry: ChangelogEntry): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(0x7BC96F)
    .setTitle(`📢 Pet Haven — Cập nhật v${entry.version}`)
    .setDescription(entry.info.map((line) => `• ${line}`).join("\n"))
    .setFooter({ text: `Ngày phát hành: ${entry.date}` });
  return embed;
}

/**
 * Gửi thông báo cập nhật mới nhất cho 1 server nếu chưa gửi phiên bản
 * này. Trả về true nếu đã gửi.
 */
export async function sendLatestUpdateToGuild(client: Client, guildId: string): Promise<boolean> {
  const version = currentVersion();
  const entry = changelogFor(version);
  if (!entry) return false;
  const config = await prisma.guildConfig.findUnique({ where: { guildId } });
  const channelId = config?.announcementChannelId;
  if (!channelId || config.lastAnnouncedVersion === version) return false;

  const channel = await client.channels.fetch(channelId).catch(() => null);
  if (!channel || !channel.isTextBased() || channel.isDMBased()) return false;

  try {
    await channel.send({ embeds: [buildAnnouncementEmbed(entry)] });
  } catch {
    // Thiếu quyền hoặc kênh đã bị xoá — bỏ qua server này.
    return false;
  }
  await prisma.guildConfig.update({ where: { guildId }, data: { lastAnnouncedVersion: version } });
  return true;
}

/** Gửi thông báo cho tất cả server đã đăng ký, đúng 1 lần cho mỗi phiên bản. */
export async function broadcastUpdateNotifications(client: Client): Promise<void> {
  const configs = await prisma.guildConfig.findMany({ where: { announcementChannelId: { not: null } } });
  for (const config of configs) {
    await sendLatestUpdateToGuild(client, config.guildId);
  }
}