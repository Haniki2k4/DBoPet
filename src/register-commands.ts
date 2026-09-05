import { REST, Routes } from "discord.js";
import { commands } from "./commands/definitions.js";
import { env } from "./config/env.js";

const rest = new REST({ version: "10" }).setToken(env.token);
const route = env.guildId
  ? Routes.applicationGuildCommands(env.clientId, env.guildId)
  : Routes.applicationCommands(env.clientId);

async function main(): Promise<void> {
  await rest.put(route, { body: commands });
  console.log(`Registered ${commands.length} ${env.guildId ? "guild" : "global"} commands.`);
}

void main();
