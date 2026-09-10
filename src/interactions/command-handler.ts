import { ChatInputCommandInteraction, ChannelType, EmbedBuilder, MessageFlags, PermissionFlagsBits } from "discord.js";
import { HouseType, PetSpecies } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { GAME, houseSlotCount, HOUSE_PRIORITY, moodLabel, petExperienceBonus, SPECIES } from "../config/game.js";
import { boardRows, createGame } from "../games/tic-tac-toe.js";
import { mineDifficultyRow, startTicTacToe } from "./button-handler.js";
import { ensurePlayer, getPlayer } from "../services/player.service.js";
import { adoptPet, feedPet, feedPetList, petPet, petPetList, totalPetCapacity } from "../services/pet.service.js";
import { buyFood, buyHouse } from "../services/shop.service.js";
import { claimDaily } from "../services/daily.service.js";
import { setPrefix } from "../services/guild.service.js";
import { getNotificationChannel, setNotificationChannel, sendLatestUpdateToGuild } from "../services/announcement.service.js";
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
    case "house": return house(interaction);
    case "setprefix": return setprefix(interaction);
    case "notify": return notify(interaction);
    case "play": return play(interaction);
    case "help": return help(interaction);
    case "leaderboard": return leaderboard(interaction);
    default: return;
  }
}

async function start(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const existing = await getPlayer(interaction.user.id);
  await ensurePlayer(interaction.user.id);
  if (existing) {
    await interaction.editReply("Bạn đã có hồ sơ rồi. Dùng /adopt để nhận pet hoặc /profile để xem tiến trình.");
    return;
  }

  const guide = new EmbedBuilder()
    .setColor(0x7BC96F)
    .setTitle("🐾 Chào mừng đến Pet Haven!")
    .setDescription(
      `🎁 Bạn nhận **${GAME.starterGold} vàng** và **${GAME.starterFoodQuantity} phần Hạt cơ bản** để bắt đầu!\n\n` +
      "Dưới đây là hướng dẫn nhanh để chơi:"
    )
    .addFields(
      {
        name: "🐣 Bước 1 — Nhận pet đầu tiên",
        value: "`/adopt` — Chọn loài (chó 🐶, mèo 🐱, hamster 🐹) và đặt tên cho pet.",
        inline: false,
      },
      {
        name: "🍽️ Bước 2 — Chăm sóc pet hằng ngày",
        value: [
          "`/feed` — Cho pet ăn (chọn pet từ danh sách, cần thức ăn trong kho)",
          "`/petting` — Âu yếm pet · +10 yêu thích · tối đa 5 lần/ngày",
          "`/pets` — Xem danh sách & trạng thái pet",
        ].join("\n"),
        inline: false,
      },
      {
        name: "💰 Bước 3 — Kiếm vàng & lên cấp",
        value: [
          "`/daily` — Điểm danh hằng ngày · streak tăng bonus vàng",
          "`/play game:xo` — Chơi XO (caro) với bot",
          "`/play game:mine` — Dò mìn · 3 độ khó",
          "`/shop food` — Mua thức ăn · `/shop house` — Nâng cấp nhà",
        ].join("\n"),
        inline: false,
      },
      {
        name: "📊 Theo dõi tiến trình",
        value: [
          "`/profile` — Level, EXP, vàng, nhà đang dùng",
          "`/inventory` — Kho thức ăn · cảnh báo sắp hết",
          "`/leaderboard` — Bảng xếp hạng toàn server",
        ].join("\n"),
        inline: false,
      }
    )
    .setFooter({ text: "Dùng /help bất cứ lúc nào để xem lại danh sách lệnh." });

  await interaction.editReply({ embeds: [guide] });
}

