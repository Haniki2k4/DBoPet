import { EmbedBuilder, Message } from "discord.js";
import { HouseType, PetSpecies } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { GAME, houseSlotCount, HOUSE_PRIORITY, moodLabel, petExperienceBonus, SPECIES } from "../config/game.js";
import { boardRows, createGame } from "../games/tic-tac-toe.js";
import { mineDifficultyRow, startTicTacToe } from "./button-handler.js";
import { ensurePlayer, getPlayer } from "../services/player.service.js";
import { adoptPet, feedPet, petPet, totalPetCapacity } from "../services/pet.service.js";
import { buyFood, buyHouse } from "../services/shop.service.js";
import { claimDaily } from "../services/daily.service.js";
import { setPrefix } from "../services/guild.service.js";
import { prisma } from "../database/prisma.js";

export function parsePrefixCommand(content: string, prefix: string): { args: string[] } | null {
  if (!content.toLowerCase().startsWith(prefix.toLowerCase())) return null;
  const rest = content.slice(prefix.length).trim();
  return { args: rest.split(/\s+/).filter(Boolean) };
}

export async function handlePrefixCommand(message: Message, prefix: string): Promise<void> {
  const parsed = parsePrefixCommand(message.content, prefix);
  if (!parsed) return;
  const [rawCommand, ...args] = parsed.args;
  if (!rawCommand) return;
  const command = rawCommand.toLowerCase();

  try {
    await route(message, command, args);
  } catch (error: unknown) {
    const text = error instanceof Error ? error.message : "Đã có lỗi không xác định.";
    await privateReply(message, `⚠️ ${text}`);
  }
}

async function route(message: Message, command: string, args: string[]): Promise<void> {
  const player = await ensurePlayer(message.author.id);

  switch (command) {
    case "start": return pStart(message);
    case "help": return pHelp(message, args);
    case "adopt": return pAdopt(message, player.id, args);
    case "pets": return pPets(message, player.id);
    case "feed": return pFeed(message, player.id, args);
    case "petting": return pPetting(message, player.id, args);
    case "daily": return pDaily(message, player.id);
    case "profile": return pProfile(message, player.id);
    case "inventory": return pInventory(message, player.id);
    case "shop": case "shopfood": case "shophouse": return pShop(message, player.id, command, args);
    case "house": return pHouse(message, player.id);
    case "play": return pPlay(message, args);
    case "leaderboard": return pLeaderboard(message);
    case "setprefix": return pSetPrefix(message, args);
    default:
      await message.reply(`Không nhận ra lệnh \`${command}\`. Gõ \`${"p!"}help\` để xem danh sách lệnh.`);
  }
}

async function pStart(message: Message): Promise<void> {
  await message.reply(`🐾 Bạn đã sẵn sàng chơi! Nhận quà khởi đầu xong rồi.\nDùng **p!adopt** để nhận pet đầu tiên (2 pet đầu miễn phí). Xem hướng dẫn: **p!help**.`);
}

async function pHelp(message: Message, args: string[]): Promise<void> {
  const category = args[0]?.toLowerCase();
  const description = category ? helpCategory(category) : helpAll();
  await message.reply({ embeds: [new EmbedBuilder().setColor(0x5865F2).setTitle("🐾 Pet Haven — Lệnh text (prefix p!)").setDescription(description)] });
}

function helpCategory(category: string): string {
  const sections: Record<string, string> = {
    pet: ["**Chăm sóc pet**", "`adopt <loài> <tên>` — Loài: dog, cat, hamster, rabbit, bird, fish", "`pets` — xem pet + mã pet", "`feed [mã pet] [mã thức ăn]`", "`petting [mã pet]` — âu yếm, 5 lần/ngày"].join("\n"),
    kinh: ["**Kinh tế & tiến trình**", "`daily` — điểm danh hằng ngày", "`profile` — level, vàng, pet", "`inventory` — kho thức ăn", "`shop food [id] [sl]` — xem/mua thức ăn", "`shop house [id] [replace]` — xem/mua nhà", "`house` — xem nhà đang sở hữu"].join("\n"),
    game: ["**Mini-game**", "`play xo` — chơi XO", "`play mine` — chơi dò mìn"].join("\n"),
  };
  return sections[category] ?? "Danh mục không hợp lệ. Các danh mục: pet, stat, game.";
}

