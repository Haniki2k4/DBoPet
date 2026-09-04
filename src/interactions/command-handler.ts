import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { HouseType, PetSpecies } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { GAME, moodLabel, petExperienceBonus, SPECIES } from "../config/game.js";
import { boardRows, createGame } from "../games/tic-tac-toe.js";
import { mineDifficultyRow, startTicTacToe } from "./button-handler.js";
import { ensurePlayer, getPlayer } from "../services/player.service.js";
import { adoptPet, feedPet, petPet } from "../services/pet.service.js";
import { buyFood, buyHouse } from "../services/shop.service.js";
import { claimDaily } from "../services/daily.service.js";
import { prisma } from "../database/prisma.js";

export async function handleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
  switch (interaction.commandName) {
    case "start": return start(interaction);
    case "adopt": return adopt(interaction);
    case "profile": return profile(interaction);
    case "daily": return daily(interaction);
    case "pets": return pets(interaction);
    case "feed": return feed(interaction);
    case "petting": return petting(interaction);
    case "inventory": return inventory(interaction);
    case "shop": return shop(interaction);
    case "play": return play(interaction);
    case "help": return help(interaction);
    case "leaderboard": return leaderboard(interaction);
    default: return;
  }
}

async function start(interaction: ChatInputCommandInteraction): Promise<void> {
  const existing = await getPlayer(interaction.user.id);
  const player = await ensurePlayer(interaction.user.id);
  await interaction.reply(existing
    ? "Bạn đã có hồ sơ rồi. Dùng /adopt để nhận pet hoặc /profile để xem tiến trình."
    : `🎁 Chào mừng! Bạn nhận ${GAME.starterGold} vàng và ${GAME.starterFoodQuantity} phần Hạt cơ bản. Dùng /adopt để nhận pet đầu tiên.`);
  void player;
}

async function adopt(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const species = interaction.options.getString("species", true) as PetSpecies;
  const name = interaction.options.getString("name", true).trim();
  const option = SPECIES[species];
  const variant = option.variants[Math.floor(Math.random() * option.variants.length)];
  const pet = await adoptPet(player.id, species, name, variant);
  await interaction.reply(`✨ Bạn đã nhận **${name}** — ${option.icon} ${option.label} giống **${variant}**!\nID pet: \`${pet.id}\` (dùng cho /feed và /petting).`);
}

async function profile(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const full = await getPlayer(interaction.user.id);
  if (!full) throw new Error("Không tìm thấy hồ sơ.");
  const house = GAME.house[player.activeHouse];
  const embed = new EmbedBuilder()
    .setColor(0xF4B942)
    .setTitle(`Hồ sơ của ${interaction.user.username}`)
    .addFields(
      { name: "Level chủ", value: `${full.level} (${full.experience}/${full.level * GAME.baseExperiencePerLevel} EXP)`, inline: true },
      { name: "Vàng", value: `🪙 ${full.gold}`, inline: true },
      { name: "Pet", value: `${full.pets.length}`, inline: true },
      { name: "Nhà đang dùng", value: `${house.icon} ${house.name}`, inline: false }
    );
  await interaction.reply({ embeds: [embed] });
}

async function daily(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const result = await claimDaily(player.id);
  if (!result.claimed) {
    await interaction.reply(`⏳ Bạn đã điểm danh hôm nay rồi. Quay lại sau **${result.nextInHours} giờ** nữa để nhận thưởng. (Streak hiện tại: ${result.streak} ngày)`);
    return;
  }
  const streakLine = result.bonusPercent > 0 ? ` • Streak **${result.streak}** ngày (+${result.bonusPercent}% bonus)` : ` • Streak **${result.streak}** ngày`;
  await interaction.reply(`📅 **Điểm danh hằng ngày**${streakLine}\n🪙 +${result.gold} vàng\n✨ +${result.experience} EXP`);
}

