# 📖 Hướng dẫn chơi — Pet Haven

> Bot nuôi thú cưng ảo cho Discord. Tài liệu này giải thích toàn bộ cơ chế game.

---

## Mục lục

1. [Bắt đầu](#1-bắt-đầu)
2. [Nhận nuôi thú cưng](#2-nhận-nuôi-thú-cưng)
3. [Chăm sóc hằng ngày](#3-chăm-sóc-hằng-ngày)
4. [Hệ thống Comfort & Mood](#4-hệ-thống-comfort--mood)
5. [Tiến trình Level](#5-tiến-trình-level)
6. [Điểm danh hằng ngày](#6-điểm-danh-hằng-ngày)
7. [Nhà ở](#7-nhà-ở)
8. [Shop & Thức ăn](#8-shop--thức-ăn)
9. [Mini-game](#9-mini-game)
10. [Kinh tế & Vàng](#10-kinh-tế--vàng)
11. [Lệnh prefix](#11-lệnh-prefix)

---

## 1. Bắt đầu

Dùng `/start` để tạo hồ sơ người nuôi. Bạn sẽ nhận:
- **150 vàng** 🪙 khởi đầu
- **5 phần thức ăn** cơ bản
- **Nhà cơ bản** 🏠 miễn phí

Sau đó dùng `/adopt` để nhận nuôi thú cưng đầu tiên.

---

## 2. Nhận nuôi thú cưng

Dùng `/adopt` để chọn loài và đặt tên cho pet.

### Các loài và chi phí

| Tier | Loài | Icon | Chi phí thêm | Yêu cầu |
|------|------|------|-------------|---------|
| Cơ bản | Chó | 🐶 | — | — |
| Cơ bản | Mèo | 🐱 | — | — |
| Cơ bản | Hamster | 🐹 | — | — |
| Cơ bản | Thỏ | 🐰 | — | — |
| Cơ bản | Chim | 🐦 | — | — |
| Cơ bản | Cá | 🐟 | — | — |
| Nâng cao | Rắn | 🐍 | +50 vàng | — |
| Nâng cao | Nhện | 🕷️ | +50 vàng | — |
| Nâng cao | Chuột | 🐀 | +50 vàng | — |
| Nâng cao | Chồn | 🦡 | +50 vàng | — |
| Huyền thoại | Kỳ lân | 🦄 | +100 vàng | Level 15 |

> **2 pet đầu tiên miễn phí.** Từ pet thứ 3 trở đi, phí nhận nuôi cơ bản là **200 vàng** (cộng thêm phí loài nếu có).

### Giới hạn pet
Số pet tối đa phụ thuộc vào **nhà bạn đang sở hữu** (xem mục Nhà ở).

---

## 3. Chăm sóc hằng ngày

### Cho ăn — `/feed`
- Chọn pet và thức ăn bằng autocomplete
- Tăng **comfort** và **EXP** cho cả pet lẫn chủ
- Nếu cho ăn đúng loại thức ăn pet **thích**: +25% EXP pet

### Âu yếm — `/petting`
- Tối đa **5 lần/ngày** mỗi pet
- Mỗi lần: +10 yêu thích, +6 EXP chủ, +4 EXP pet
- Reset lúc 0:00 hằng ngày

---

## 4. Hệ thống Comfort & Mood

### Comfort (0–100)
Comfort phản ánh mức độ hạnh phúc của thú cưng.

| Comfort | Mood | Icon |
|---------|------|------|
| 0–34 | Buồn | 😢 |
| 35–69 | Ổn | 🙂 |
| 70–100 | Vui vẻ | 😄 |

### Bỏ bê
Nếu bạn **quên cho ăn hoặc âu yếm hơn 2 ngày**, mỗi ngày sau đó pet mất **10 comfort**. Hệ thống chạy kiểm tra tự động mỗi 24 giờ.

### Comfort Floor (nhà)
Nhà xịn hơn duy trì mức comfort **tối thiểu** cho pet:

| Nhà | Comfort tối thiểu |
|-----|------------------|
| 🏠 Nhà cơ bản | 25 |
| 🛖 Nhà ấm cúng | 45 |
| 🏡 Biệt thự pet | 65 |

---

## 5. Tiến trình Level

### Level chủ
- Nhận EXP qua: cho ăn, âu yếm, điểm danh, mini-game
- EXP cần để lên level: `level × 100`
- Level chủ cao → mở khóa thức ăn xịn hơn, mua nhà lớn hơn

### Level pet
- Pet nhận EXP khi được cho ăn và âu yếm
- **Pet level cao → tặng EXP bonus cho chủ**: +5% mỗi 10 level, tối đa **+50%**

---

## 6. Điểm danh hằng ngày

Dùng `/daily` mỗi ngày để nhận thưởng:

| Phần thưởng | Công thức |
|-------------|-----------|
| Vàng | `50 + (level chủ × 15)` |
| EXP | `25 + (level chủ × 8)` |
| Streak bonus | +5% mỗi ngày liên tiếp, tối đa **+50%** |

> Bỏ lỡ 1 ngày → streak về 0. Duy trì streak mỗi ngày để tối đa hóa thưởng!

---

## 7. Nhà ở

### Mua nhà — `/shop house`

| Nhà | Icon | Giá | Yêu cầu lv | Comfort floor | Sức chứa |
|-----|------|-----|------------|---------------|---------|
| Nhà cơ bản | 🏠 | Miễn phí | 1 | 25 | 3 pet |
| Nhà ấm cúng | 🛖 | 300 vàng | 5 | 45 | 6 pet |
| Biệt thự pet | 🏡 | 1200 vàng | 15 | 65 | 10 pet |

### Slot nhà
Bạn có thể **sở hữu nhiều nhà** — slot nhà mở dần theo level chủ:

| Level | Slot nhà |
|-------|---------|
| 1–4 | 1 slot |
| 5–14 | 2 slot |
| 15+ | 3 slot |

Không cần chọn nhà "active" — hệ thống tự tổng hợp sức chứa từ tất cả nhà đang sở hữu và áp dụng comfort floor từ nhà tốt nhất.

---

## 8. Shop & Thức ăn

### Mua thức ăn — `/shop food`
- Thức ăn được mở khóa theo **level chủ**
- Mỗi loại thức ăn phù hợp với một số loài pet nhất định
- Cho ăn đúng loại → +25% EXP pet

### Xem kho — `/inventory`
- Hiển thị số lượng từng loại thức ăn đang có
- Cảnh báo khi số lượng còn ≤ 3

---

## 9. Mini-game

### Caro (XO) và Dò Mìn — `/play`
- Chọn `xo` hoặc `minesweeper` sau khi dùng lệnh
- Chơi hoàn toàn bằng **button Discord**, không cần gõ thêm lệnh
- Dò Mìn có 3 mức độ: Dễ / Trung bình / Khó

### Giới hạn thưởng
| Số ván trong ngày | Thưởng |
|------------------|--------|
| 1–5 | 100% |
| 6–10 | 50% |
| Sau 10 | Không thưởng |

> Game state lưu trong bộ nhớ và tự hết hạn sau **10 phút** không hoạt động.

---

## 10. Kinh tế & Vàng

Các nguồn kiếm vàng:

| Nguồn | Vàng |
|-------|------|
| Quà bắt đầu | 150 |
| Điểm danh hằng ngày | 50 + (level × 15) |
| Mini-game (thắng) | Tùy ván |
| Streak bonus | Nhân vào tất cả thưởng hằng ngày |

Các chi tiêu vàng:

| Mục | Chi phí |
|-----|--------|
| Nhận nuôi pet (từ thứ 3) | 200 vàng |
| Nhà ấm cúng | 300 vàng |
| Biệt thự pet | 1200 vàng |
| Thức ăn | Tùy loại |

---

## 11. Lệnh prefix

Ngoài slash command `/`, bot hỗ trợ lệnh text với prefix `p!` (hoặc prefix tùy chỉnh).

Ví dụ: `p!pets`, `p!feed`, `p!daily`

Admin server có thể đổi prefix bằng `/setprefix <prefix_mới>`.

---

<div align="center">

🐾 Chúc bạn nuôi pet vui vẻ! 
</div>