function helpAll(): string {
  return [
    "**Chăm sóc pet**",
    "`p!adopt <loài> <tên>` — dog/cat/hamster/rabbit/bird/fish (2 pet đầu miễn phí)",
    "`p!pets` — xem danh sách & mã pet",
    "`p!feed` · `p!petting` — cho ăn / âu yếm pet",
    "",
    "**Kinh tế & nhà**",
    "`p!daily` · `p!profile` · `p!inventory`",
    "`p!shop` · `p!shop food [id]` · `p!shop house [id]`",
    "`p!house` — xem nhà sở hữu, slot, sức chứa",
    "",
    "**Mini-game**",
    "`p!play xo` · `p!play mine`",
    "",
    "**Khác**",
    "`p!leaderboard` — bảng xếp hạng",
    "`p!help <pet|kinh|game>` — hướng dẫn theo danh mục",
  ].join("\n");
}

async function privateReply(message: Message, content: string | { embeds: EmbedBuilder[] }): Promise<void> {
  try {
    await message.delete();
  } catch {
    // Bot không có quyền xóa hoặc lệnh quá cũ — vẫn tiếp tục gửi DM.
  }
  try {
    await message.author.send(content);
  } catch {
    // Người dùng tắt DM — không gửi được, không crash.
  }
}

async function pAdopt(message: Message, userId: string, args: string[]): Promise<void> {
  const speciesRaw = args[0]?.toUpperCase();
  const name = args.slice(1).join(" ").trim();
  if (!speciesRaw || !name) {
    await message.reply("Cách dùng: `p!adopt <loài> <tên>` — loài: DOG, CAT, HAMSTER, RABBIT, BIRD, FISH. Ví dụ: `p!adopt rabbit Thỏ Con`");
    return;
  }
  const species = normalizeSpecies(speciesRaw);
  if (!species) {
    await message.reply("Loài không hợp lệ. Chọn: dog, cat, hamster, rabbit, bird, fish.");
    return;
  }
  const option = SPECIES[species];
  const variant = option.variants[Math.floor(Math.random() * option.variants.length)];
  const petCount = await prisma.pet.count({ where: { ownerId: userId } });
  const feeNote = petCount >= GAME.adopt.freeAdopts ? ` (phí ${GAME.adopt.cost} vàng)` : " (miễn phí)";
  const { pet, feeApplied } = await adoptPet(userId, species, name, variant);
  const feeMsg = feeApplied ? `\n🪙 Đã trừ ${GAME.adopt.cost} vàng phí nhận nuôi.` : "";
  await privateReply(message, `✨ Bạn đã nhận **${name}** — ${option.icon} ${option.label} giống ${variant}${feeNote}${feeMsg}\nMã pet: \`${pet.petCode}\``);
}

function normalizeSpecies(raw: string): PetSpecies | null {
  const aliases: Record<string, PetSpecies> = {
    DOG: PetSpecies.DOG, DOGS: PetSpecies.DOG, CHO: PetSpecies.DOG,
    CAT: PetSpecies.CAT, CATS: PetSpecies.CAT, MEO: PetSpecies.CAT,
    HAMSTER: PetSpecies.HAMSTER, HAMSTERS: PetSpecies.HAMSTER,
    RABBIT: PetSpecies.RABBIT, THO: PetSpecies.RABBIT,
    BIRD: PetSpecies.BIRD, CHIM: PetSpecies.BIRD,
    FISH: PetSpecies.FISH, CA: PetSpecies.FISH, FISHES: PetSpecies.FISH,
  };
  return aliases[raw] ?? null;
}

async function pPets(message: Message, userId: string): Promise<void> {
  const pets = await prisma.pet.findMany({ where: { ownerId: userId }, orderBy: { createdAt: "asc" } });
  if (pets.length === 0) {
    await privateReply(message, "Bạn chưa có pet nào. Dùng `p!adopt` để nhận một người bạn nhé!");
    return;
  }
  const description = pets.map((pet) => {
    const species = SPECIES[pet.species];
    return `${species.icon} **${pet.name}** · ${pet.variant}\n` +
      `Lv.${pet.level} · bonus +${petExperienceBonus(pet.level)}% EXP · ${moodLabel(pet.mood)} · comfort ${pet.comfort}/100 · yêu thích ${pet.affection}\n` +
      `Mã: \`${pet.petCode}\``;
  }).join("\n\n");
  await privateReply(message, { embeds: [new EmbedBuilder().setColor(0x7BC96F).setTitle("Các pet của bạn").setDescription(description)] });
}

