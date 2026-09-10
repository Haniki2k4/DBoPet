import { HouseType, Mood, PetSpecies } from "@prisma/client";

// House priority used to determine "best house owned"
export const HOUSE_PRIORITY: Record<HouseType, number> = {
  [HouseType.BASIC]: 0,
  [HouseType.COZY]: 1,
  [HouseType.VILLA]: 2,
};

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
  adopt: {
    freeAdopts: 2,   // first 2 pets are free
    cost: 200,       // 200 gold per pet from the 3rd onward
  },
  // levels at which ownedHouseSlots increases by 1 (base = 1)
  houseSlotUnlockLevels: [5, 15] as const,
  house: {
    [HouseType.BASIC]: { name: "Nhà cơ bản",  icon: "🏠", price: 0,     unlockLevel: 1,  comfortFloor: 25, maxPets: 3,  houseSlotRequired: 1 },
    [HouseType.COZY]:  { name: "Nhà ấm cúng", icon: "🛖", price: 300,   unlockLevel: 5,  comfortFloor: 45, maxPets: 6,  houseSlotRequired: 2 },
    [HouseType.VILLA]: { name: "Biệt thự pet", icon: "🏡", price: 1_200, unlockLevel: 15, comfortFloor: 65, maxPets: 10, houseSlotRequired: 3 },
  },
} as const;

export const SPECIES = {
  [PetSpecies.DOG]:     { label: "Chó",     icon: "🐶", variants: ["Corgi", "Shiba", "Golden", "Poodle", "Husky"] },
  [PetSpecies.CAT]:     { label: "Mèo",     icon: "🐱", variants: ["Mướp", "Anh lông ngắn", "Maine Coon", "Munchkin", "Ragdoll"] },
  [PetSpecies.HAMSTER]: { label: "Hamster",  icon: "🐹", variants: ["Syrian", "Robo", "Winter White", "Chinese"] },
  [PetSpecies.RABBIT]:  { label: "Thỏ",     icon: "🐰", variants: ["Dutch", "Angora", "Lop", "Rex"] },
  [PetSpecies.BIRD]:    { label: "Chim",    icon: "🐦", variants: ["Vẹt", "Yến", "Bạch yến", "Chích chòe"] },
  [PetSpecies.FISH]:    { label: "Cá",      icon: "🐟", variants: ["Cá vàng", "Betta", "Koi", "Neon Tetra"] },
  // v2 — +50 vàng so với phí nhận nuôi thông thường
  [PetSpecies.SNAKE]:   { label: "Rắn",     icon: "🐍", variants: ["Trăn bóng", "Rắn bắp cày", "Rắn ngô", "Rắn hoàng đế"] },
  [PetSpecies.SPIDER]:  { label: "Nhện",    icon: "🕷️", variants: ["Tarantula Hồng", "Tarantula Xanh", "Nhện Đỏ", "Nhện Lông Vàng"] },
  [PetSpecies.RAT]:     { label: "Chuột",   icon: "🐀", variants: ["Dumbo", "Fancy", "Rex", "Hairless"] },
  [PetSpecies.FERRET]:  { label: "Chồn",    icon: "🦡", variants: ["Sable", "Albino", "Silver Mitt", "Chocolate"] },
  // v3 — +100 vàng + yêu cầu lv15
  [PetSpecies.UNICORN]: { label: "Kỳ lân",  icon: "🦄", variants: ["Cầu vồng", "Ngân hà", "Bình minh", "Hoàng hôn", "Đêm sao"] },
} as const;

/** Chi phí và yêu cầu level bổ sung theo loài (chồng lên GAME.adopt.cost). */
export const SPECIES_TIER: Partial<Record<PetSpecies, { extraCost: number; minLevel: number }>> = {
  [PetSpecies.SNAKE]:   { extraCost: 50,  minLevel: 1 },
  [PetSpecies.SPIDER]:  { extraCost: 50,  minLevel: 1 },
  [PetSpecies.RAT]:     { extraCost: 50,  minLevel: 1 },
  [PetSpecies.FERRET]:  { extraCost: 50,  minLevel: 1 },
  [PetSpecies.UNICORN]: { extraCost: 100, minLevel: 15 },
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

/** Returns the best HouseType from a list of owned house types. */
export function bestHouse(ownedTypes: HouseType[]): HouseType {
  return ownedTypes.reduce((best, h) =>
    HOUSE_PRIORITY[h] > HOUSE_PRIORITY[best] ? h : best,
    HouseType.BASIC
  );
}

/** Returns how many house slots a user has based on their level. */
export function houseSlotCount(level: number): number {
  const unlocks = GAME.houseSlotUnlockLevels;
  let slots = 1;
  for (const requiredLevel of unlocks) {
    if (level >= requiredLevel) slots++;
  }
  return slots;
}
