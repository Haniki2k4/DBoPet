# Pet Haven Discord Bot

Bot nuôi pet trên Discord: nhận pet (chó/mèo/hamster/thỏ/chim/cá), điểm danh hằng ngày, mua nhiều nhà ở, và chơi mini-game XO + dò mìn. Hỗ trợ cả slash command lẫn lệnh prefix (`p!`).

## Tính năng

- **Đa dạng pet**: chó, mèo, hamster + thỏ, chim, cá với nhiều giống + icon emoji riêng.
- **Chăm sóc hằng ngày**: cho ăn, âu yếm (+10 yêu thích, tối đa 5 lần/ngày), nhận EXP cho chủ và pet.
- **Tiến trình**: level chủ mở khóa thức ăn; level pet cao tăng % EXP bonus (tối đa +50%).
- **Điểm danh hằng ngày** (`/daily`): thưởng vàng + EXP, streak tăng bonus tối đa +50%.
- **Comfort & mood**: 3 trạng thái Buồn/Ổn/Vui vẻ; bỏ bê (quên cho ăn/pet vài ngày) bị trừ comfort.
- **Đa nhà ở**: sở hữu nhiều căn nhà theo slot cấp độ, tổng hợp sức chứa pet, comfort tối thiểu theo nhà xịn nhất. Không cần lệnh switch thủ công.
- **Kinh tế**: vàng, shop thức ăn/nhà, phí nhận nuôi (2 pet đầu miễn phí, từ pet thứ 3 phí 200 vàng), giới hạn thưởng chống farm.
- **Prefix commands** (`p!start`, `p!pets`, `p!feed`…): hỗ trợ cả DM và server, prefix tùy chỉnh per-guild.
- **Autocomplete** toàn diện cho `/feed`, `/petting`, `/shop`: gợi ý pet, thức ăn, nhà.
- **Mini-game**: XO (Caro) và Dò mìn — giới hạn 10 ván/ngày (từ ván 6 chỉ nửa thưởng).

## Lệnh (Slash)

| Lệnh | Mô tả |
|------|-------|
| `/start` | Tạo hồ sơ người nuôi + quà khởi đầu |
| `/adopt` | Nhận pet mới (6 loài) |
| `/pets` | Xem danh sách pet + mã pet |
| `/profile` | Level, EXP, vàng, nhà, slot |
| `/daily` | Điểm danh hằng ngày (streak bonus) |
| `/feed` | Cho pet ăn (autocomplete chọn pet + thức ăn) |
| `/petting` | Âu yếm pet (autocomplete chọn pet) |
| `/inventory` | Kho thức ăn (cảnh báo sắp hết) |
| `/shop food` | Catalog + mua thức ăn (autocomplete) |
| `/shop house` | Catalog + mua/nâng cấp nhà |
| `/house list` | Xem nhà sở hữu, slot, sức chứa pet |
| `/setprefix` | Đổi prefix lệnh text (Admin) |
| `/play` | Chơi XO hoặc dò mìn |
| `/leaderboard` | Bảng xếp hạng level & vàng |
| `/help` | Hướng dẫn nhanh |

## Thang điểm & cân bằng

- Pet level cao tăng % EXP cho chủ: +5% mỗi 10 level, tối đa **+50%**.
- Điểm danh hằng ngày: thưởng vàng/EXP tăng theo level chủ; streak +5%/ngày, tối đa **+50%**.
- Cho ăn thức ăn pet thích (+25% EXP pet) và tăng comfort nhiều hơn.
- Bỏ bê 2+ ngày: mỗi ngày trừ 10 comfort (tối thiểu 0). Mood chuyển Buồn khi comfort ≤ 34, Vui khi ≥ 70.
- Nhà duy trì comfort tối thiểu cho pet: BASIC 25, COZY 45, VILLA 65.
- Mini-game: 10 ván/ngày; ván 6+ chỉ nhận 50% thưởng.

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