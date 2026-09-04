import { Prisma } from "@prisma/client";
import { experienceRequired } from "../config/game.js";

type DatabaseClient = Prisma.TransactionClient;

export async function addUserExperience(client: DatabaseClient, userId: string, amount: number): Promise<void> {
  const user = await client.user.findUniqueOrThrow({ where: { id: userId } });
  let level = user.level;
  let experience = user.experience + amount;
  while (experience >= experienceRequired(level)) {
    experience -= experienceRequired(level);
    level += 1;
  }
  await client.user.update({ where: { id: userId }, data: { level, experience } });
}

export async function addPetExperience(client: DatabaseClient, petId: string, amount: number): Promise<void> {
  const pet = await client.pet.findUniqueOrThrow({ where: { id: petId } });
  let level = pet.level;
  let experience = pet.experience + amount;
  while (experience >= experienceRequired(level)) {
    experience -= experienceRequired(level);
    level += 1;
  }
  await client.pet.update({ where: { id: petId }, data: { level, experience } });
}