async function pets(interaction: ChatInputCommandInteraction): Promise<void> {
  await ensurePlayer(interaction.user.id);
  const player = await getPlayer(interaction.user.id);
  if (!player || player.pets.length === 0) {
    await interaction.reply("Bạn chưa có pet nào. Dùng /adopt để nhận một người bạn nhé!");
    return;
  }
  const description = player.pets.map((pet) => {
    const species = SPECIES[pet.species];
    return `${species.icon} **${pet.name}** · ${pet.variant}\nLv.${pet.level} · ${pet.experience}/${pet.level * GAME.baseExperiencePerLevel} EXP · bonus +${petExperienceBonus(pet.level)}% EXP\n${moodLabel(pet.mood)} · comfort ${pet.comfort}/100 · yêu thích ${pet.affection}\nID: \`${pet.id}\``;
  }).join("\n\n");
  await interaction.reply({ embeds: [new EmbedBuilder().setColor(0x7BC96F).setTitle("Các pet của bạn").setDescription(description)] });
}

async function feed(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const petId = interaction.options.getString("pet", true);
  const foodId = interaction.options.getString("food", true);
  const result = await feedPet(player.id, petId, foodId);
  await interaction.reply(`🍽️ Đã cho pet ăn **${result.foodName}**! Chủ +${result.userExperience} EXP, pet +${result.petExperience} EXP.`);
}

async function petting(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const petId = interaction.options.getString("pet", true);
  const result = await petPet(player.id, petId);
  await interaction.reply(`💖 Pet rất thích! Yêu thích: **${result.affection}**. Còn ${result.remaining}/${GAME.dailyPetLimit} lượt hôm nay.`);
}

async function inventory(interaction: ChatInputCommandInteraction): Promise<void> {
  await ensurePlayer(interaction.user.id);
  const player = await getPlayer(interaction.user.id);
  if (!player) throw new Error("Không tìm thấy hồ sơ.");
  const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
  const quantityByFood = new Map(player.inventory.map((item) => [item.foodId, item.quantity]));
  const lines = foods.map((food) => {
    const quantity = quantityByFood.get(food.id) ?? 0;
    const alert = quantity < GAME.lowInventoryThreshold ? " ⚠️ sắp hết" : "";
    const locked = player.level < food.unlockLevel ? ` 🔒 Lv.${food.unlockLevel}` : "";
    return `${food.icon} **${food.name}**: ${quantity} phần${alert}${locked}\nID: \`${food.id}\``;
  });
  await interaction.reply({ embeds: [new EmbedBuilder().setColor(0x5BA7D1).setTitle("Kho thức ăn").setDescription(lines.join("\n"))] });
}

async function shop(interaction: ChatInputCommandInteraction): Promise<void> {
  const player = await ensurePlayer(interaction.user.id);
  const subcommand = interaction.options.getSubcommand();
  if (subcommand === "food") {
    const foodId = interaction.options.getString("id");
    const quantity = interaction.options.getInteger("quantity");
    if (foodId && quantity) {
      const result = await buyFood(player.id, foodId, quantity);
      await interaction.reply(`✅ Đã mua ${quantity} × ${result.food.icon} **${result.food.name}** với ${result.cost} vàng.`);
      return;
    }
    const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
    const list = foods.map((food) => `${food.icon} **${food.name}** — ${food.price} vàng · mở Lv.${food.unlockLevel}\n\`${food.id}\` — ${food.description}`).join("\n\n");
    await interaction.reply({ embeds: [new EmbedBuilder().setColor(0xF4B942).setTitle("Shop thức ăn").setDescription(list).setFooter({ text: "Mua: /shop food id:<ID> quantity:<số lượng>" })] });
    return;
  }
  const houseId = interaction.options.getString("id") as HouseType | null;
  if (houseId) {
    await buyHouse(player.id, houseId);
    const house = GAME.house[houseId];
    await interaction.reply(`🏠 Đã chọn ${house.icon} **${house.name}**. Comfort tối thiểu của pet là ${house.comfortFloor}.`);
    return;
  }
  const list = Object.entries(GAME.house).map(([id, house]) => `${house.icon} **${house.name}** — ${house.price} vàng · Lv.${house.unlockLevel}\n\`${id}\` · comfort tối thiểu ${house.comfortFloor}`).join("\n\n");
  await interaction.reply({ embeds: [new EmbedBuilder().setColor(0xC084FC).setTitle("Shop nhà ở").setDescription(list).setFooter({ text: "Mua: /shop house id:<loại nhà>" })] });
}