async function adopt(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const species = interaction.options.getString("species", true) as PetSpecies;
  const name = interaction.options.getString("name", true).trim();
  const option = SPECIES[species];
  const variant = option.variants[Math.floor(Math.random() * option.variants.length)];
  const petCount = await prisma.pet.count({ where: { ownerId: player.id } });
  const feeNote = petCount >= GAME.adopt.freeAdopts ? ` (phí ${GAME.adopt.cost} vàng)` : " (miễn phí)";
  const { pet, feeApplied } = await adoptPet(player.id, species, name, variant);
  const feeMsg = feeApplied ? `\n🪙 Đã trừ ${GAME.adopt.cost} vàng phí nhận nuôi.` : "";
  await interaction.editReply(
    `✨ Bạn đã nhận **${name}** — ${option.icon} ${option.label} giống **${variant}**${feeNote}${feeMsg}\nDùng /feed hoặc /petting để chăm sóc pet của bạn.`
  );
}

async function profile(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const full = await getPlayer(interaction.user.id);
  if (!full) throw new Error("Không tìm thấy hồ sơ.");
  const house = GAME.house[player.activeHouse];
  const capacity = await totalPetCapacity(player.id);
  const slots = houseSlotCount(player.level);
  const ownedHouses = await prisma.userHouse.count({ where: { userId: player.id } });
  const embed = new EmbedBuilder()
    .setColor(0xF4B942)
    .setTitle(`Hồ sơ của ${interaction.user.username}`)
    .addFields(
      { name: "Level chủ", value: `${full.level} (${full.experience}/${full.level * GAME.baseExperiencePerLevel} EXP)`, inline: true },
      { name: "Vàng", value: `🪙 ${full.gold}`, inline: true },
      { name: "Tổng pet", value: `🐾 ${full.pets.length} pet`, inline: true },
      { name: "Nhà đang dùng", value: `${house.icon} ${house.name} · chứa ${full.pets.length}/${capacity} pet`, inline: false },
      { name: "Slot nhà", value: `${ownedHouses}/${slots} slot`, inline: true }
    );
  await interaction.editReply({ embeds: [embed] });
}

async function daily(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const result = await claimDaily(player.id);
  if (!result.claimed) {
    await interaction.editReply(`⏳ Bạn đã điểm danh hôm nay rồi. Quay lại sau **${result.nextInHours} giờ** nữa để nhận thưởng. (Streak hiện tại: ${result.streak} ngày)`);
    return;
  }
  const streakLine = result.bonusPercent > 0 ? ` • Streak **${result.streak}** ngày (+${result.bonusPercent}% bonus)` : ` • Streak **${result.streak}** ngày`;
  await interaction.editReply(`📅 **Điểm danh hằng ngày**${streakLine}\n🪙 +${result.gold} vàng\n✨ +${result.experience} EXP`);
}

async function pets(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply({ flags: MessageFlags.Ephemeral as number });
  await ensurePlayer(interaction.user.id);
  const player = await getPlayer(interaction.user.id);
  if (!player || player.pets.length === 0) {
    await interaction.editReply("Bạn chưa có pet nào. Dùng /adopt để nhận một người bạn nhé!");
    return;
  }
  const description = player.pets.map((pet) => {
    const species = SPECIES[pet.species];
    return `${species.icon} **${pet.name}** · ${pet.variant}\nLv.${pet.level} · ${pet.experience}/${pet.level * GAME.baseExperiencePerLevel} EXP · bonus +${petExperienceBonus(pet.level)}% EXP\n${moodLabel(pet.mood)} · comfort ${pet.comfort}/100 · yêu thích ${pet.affection}`;
  }).join("\n\n");
  await interaction.editReply({ embeds: [new EmbedBuilder().setColor(0x7BC96F).setTitle("Các pet của bạn").setDescription(description)] });
}