async function pFeed(message: Message, userId: string, args: string[]): Promise<void> {
  const player = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const pets = await prisma.pet.findMany({ where: { ownerId: userId }, orderBy: { createdAt: "asc" } });
  if (pets.length === 0) {
    await privateReply(message, "Bạn chưa có pet. Dùng `p!adopt` để nhận pet nhé!");
    return;
  }

  let petCode: string | null = args[0] ?? null;
  let foodId: string | null = args[1] ?? null;

  if (!petCode || !foodId) {
    await privateReply(message, await feedCatalog(player.id));
    return;
  }
  const result = await feedPet(player.id, petCode, foodId);
  await privateReply(message, `🍽️ ${message.author.username} đã cho **${result.petName}** ăn **${result.foodName}**! +${result.userExperience} EXP cho ${message.author.username}, +${result.petExperience} EXP cho ${result.petName}.`);
}

async function feedCatalog(userId: string): Promise<string> {
  const pets = await prisma.pet.findMany({ where: { ownerId: userId }, orderBy: { createdAt: "asc" } });
  const inventory = await prisma.userInventory.findMany({ where: { userId }, include: { food: true } });
  const petLines = pets.length
    ? pets.map((p) => `${SPECIES[p.species].icon} \`${p.petCode}\` **${p.name}** (${SPECIES[p.species].label})`).join("\n")
    : "Chưa có pet";
  const foodLines = inventory
    .filter((i) => i.quantity > 0)
    .map((i) => `${i.food.icon} \`${i.food.id}\` **${i.food.name}** — còn ${i.quantity} phần`)
    .join("\n") || "Kho trống. Mua bằng `p!shop food`";
  return [
    "**Danh sách pet**",
    petLines,
    "",
    "**Kho thức ăn**",
    foodLines,
    "",
    "Dùng: `p!feed <mã pet> <mã thức ăn>`  → ví dụ `p!feed 00001 basic-kibble`",
  ].join("\n");
}

async function pPetting(message: Message, userId: string, args: string[]): Promise<void> {
  const pets = await prisma.pet.findMany({ where: { ownerId: userId }, orderBy: { createdAt: "asc" } });
  if (pets.length === 0) {
    await privateReply(message, "Bạn chưa có pet. Dùng `p!adopt` nhé!");
    return;
  }
  let petCode: string | null = args[0] ?? null;
  if (!petCode) {
    if (pets.length === 1) {
      petCode = pets[0].petCode;
    } else {
      const lines = pets.map((p) => `${SPECIES[p.species].icon} \`${p.petCode}\` **${p.name}** — đã âu yếm ${p.dailyPetCount}/5 · yêu thích ${p.affection}`).join("\n");
      await privateReply(message, { embeds: [new EmbedBuilder().setColor(0xF9A8D8).setTitle("Chọn pet để âu yếm").setDescription(`${lines}\n\nDùng: \`p!petting <mã pet>\``)] });
      return;
    }
  }
  const result = await petPet(userId, petCode);
  await privateReply(message, `💖 Pet rất thích! Yêu thích: **${result.affection}**. Còn ${result.remaining}/${GAME.dailyPetLimit} lượt hôm nay.`);
}

async function pDaily(message: Message, userId: string): Promise<void> {
  const result = await claimDaily(userId);
  if (!result.claimed) {
    await message.reply(`⏳ Bạn đã điểm danh hôm nay rồi. Quay lại sau **${result.nextInHours} giờ** nữa. (Streak: ${result.streak} ngày)`);
    return;
  }
  const streakLine = result.bonusPercent > 0 ? ` · Streak **${result.streak}** ngày (+${result.bonusPercent}%)` : ` · Streak **${result.streak}** ngày`;
  await message.reply(`📅 **Điểm danh hằng ngày**${streakLine}\n🪙 +${result.gold} vàng\n✨ +${result.experience} EXP`);
}

