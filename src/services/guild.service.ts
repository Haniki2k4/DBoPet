import { prisma } from "../database/prisma.js";

const DEFAULT_PREFIX = "p!";
const prefixCache = new Map<string, string>();

export async function getPrefix(guildId?: string | null): Promise<string> {
  if (!guildId) return DEFAULT_PREFIX;
  const cached = prefixCache.get(guildId);
  if (cached) return cached;

  const config = await prisma.guildConfig.findUnique({ where: { guildId } });
  const prefix = config?.prefix ?? DEFAULT_PREFIX;
  prefixCache.set(guildId, prefix);
  return prefix;
}

export async function setPrefix(guildId: string, prefix: string): Promise<string> {
  const trimmed = prefix.trim();
  if (trimmed.length < 1 || trimmed.length > 5) {
    throw new Error("Prefix phải từ 1 đến 5 ký tự.");
  }
  if (trimmed === "/") {
    throw new Error("Prefix không thể là '/' — trùng với slash command.");
  }
  const config = await prisma.guildConfig.upsert({
    where: { guildId },
    update: { prefix: trimmed },
    create: { guildId, prefix: trimmed },
  });
  prefixCache.set(guildId, trimmed);
  return config.prefix;
}