async function feed(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const petInput = interaction.options.getString("pet", true);
  const foodId = interaction.options.getString("food", true);

  // Batch mode: "all" hoặc danh sách tên cách nhau dấu phẩy
  const isBatch = petInput === "all" || petInput.includes(",");
  if (isBatch) {
    const identifiers = petInput === "all" ? ["all"] : petInput.split(",").map((s) => s.trim()).filter(Boolean);
    const summary = await feedPetList(player.id, identifiers, foodId);
    const fedLines = summary.fed.map((r) => `✅ **${r.petName}** +${r.petExperience} EXP`).join("\n") || "Không có pet nào được cho ăn.";
    const skipLines = summary.skipped.map((r) => `⚠️ **${r.petName}** — ${r.reason}`).join("\n");
    const embed = new EmbedBuilder()
      .setColor(0x7BC96F)
      .setTitle(`🍽️ Cho ăn hàng loạt — ${summary.foodName}`)
      .addFields({ name: `Đã cho ăn (${summary.fed.length} pet)`, value: fedLines, inline: false });
    if (skipLines) embed.addFields({ name: `Bỏ qua (${summary.skipped.length} pet)`, value: skipLines, inline: false });
    if (summary.totalUserExperience > 0) embed.setFooter({ text: `+${summary.totalUserExperience} EXP cho ${interaction.user.username}` });
    await interaction.editReply({ embeds: [embed] });
    return;
  }

  // Single feed: petInput là petCode từ autocomplete
  const result = await feedPet(player.id, petInput, foodId);
  await interaction.editReply(`🍽️ ${interaction.user.username} đã cho **${result.petName}** ăn **${result.foodName}**! +${result.userExperience} EXP cho ${interaction.user.username}, +${result.petExperience} EXP cho ${result.petName}.`);
}

async function petting(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const petInput = interaction.options.getString("pet", true);

  // Batch mode: "all" hoặc danh sách tên cách nhau dấu phẩy
  const isBatch = petInput === "all" || petInput.includes(",");
  if (isBatch) {
    const identifiers = petInput === "all" ? ["all"] : petInput.split(",").map((s) => s.trim()).filter(Boolean);
    const summary = await petPetList(player.id, identifiers);
    const pettingLines = summary.petting.map((r) => `💖 **${r.petName}** yêu thích: ${r.affection} (còn ${r.remaining} lượt)`).join("\n") || "Không có pet nào được âu yếm.";
    const skipLines = summary.skipped.map((r) => `⚠️ **${r.petName}** — ${r.reason}`).join("\n");
    const embed = new EmbedBuilder()
      .setColor(0xF9A8D8)
      .setTitle(`💖 Âu yếm hàng loạt`)
      .addFields({ name: `Đã âu yếm (${summary.petting.length} pet)`, value: pettingLines, inline: false });
    if (skipLines) embed.addFields({ name: `Bỏ qua (${summary.skipped.length} pet)`, value: skipLines, inline: false });
    await interaction.editReply({ embeds: [embed] });
    return;
  }

  // Single petting: petInput là petCode từ autocomplete
  const result = await petPet(player.id, petInput);
  await interaction.editReply(`💖 ${interaction.user.username} đã âu yếm **${result.petName}**! Yêu thích: **${result.affection}**. Còn ${result.remaining}/${GAME.dailyPetLimit} lượt hôm nay.`);
}

async function inventory(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  await ensurePlayer(interaction.user.id);
  const player = await getPlayer(interaction.user.id);
  if (!player) throw new Error("Không tìm thấy hồ sơ.");
  const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
  const quantityByFood = new Map(player.inventory.map((item) => [item.foodId, item.quantity]));
  const lines = foods.map((food) => {
    const quantity = quantityByFood.get(food.id) ?? 0;
    let statusText = "";
    if (quantity === 0) {
      statusText = " · ❌ **hết**";
    } else if (quantity < GAME.lowInventoryThreshold) {
      statusText = ` · ⚠️ còn ${quantity} (sắp hết)`;
    } else {
      statusText = ` · còn ${quantity} phần`;
    }
    const locked = player.level < food.unlockLevel ? ` 🔒 Lv.${food.unlockLevel}` : "";
    return `${food.icon} **${food.name}**${statusText}${locked}\nID: \`${food.id}\``;
  });
  await interaction.editReply({ embeds: [new EmbedBuilder().setColor(0x5BA7D1).setTitle("Kho thức ăn").setDescription(lines.join("\n"))] });
}