async function pProfile(message: Message, userId: string): Promise<void> {
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const pets = await prisma.pet.count({ where: { ownerId: userId } });
  const capacity = await totalPetCapacity(userId);
  const slots = houseSlotCount(user.level);
  const ownedHouses = await prisma.userHouse.count({ where: { userId } });
  const house = GAME.house[user.activeHouse];
  const embed = new EmbedBuilder()
    .setColor(0xF4B942)
    .setTitle(`Hồ sơ của ${message.author.username}`)
    .addFields(
      { name: "Level", value: `${user.level} (${user.experience}/${user.level * GAME.baseExperiencePerLevel} EXP)`, inline: true },
      { name: "Vàng", value: `🪙 ${user.gold}`, inline: true },
      { name: "Tổng pet", value: `🐾 ${pets} pet`, inline: true },
      { name: "Nhà đang dùng", value: `${house.icon} ${house.name} · chứa ${pets}/${capacity} pet`, inline: false },
      { name: "Slot nhà", value: `${ownedHouses}/${slots} slot`, inline: true }
    );
  await message.reply({ embeds: [embed] });
}

async function pInventory(message: Message, userId: string): Promise<void> {
  const player = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const inventory = await prisma.userInventory.findMany({ where: { userId }, include: { food: true } });
  const foodByType = new Map(inventory.map((i) => [i.foodId, i.quantity]));
  const allFoods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
  const lines = allFoods.map((food) => {
    const qty = foodByType.get(food.id) ?? 0;
    let statusText = "";
    if (qty === 0) {
      statusText = " · ❌ **hết**";
    } else if (qty < GAME.lowInventoryThreshold) {
      statusText = ` · ⚠️ còn ${qty} (sắp hết)`;
    } else {
      statusText = ` · còn ${qty} phần`;
    }
    const locked = player.level < food.unlockLevel ? ` 🔒 Lv.${food.unlockLevel}` : "";
    return `${food.icon} **${food.name}**${statusText}${locked}\nID: \`${food.id}\``;
  });
  await message.reply({ embeds: [new EmbedBuilder().setColor(0x5BA7D1).setTitle("Kho thức ăn").setDescription(lines.join("\n"))] });
}

async function pShop(message: Message, userId: string, command: string, args: string[]): Promise<void> {
  const player = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const sub = args[0]?.toLowerCase() ?? (command === "shopfood" ? "food" : command === "shophouse" ? "house" : "");

  if (sub === "food") {
    const foodId = args[1];
    const quantity = args[2] ? Number(args[2]) : 1;
    if (foodId) {
      const result = await buyFood(userId, foodId, quantity);
      await message.reply(`✅ Đã mua ${quantity} × ${result.food.icon} **${result.food.name}** với ${result.cost} vàng.`);
      return;
    }
    const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
    const list = foods.map((f) => `${f.icon} **${f.name}** — ${f.price} vàng · Lv.${f.unlockLevel}\n\`${f.id}\``).join("\n");
    await message.reply({ embeds: [new EmbedBuilder().setColor(0xF4B942).setTitle("🛒 Shop thức ăn").setDescription(list).setFooter({ text: "Mua: p!shop food <id> <số lượng>" })] });
    return;
  }

  if (sub === "house" || sub === "") {
    const houseId = args[1]?.toUpperCase() as HouseType | undefined;
    const replaceId = args[2]?.toUpperCase() as HouseType | undefined;
    if (houseId && isHouseType(houseId)) {
      const result = await buyHouse(userId, houseId, isHouseType(replaceId ?? "") ? replaceId : undefined);
      const house = GAME.house[houseId];
      const action = result.replaced ? ` thay thế **${GAME.house[result.replaced].name}**` : ` (slot ${result.ownedCount}/${result.totalSlots})`;
      await message.reply(`🏠 Đã mua ${house.icon} **${house.name}**${action}. Sức chứa ${house.maxPets} pet.`);
      return;
    }
    const owned = await prisma.userHouse.findMany({ where: { userId } });
    const ownedTypes = owned.map((h) => h.houseType);
    const slots = houseSlotCount(player.level);
    const ownedCount = owned.length;
    const list = Object.entries(GAME.house).map(([id, h]) => {
      const already = ownedTypes.includes(id as HouseType) ? " ✓ đã sở hữu" : "";
      return `${h.icon} **${h.name}** — ${h.price} vàng · Lv.${h.unlockLevel}${already}\n\`${id}\` · chứa ${h.maxPets} pet`;
    }).join("\n");
    await message.reply({ embeds: [new EmbedBuilder().setColor(0xC084FC).setTitle(`🏠 Shop nhà ở (${ownedCount}/${slots} slot)`).setDescription(list).setFooter({ text: "Mua: p!shop house <id> [replace] | xem: p!house" })] });
    return;
  }

  await message.reply("Cách dùng: `p!shop food` hoặc `p!shop house`.");
}

