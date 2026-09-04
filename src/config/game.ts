import { HouseType, Mood, PetSpecies } from "@prisma/client";

export const GAME = {
  starterGold: 150,
  starterFoodQuantity: 5,
  dailyPetLimit: 5,
  affectionPerPet: 10,
  petOwnerExperience: 6,
  petPetExperience: 4,
  lowInventoryThreshold: 3,
  baseExperiencePerLevel: 100,
  comfort: { sadMax: 34, happyMin: 70, min: 0, max: 100 },
  neglect: { daysBeforePenalty: 2, comfortPenaltyPerDay: 10 },
  daily: { baseGold: 50, goldPerLevel: 15, baseExp: 25, expPerLevel: 8 },
  minigame: { maxGamesPerDay: 10, rewardDecayAfter: 5 },
  house: {
    [HouseType.BASIC]: { name: "Nhà cơ bản", icon: "🏠", price: 0, unlockLevel: 1, comfortFloor: 25 },
    [HouseType.COZY]: { name: "Nhà ấm cúng", icon: "🛖", price: 300, unlockLevel: 4, comfortFloor: 45 },
    [HouseType.VILLA]: { name: "Biệt thự pet", icon: "🏡", price: 1_200, unlockLevel: 10, comfortFloor: 65 }
  }
} as const;

export const SPECIES = {
  [PetSpecies.DOG]: { label: "Chó", icon: "🐶", variants: ["Corgi", "Shiba", "Golden"] },
  [PetSpecies.CAT]: { label: "Mèo", icon: "🐱", variants: ["Mướp", "Anh lông ngắn", "Maine Coon"] },
  [PetSpecies.HAMSTER]: { label: "Hamster", icon: "🐹", variants: ["Syrian", "Robo", "Winter White"] }
} as const;

export function moodForComfort(comfort: number): Mood {
  if (comfort <= GAME.comfort.sadMax) return Mood.SAD;
  if (comfort >= GAME.comfort.happyMin) return Mood.HAPPY;
  return Mood.OKAY;
}

export function moodLabel(mood: Mood): string {
  return { [Mood.SAD]: "Buồn 😢", [Mood.OKAY]: "Ổn 🙂", [Mood.HAPPY]: "Vui vẻ 😄" }[mood];
}

export function experienceRequired(level: number): number {
  return GAME.baseExperiencePerLevel * level;
}

export function petExperienceBonus(level: number): number {
  return Math.min(Math.floor(level / 10) * 5, 50);
}
