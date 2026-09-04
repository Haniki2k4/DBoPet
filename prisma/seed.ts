import { PetSpecies, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const foods = [
  { id: "basic-kibble", name: "Hạt cơ bản", icon: "🥣", description: "Bữa ăn hằng ngày cho mọi pet.", price: 15, unlockLevel: 1, petExperience: 12, ownerExperience: 8, comfortGain: 4, preferredBy: null },
  { id: "fish-feast", name: "Cá tươi", icon: "🐟", description: "Món khoái khẩu của mèo.", price: 35, unlockLevel: 3, petExperience: 25, ownerExperience: 15, comfortGain: 8, preferredBy: PetSpecies.CAT },
  { id: "meaty-bowl", name: "Bát thịt", icon: "🥩", description: "Giàu năng lượng cho chó.", price: 35, unlockLevel: 3, petExperience: 25, ownerExperience: 15, comfortGain: 8, preferredBy: PetSpecies.DOG },
  { id: "seed-mix", name: "Hỗn hợp hạt", icon: "🌻", description: "Hạt tuyển chọn cho hamster.", price: 30, unlockLevel: 4, petExperience: 28, ownerExperience: 17, comfortGain: 9, preferredBy: PetSpecies.HAMSTER }
];

async function main(): Promise<void> {
  for (const food of foods) {
    await prisma.food.upsert({ where: { id: food.id }, update: food, create: food });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