function isHouseType(value: string): value is HouseType {
  return value === "BASIC" || value === "COZY" || value === "VILLA";
}

async function pHouse(message: Message, userId: string): Promise<void> {
  const owned = await prisma.userHouse.findMany({ where: { userId } });
  const sorted = [...owned].sort((a, b) => HOUSE_PRIORITY[a.houseType] - HOUSE_PRIORITY[b.houseType]);
  const player = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const slots = houseSlotCount(player.level);
  const capacity = await totalPetCapacity(userId);
  const petCount = await prisma.pet.count({ where: { ownerId: userId } });
  const best = sorted.length ? sorted.reduce((max, h) => (HOUSE_PRIORITY[h.houseType] > HOUSE_PRIORITY[max.houseType] ? h : max), sorted[0]) : null;
  const lines = sorted.length ? sorted.map((h) => `${GAME.house[h.houseType].icon} **${GAME.house[h.houseType].name}** — chứa ${GAME.house[h.houseType].maxPets}${best?.houseType === h.houseType ? " ⭐" : ""}`).join("\n") : "Chưa có nhà";
  await message.reply({ embeds: [new EmbedBuilder().setColor(0x8FB3D9).setTitle("🏠 Nhà của bạn").setDescription(lines).addFields({ name: "Slot / sức chứa", value: `${sorted.length}/${slots} slot · ${petCount}/${capacity} pet`, inline: true })] });
}

async function pPlay(message: Message, args: string[]): Promise<void> {
  const game = args[0]?.toLowerCase() ?? "xo";
  if (game === "mine") {
    const gameId = randomUUID();
    await message.reply({ content: `💣 **Dò mìn** — chọn độ khó. Giới hạn ${GAME.minigame.maxGamesPerDay} ván/ngày.`, components: [mineDifficultyRow(gameId)] });
    return;
  }
  const gameId = randomUUID();
  const state = createGame(message.author.id);
  startTicTacToe(gameId, message.author.id, state);
  await message.reply({ content: `🎮 **XO** — Bạn là **X**, bot là **O**. Chọn ô để đi.`, components: boardRows(gameId, state) });
}

async function pLeaderboard(message: Message): Promise<void> {
  const topLevel = await prisma.user.findMany({ orderBy: [{ level: "desc" }, { experience: "desc" }], take: 10, include: { _count: { select: { pets: true } } } });
  const topGold = await prisma.user.findMany({ orderBy: { gold: "desc" }, take: 10 });
  const levelLines = topLevel.map((u, i) => `${i + 1}. <@${u.discordId}> — Lv.${u.level} · ${u._count.pets} pet`).join("\n");
  const goldLines = topGold.map((u, i) => `${i + 1}. <@${u.discordId}> — 🪙 ${u.gold}`).join("\n");
  await message.reply({ embeds: [new EmbedBuilder().setColor(0xE1C699).setTitle("🏆 Bảng xếp hạng").addFields({ name: "Level", value: levelLines || "Chưa có", inline: true }, { name: "Vàng", value: goldLines || "Chưa có", inline: true })] });
}

async function pSetPrefix(message: Message, args: string[]): Promise<void> {
  if (!message.guild) {
    await message.reply("Lệnh prefix chỉ dùng được trong máy chủ.");
    return;
  }
  const newPrefix = args[0];
  if (!newPrefix) {
    await message.reply("Cách dùng: `p!setprefix <prefix>` — ví dụ `p!setprefix !`");
    return;
  }
  try {
    const prefix = await setPrefix(message.guild.id, newPrefix);
    await message.reply(`✅ Đã đổi prefix thành \`${prefix}\`. Thử \`${prefix}help\` nhé!`);
  } catch (error: unknown) {
    await message.reply(`⚠️ ${error instanceof Error ? error.message : "Đã có lỗi"}`);
  }
}
