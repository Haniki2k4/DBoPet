import { SlashCommandBuilder } from "discord.js";

export const commands = [
  new SlashCommandBuilder().setName("start").setDescription("Tạo hồ sơ người nuôi và nhận quà khởi đầu"),
  new SlashCommandBuilder()
    .setName("adopt")
    .setDescription("Nhận một pet mới")
    .addStringOption((option) => option.setName("species").setDescription("Loài pet").setRequired(true).addChoices(
      { name: "🐶 Chó", value: "DOG" }, { name: "🐱 Mèo", value: "CAT" }, { name: "🐹 Hamster", value: "HAMSTER" },
      { name: "🐰 Thỏ", value: "RABBIT" }, { name: "🐦 Chim", value: "BIRD" }, { name: "🐟 Cá", value: "FISH" },
      { name: "🐍 Rắn", value: "SNAKE" }, { name: "🕷️ Nhện", value: "SPIDER" },
      { name: "🐀 Chuột", value: "RAT" }, { name: "🦡 Chồn", value: "FERRET" },
      { name: "🦄 Kỳ lân", value: "UNICORN" }
    ))
    .addStringOption((option) => option.setName("name").setDescription("Tên pet").setRequired(true).setMaxLength(24)),
  new SlashCommandBuilder().setName("profile").setDescription("Xem level, EXP và vàng"),
  new SlashCommandBuilder().setName("daily").setDescription("Nhận thưởng điểm danh hằng ngày (streak tăng bonus)"),
  new SlashCommandBuilder().setName("pets").setDescription("Xem các pet của bạn"),
  new SlashCommandBuilder()
    .setName("feed")
    .setDescription("Cho pet ăn")
    .addStringOption((option) => option.setName("pet").setDescription("Tên pet, danh sách cách nhau dấu phẩy, hoặc 'all'").setRequired(true).setAutocomplete(true))
    .addStringOption((option) => option.setName("food").setDescription("Chọn thức ăn trong kho").setRequired(true).setAutocomplete(true)),
  new SlashCommandBuilder()
    .setName("petting")
    .setDescription("Âu yếm pet (+10 yêu thích, tối đa 5 lần/ngày)")
    .addStringOption((option) => option.setName("pet").setDescription("Tên pet, danh sách cách nhau dấu phẩy, hoặc 'all'").setRequired(true).setAutocomplete(true)),
  new SlashCommandBuilder().setName("inventory").setDescription("Xem kho thức ăn và cảnh báo sắp hết"),
  new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Cửa hàng")
    .addSubcommand((subcommand) => subcommand.setName("food").setDescription("Xem hoặc mua thức ăn")
      .addStringOption((option) => option.setName("id").setDescription("Món ăn (bỏ trống để xem catalog)").setAutocomplete(true))
      .addIntegerOption((option) => option.setName("quantity").setDescription("Số lượng mua (để mua)").setMinValue(1).setMaxValue(99)))
    .addSubcommand((subcommand) => subcommand.setName("house").setDescription("Xem hoặc mua nhà ở")
      .addStringOption((option) => option.setName("id").setDescription("Loại nhà (bỏ trống để xem catalog)").setAutocomplete(true))
      .addStringOption((option) => option.setName("replace").setDescription("Căn nhà cũ cần thay thế (khi hết slot)").setAutocomplete(true))),
  new SlashCommandBuilder()
    .setName("house")
    .setDescription("Quản lý nhà ở đang sở hữu")
    .addSubcommand((subcommand) => subcommand.setName("list").setDescription("Xem nhà đang sở hữu, slot và sức chứa pet")),
  new SlashCommandBuilder()
    .setName("setprefix")
    .setDescription("Đổi prefix lệnh text cho server")
    .addStringOption((option) => option.setName("prefix").setDescription("Prefix mới (1-5 ký tự, mặc định p!)").setRequired(true)),
  new SlashCommandBuilder()
    .setName("notify")
    .setDescription("Bật/tắt kênh nhận thông báo cập nhật phiên bản")
    .addChannelOption((option) => option.setName("channel").setDescription("Kênh nhận thông báo (bỏ trống: chọn kênh hiện tại, gõ lại để tắt)")),
  new SlashCommandBuilder().setName("play").setDescription("Chơi mini-game để nhận EXP và vàng")
    .addStringOption((option) => option.setName("game").setDescription("Chọn trò chơi").setRequired(true).addChoices(
      { name: "⭕ XO (Caro)", value: "xo" },
      { name: "💣 Dò mìn", value: "mine" }
    )),
  new SlashCommandBuilder().setName("version").setDescription("Xem phiên bản hiện tại và ghi chú cập nhật mới nhất"),
  new SlashCommandBuilder().setName("help").setDescription("Xem danh sách lệnh"),
  new SlashCommandBuilder().setName("leaderboard").setDescription("Bảng xếp hạng người chơi")
].map((command) => command.toJSON());