async function shop(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const subcommand = interaction.options.getSubcommand();

  if (subcommand === "food") {
    const foodId = interaction.options.getString("id");
    const quantity = interaction.options.getInteger("quantity");
    if (foodId && quantity) {
      const result = await buyFood(player.id, foodId, quantity);
      await interaction.editReply(`✅ Đã mua ${quantity} × ${result.food.icon} **${result.food.name}** với ${result.cost} vàng.`);
      return;
    }
    const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" } });
    const list = foods.map((food) => `${food.icon} **${food.name}** — ${food.price} vàng · mở Lv.${food.unlockLevel}\n\`${food.id}\` — ${food.description}`).join("\n\n");
    await interaction.editReply({
      embeds: [new EmbedBuilder().setColor(0xF4B942).setTitle("🛒 Shop thức ăn (catalog)").setDescription(list).setFooter({ text: "Mua: /shop food → chọn món từ danh sách, nhập quantity" })],
    });
    return;
  }

  // House subcommand
  const houseId = interaction.options.getString("id") as HouseType | null;
  if (houseId) {
    const replaceId = interaction.options.getString("replace") as HouseType | null;
    const result = await buyHouse(player.id, houseId, replaceId ?? undefined);
    const house = GAME.house[houseId];
    const action = result.replaced
      ? ` thay thế **${GAME.house[result.replaced].name}**`
      : ` thêm vào sở hữu (slot ${result.ownedCount}/${result.totalSlots})`;
    await interaction.editReply(
      `🏠 Đã mua ${house.icon} **${house.name}**${action}. Sức chứa tối đa của pet: ${house.maxPets}. Comfort tối thiểu: ${house.comfortFloor}.`
    );
    return;
  }
  const list = Object.entries(GAME.house).map(([id, house]) =>
    `${house.icon} **${house.name}** — ${house.price} vàng · Lv.${house.unlockLevel}\n\`${id}\` · sức chứa ${house.maxPets} pet · comfort tối thiểu ${house.comfortFloor}`
  ).join("\n\n");
  const slots = houseSlotCount(player.level);
  const ownedCount = await prisma.userHouse.count({ where: { userId: player.id } });
  await interaction.editReply({
    embeds: [
      new EmbedBuilder()
        .setColor(0xC084FC)
        .setTitle(`🏠 Shop nhà ở (bạn: ${ownedCount}/${slots} slot)`)
        .setDescription(list)
        .setFooter({ text: "Mua: /shop house → chọn nhà; khi hết slot thêm option 'replace' để nâng cấp." }),
    ],
  });
}

async function house(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  const player = await ensurePlayer(interaction.user.id);
  const subcommand = interaction.options.getSubcommand();

  if (subcommand !== "list") return;

  const owned = await prisma.userHouse.findMany({ where: { userId: player.id } });
  const sorted = [...owned].sort((a, b) => HOUSE_PRIORITY[a.houseType] - HOUSE_PRIORITY[b.houseType]);
  const slots = houseSlotCount(player.level);
  const capacity = await totalPetCapacity(player.id);
  const petCount = await prisma.pet.count({ where: { ownerId: player.id } });
  const best = sorted.length ? sorted.reduce((max, h) => (HOUSE_PRIORITY[h.houseType] > HOUSE_PRIORITY[max.houseType] ? h : max), sorted[0]) : null;

  const houseLines = sorted.length
    ? sorted.map((h) => {
      const config = GAME.house[h.houseType];
      return `${config.icon} **${config.name}** — chứa ${config.maxPets} pet · comfort tối thiểu ${config.comfortFloor}${best?.houseType === h.houseType ? " ⭐" : ""}`;
    }).join("\n")
    : "Bạn chưa có nhà nào. Hãy dùng /shop house.";

  const embed = new EmbedBuilder()
    .setColor(0x8FB3D9)
    .setTitle("🏠 Quy hoạch nhà ở của bạn")
    .addFields(
      { name: "Nhà đang sở hữu", value: houseLines, inline: false },
      { name: "Slot nhà", value: `${sorted.length}/${slots}`, inline: true },
      { name: "Sức chứa pet", value: `${petCount}/${capacity}`, inline: true },
      { name: "Comfort tối thiểu", value: best ? `${GAME.house[best.houseType].comfortFloor}` : "—", inline: true }
    );
  await interaction.editReply({ embeds: [embed] });
}

