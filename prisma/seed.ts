import { PetSpecies, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const foods = [
  { id: "basic-kibble", name: "Hạt cơ bản", icon: "🥣", description: "Bữa ăn hằng ngày cho mọi pet.", price: 15, unlockLevel: 1, petExperience: 12, ownerExperience: 8, comfortGain: 4, preferredBy: null },
  { id: "fish-feast", name: "Cá tươi", icon: "🐟", description: "Món khoái khẩu của mèo.", price: 35, unlockLevel: 3, petExperience: 25, ownerExperience: 15, comfortGain: 8, preferredBy: PetSpecies.CAT },
  { id: "meaty-bowl", name: "Bát thịt", icon: "🥩", description: "Giàu năng lượng cho chó.", price: 35, unlockLevel: 3, petExperience: 25, ownerExperience: 15, comfortGain: 8, preferredBy: PetSpecies.DOG },
  { id: "seed-mix", name: "Hỗn hợp hạt", icon: "🌻", description: "Hạt tuyển chọn cho hamster.", price: 30, unlockLevel: 4, petExperience: 28, ownerExperience: 17, comfortGain: 9, preferredBy: PetSpecies.HAMSTER },
  { id: "carrot-cut", name: "Cà rốt tươi", icon: "🥕", description: "Món yêu thích của thỏ, giòn và bổ dưỡng.", price: 32, unlockLevel: 3, petExperience: 26, ownerExperience: 16, comfortGain: 8, preferredBy: PetSpecies.RABBIT },
  { id: "bird-seed", name: "Hạt kê chim", icon: "🌾", description: "Hỗn hợp ngũ cốc dành riêng cho chim.", price: 28, unlockLevel: 2, petExperience: 24, ownerExperience: 14, comfortGain: 7, preferredBy: PetSpecies.BIRD },
  { id: "brine-shrimp", name: "Tép ngâm nước muối", icon: "🦐", description: "Thức ăn giàu dinh dưỡng cho cá.", price: 30, unlockLevel: 2, petExperience: 24, ownerExperience: 14, comfortGain: 7, preferredBy: PetSpecies.FISH },
  { id: "gourmet-feast", name: "Bữa tiệc thượng hạng", icon: "👑", description: "Món cao cấp cho mọi pet, tăng nhiều EXP & comfort.", price: 120, unlockLevel: 8, petExperience: 55, ownerExperience: 35, comfortGain: 15, preferredBy: null },
];

async function main(): Promise<void> {
  for (const food of foods) {
    await prisma.food.upsert({ where: { id: food.id }, update: food, create: food });
  }
  console.log(`Seeded ${foods.length} foods.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
