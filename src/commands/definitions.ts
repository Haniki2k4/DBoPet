import { SlashCommandBuilder } from "discord.js";

export const commands = [
  new SlashCommandBuilder().setName("start").setDescription("Tạo hồ sơ người nuôi và nhận quà khởi đầu"),
  new SlashCommandBuilder()
    .setName("adopt")
    .setDescription("Nhận một pet mới")
    .addStringOption((option) => option.setName("species").setDescription("Loài pet").setRequired(true).addChoices(
      { name: "🐶 Chó", value: "DOG" }, { name: "🐱 Mèo", value: "CAT" }, { name: "🐹 Hamster", value: "HAMSTER" }
    ))
    .addStringOption((option) => option.setName("name").setDescription("Tên pet").setRequired(true).setMaxLength(24)),
  new SlashCommandBuilder().setName("profile").setDescription("Xem level, EXP và vàng"),
  new SlashCommandBuilder().setName("daily").setDescription("Nhận thưởng điểm danh hằng ngày (streak tăng bonus)"),
  new SlashCommandBuilder().setName("pets").setDescription("Xem các pet của bạn"),
  new SlashCommandBuilder()
    .setName("feed")
    .setDescription("Cho pet ăn")
    .addStringOption((option) => option.setName("pet").setDescription("ID pet trong /pets").setRequired(true))
    .addStringOption((option) => option.setName("food").setDescription("ID thức ăn trong /inventory").setRequired(true)),
  new SlashCommandBuilder()
    .setName("petting")
    .setDescription("Âu yếm pet (+10 yêu thích, tối đa 5 lần/ngày)")
    .addStringOption((option) => option.setName("pet").setDescription("ID pet trong /pets").setRequired(true)),
  new SlashCommandBuilder().setName("inventory").setDescription("Xem kho thức ăn và cảnh báo sắp hết"),
  new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Cửa hàng")
    .addSubcommand((subcommand) => subcommand.setName("food").setDescription("Xem hoặc mua thức ăn")
      .addStringOption((option) => option.setName("id").setDescription("ID thức ăn (để mua)"))
      .addIntegerOption((option) => option.setName("quantity").setDescription("Số lượng mua (để mua)").setMinValue(1).setMaxValue(99)))
    .addSubcommand((subcommand) => subcommand.setName("house").setDescription("Xem hoặc mua nhà ở")
      .addStringOption((option) => option.setName("id").setDescription("BASIC, COZY hoặc VILLA (để mua)").addChoices(
        { name: "🏠 Nhà cơ bản", value: "BASIC" }, { name: "🛖 Nhà ấm cúng", value: "COZY" }, { name: "🏡 Biệt thự pet", value: "VILLA" }
      ))),
  new SlashCommandBuilder().setName("play").setDescription("Chơi mini-game để nhận EXP và vàng")
    .addStringOption((option) => option.setName("game").setDescription("Chọn trò chơi").setRequired(true).addChoices(
      { name: "⭕ XO (Caro)", value: "xo" },
      { name: "💣 Dò mìn", value: "mine" }
    )),
  new SlashCommandBuilder().setName("help").setDescription("Xem danh sách lệnh"),
  new SlashCommandBuilder().setName("leaderboard").setDescription("Bảng xếp hạng người chơi")
].map((command) => command.toJSON());