async function play(interaction: ChatInputCommandInteraction): Promise<void> {
  await ensurePlayer(interaction.user.id);
  const gameOption = interaction.options.getString("game", true);

  if (gameOption === "mine") {
    const gameId = randomUUID();
    await interaction.reply({ content: `💣 **Dò mìn** — chọn độ khó. Thắng nhận từ 20 đến 80 vàng + 15 đến 50 EXP. Giới hạn ${GAME.minigame.maxGamesPerDay} ván/ngày.`, components: [mineDifficultyRow(gameId)] });
    return;
  }

  const gameId = randomUUID();
  const state = createGame(interaction.user.id);
  startTicTacToe(gameId, interaction.user.id, state);
  await interaction.reply({ content: `🎮 **XO** — Bạn là **X**, bot là **O**. Thắng nhận tới 40 vàng + 30 EXP; hòa nhận tới 10 vàng + 8 EXP. Giới hạn ${GAME.minigame.maxGamesPerDay} ván/ngày (từ ván ${GAME.minigame.rewardDecayAfter + 1} chỉ nhận nửa thưởng).`, components: boardRows(gameId, state) });
}

async function help(interaction: ChatInputCommandInteraction): Promise<void> {
  const description = [
    "**Chăm sóc**",
    "`/adopt` — nhận pet mới",
    "`/feed` — cho pet ăn (cần ID trong /inventory)",
    "`/petting` — âu yếm pet (+10 yêu thích, 5 lần/ngày)",
    "`/pets` — xem danh sách pet",
    "",
    "**Tiến trình & kinh tế**",
    "`/daily` — điểm danh hằng ngày (streak tăng bonus)",
    "`/profile` — level, EXP, vàng, nhà",
    "`/inventory` — kho thức ăn",
    "`/shop food` / `shop house` — mua đồ",
    "",
    "**Mini-game**",
    "`/play game:xo` — chơi XO",
    "`/play game:mine` — chơi dò mìn",
    "",
    "**Xã hội**",
    "`/leaderboard` — bảng xếp hạng",
    "`/start` — tạo hồ sơ nếu chưa có"
  ].join("\n");
  await interaction.reply({ embeds: [new EmbedBuilder().setColor(0x5865F2).setTitle("🐾 Pet Haven — Hướng dẫn").setDescription(description)] });
}

async function leaderboard(interaction: ChatInputCommandInteraction): Promise<void> {
  await ensurePlayer(interaction.user.id);
  const topLevel = await prisma.user.findMany({ orderBy: [{ level: "desc" }, { experience: "desc" }], take: 10, include: { _count: { select: { pets: true } } } });
  const topGold = await prisma.user.findMany({ orderBy: { gold: "desc" }, take: 10 });

  const levelLines = topLevel.map((user, index) => `${index + 1}. <@${user.discordId}> — Lv.${user.level} · ${user._count.pets} pet`).join("\n");
  const goldLines = topGold.map((user, index) => `${index + 1}. <@${user.discordId}> — 🪙 ${user.gold}`).join("\n");

  const embed = new EmbedBuilder()
    .setColor(0xE1C699)
    .setTitle("🏆 Bảng xếp hạng")
    .addFields({ name: "Level cao nhất", value: levelLines || "Chưa có", inline: true }, { name: "Nhiều vàng nhất", value: goldLines || "Chưa có", inline: true });
  await interaction.reply({ embeds: [embed] });
}
