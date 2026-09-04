# D B o P e t 
# Pet Haven Discord Bot

Bot nuôi pet trên Discord: nhận pet chó/mèo/hamster, cho ăn bằng kho thức ăn, điểm danh hằng ngày, mua nhà ở, và chơi mini-game XO + dò mìn.

## Tính năng

- **Đa dạng pet**: chó, mèo, hamster với nhiều giống + icon emoji riêng.
- **Chăm sóc hằng ngày**: cho ăn, âu yếm (+10 yêu thích, tối đa 5 lần/ngày), nhận EXP cho chủ và pet.
- **Tiến trình**: level chủ mở khóa thức ăn; level pet cao tăng % EXP bonus (tối đa +50%).
- **Điểm danh hằng ngày** (`/daily`): thưởng vàng + EXP, streak tăng bonus tối đa +50%.
- **Comfort & mood**: 3 trạng thái Buồn/Ổn/Vui vẻ; bỏ bê (quên cho ăn/pet vài ngày) bị trừ comfort.
- **Nhà ở**: mua bằng vàng, yêu cầu level chủ, duy trì comfort tối thiểu cho pet.
- **Kinh tế**: vàng, cửa hàng thức ăn/nhà, giới hạn phần thưởng chống farm vô hạn.
- **Mini-game**: XO (Caro) và Dò mìn — thưởng vàng + EXP, giới hạn 10 ván/ngày (từ ván 6 chỉ nửa thưởng).

## Công nghệ

- Node.js + TypeScript (ESM)
- discord.js v14 (slash commands, button, select menu)
- Prisma ORM + SQLite (local) / PostgreSQL (production)

## Cấu trúc

```
src/
  index.ts              # Entry point: login, interaction router, neglect job
  config/
    env.ts              # Đọc .env
    game.ts             # Hằng số game, species, house, mood helpers
  commands/
    definitions.ts      # Định nghĩa slash commands
  services/
    player.service.ts   # Tạo hồ sơ, lấy người chơi
    pet.service.ts      # Nhận pet, cho ăn, âu yếm, bỏ bê
    daily.service.ts    # Điểm danh hằng ngày + streak
    minigame.service.ts # Giới hạn + decay thưởng mini-game
    shop.service.ts     # Mua thức ăn, nhà
    experience.service.ts
  games/
    tic-tac-toe.ts      # Logic XO
    mine-sessions.ts    # Logic dò mìn
  interactions/
    command-handler.ts  # Xử lý slash commands
    button-handler.ts   # Xử lý button + select menu (xo:, mine:, minediff:)
  database/
    prisma.ts
prisma/
  schema.prisma
  seed.ts
```

## Chạy local (Windows)

### 1. Tạo Discord Application

1. Vào <https://discord.com/developers/applications> → **New Application**.
2. Đặt tên, thêm icon, mô tả. Lưu **Application ID**.
3. Vào **Bot** → **Reset Token** để tạo bot token (chỉ hiện một lần, giữ kỹ).

### 2. Thiết lập `.env`

Sao chép `.env.example` → `.env` và điền:

```
DISCORD_TOKEN=<bot token của bạn>
DISCORD_CLIENT_ID=<application id>
DISCORD_GUILD_ID=<id server test (để trống khi public)>
DATABASE_URL="file:./dev.db"
```

`DISCORD_GUILD_ID` dùng để đăng ký lệnh nhanh trong server test. Để trống sẽ đăng ký global (lan tỏa chậm hơn).

### 3. Cài và chạy

```powershell
npm install
npm run db:generate   # sinh Prisma client
npm run db:migrate    # tạo database
npm run db:seed       # nạp thức ăn mặc định
npm run register      # đăng ký slash commands
npm run dev           # chạy bot (tsx watch, hot reload)
```

Kiểm tra typecheck: `npm run check`

## Lệnh

| Lệnh | Mô tả |
|------|-------|
| `/start` | Tạo hồ sơ người nuôi + quà khởi đầu |
| `/adopt` | Nhận pet mới (chó/mèo/hamster) |
| `/pets` | Xem danh sách pet + ID |
| `/profile` | Level, EXP, vàng, nhà |
| `/daily` | Điểm danh hằng ngày (streak bonus) |
| `/feed` | Cho pet ăn (cần ID pet + ID thức ăn) |
| `/petting` | Âu yếm pet (+10 yêu thích, 5 lần/ngày) |
| `/inventory` | Kho thức ăn + cảnh báo sắp hết |
| `/shop food` | Xem/mua thức ăn |
| `/shop house` | Xem/mua/chọn nhà |
| `/play` | Chơi XO hoặc dò mìn |
| `/leaderboard` | Bảng xếp hạng level & vàng |
| `/help` | Hướng dẫn nhanh |

Lấy ID pet từ `/pets`; ID thức ăn từ `/inventory` hoặc `/shop food`.

## Thang điểm & cân bằng

- Pet level cao tăng % EXP cho chủ: +5% mỗi 10 level, tối đa **+50%**.
- Điểm danh hằng ngày: thưởng vàng/EXP tăng theo level chủ; streak +5%/ngày, tối đa **+50%**.
- Cho ăn thức ăn pet thích (+25% EXP pet) và tăng comfort nhiều hơn.
- Bỏ bê 2+ ngày: mỗi ngày trừ 10 comfort (tối thiểu 0). Mood chuyển Buồn khi comfort ≤ 34, Vui khi ≥ 70.
- Nhà duy trì comfort tối thiểu cho pet: BASIC 25, COZY 45, VILLA 65.
- Mini-game: 10 ván/ngày; ván 6+ chỉ nhận 50% thưởng.

## Mời bot vào server

Trong Developer Portal → **Installation**:
- Bật **Guild Install**.
- Chọn scopes: `bot`, `applications.commands`.
- Chọn quyền tối thiểu: `Send Messages`, `Embed Links`, `Use Application Commands`, `Read Message History`.
- Copy **Discord Provided Link**, mở để thêm bot. Cần quyền `MANAGE_GUILD`.

Bot chỉ dùng slash command + button + select menu nên **không cần** bật Message Content Intent.

## Deploy & public

Để bot chạy 24/7, deploy lên host có tiến trình chạy lâu dài (Railway / Render / Fly.io / một VPS).

1. **Đổi sang PostgreSQL** (production): sửa `prisma/schema.prisma`, đổi `provider = "postgresql"` và `DATABASE_URL` thành connection string Postgres.
2. **Deploy**: đẩy code lên host, đặt các biến môi trường trong dashboard (Token, Client ID, DATABASE_URL) — **không** upload file `.env`.
3. **Đăng ký global commands**: để `DISCORD_GUILD_ID` trống rồi chạy `npm run register`.
4. **Public**: sau khi bot online, mời bằng install link. Muốn xuất hiện trong Discord App Directory, hoàn tất xác minh ứng dụng và bật Discovery.

### Đẩy lên GitHub an toàn

File `.env`, `node_modules/`, `dist/` và database local đều trong `.gitignore` — không bị push.

```powershell
git init
git add .
git commit -m "Initial Discord pet bot"
git branch -M main
git remote add origin <URL-repo-GitHub>
git push -u origin main
```