async function setprefix(interaction: ChatInputCommandInteraction): Promise<void> {
  if (!interaction.inGuild()) {
    await interaction.reply({ content: "Lệnh /setprefix chỉ dùng được trong máy chủ (server).", flags: MessageFlags.Ephemeral as number });
    return;
  }
  const newPrefix = interaction.options.getString("prefix", true);
  try {
    const prefix = await setPrefix(interaction.guildId!, newPrefix);
    await interaction.reply({ content: `✅ Đã đổi prefix của server thành \`${prefix}\`. Thử \`${prefix}help\` để xem lệnh.`, flags: MessageFlags.Ephemeral as number });
  } catch (error: unknown) {
    await interaction.reply({ content: `⚠️ ${error instanceof Error ? error.message : "Đã có lỗi"}`, flags: MessageFlags.Ephemeral as number });
  }
}

async function notify(interaction: ChatInputCommandInteraction): Promise<void> {
  if (!interaction.inGuild()) {
    await interaction.reply({ content: "Lệnh /notify chỉ dùng được trong máy chủ (server).", flags: MessageFlags.Ephemeral as number });
    return;
  }
  const selected = interaction.options.getChannel("channel");
  const current = await getNotificationChannel(interaction.guildId!);

  let channelId: string | null;
  if (selected) {
    if (!isTextChannelType(selected.type)) {
      await interaction.reply({ content: "⚠️ Hãy chọn kênh văn bản (text channel) để nhận thông báo.", flags: MessageFlags.Ephemeral as number });
      return;
    }
    channelId = selected.id;
  } else if (current) {
    channelId = null;
  } else {
    channelId = interaction.channelId;
  }

  await setNotificationChannel(interaction.guildId!, channelId);
  if (!channelId) {
    await interaction.reply({ content: "🔕 Đã tắt thông báo cập nhật của server.", flags: MessageFlags.Ephemeral as number });
    return;
  }
  const announced = await sendLatestUpdateToGuild(interaction.client, interaction.guildId!);
  const sentText = announced ? "\n📢 Đã gửi thông báo cập nhật mới nhất đến kênh này." : "";
  await interaction.reply({
    content: `✅ Đã đăng ký <#${channelId}> nhận thông báo cập nhật phiên bản.${sentText}`,
    flags: MessageFlags.Ephemeral as number,
  });
}

function isTextChannelType(type: ChannelType): boolean {
  return [
    ChannelType.GuildText,
    ChannelType.GuildAnnouncement,
    ChannelType.PublicThread,
    ChannelType.PrivateThread,
    ChannelType.GuildForum,
  ].includes(type);
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
    "`/start` — tạo hồ sơ nếu chưa có",
    "",
    "**Server**",
    "`/notify #kênh` — đăng ký nhận thông báo cập nhật (gõ /notify để tắt)"
  ].join("\n");
  await interaction.reply({ embeds: [new EmbedBuilder().setColor(0x5865F2).setTitle("🐾 Pet Haven — Hướng dẫn").setDescription(description)] });
}

async function leaderboard(interaction: ChatInputCommandInteraction): Promise<void> {
  await interaction.deferReply();
  await ensurePlayer(interaction.user.id);
  const topLevel = await prisma.user.findMany({ orderBy: [{ level: "desc" }, { experience: "desc" }], take: 10, include: { _count: { select: { pets: true } } } });
  const topGold = await prisma.user.findMany({ orderBy: { gold: "desc" }, take: 10 });

  const levelLines = topLevel.map((user, index) => `${index + 1}. <@${user.discordId}> — Lv.${user.level} · ${user._count.pets} pet`).join("\n");
  const goldLines = topGold.map((user, index) => `${index + 1}. <@${user.discordId}> — 🪙 ${user.gold}`).join("\n");

  const embed = new EmbedBuilder()
    .setColor(0xE1C699)
    .setTitle("🏆 Bảng xếp hạng")
    .addFields({ name: "Level cao nhất", value: levelLines || "Chưa có", inline: true }, { name: "Nhiều vàng nhất", value: goldLines || "Chưa có", inline: true });
  await interaction.editReply({ embeds: [embed] });
}
