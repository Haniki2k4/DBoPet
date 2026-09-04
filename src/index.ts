import { Client, Events, GatewayIntentBits, Interaction } from "discord.js";
import { env } from "./config/env.js";
import { handleCommand } from "./interactions/command-handler.js";
import { handleButton, handleSelectMenu } from "./interactions/button-handler.js";
import { applyNeglect } from "./services/pet.service.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
  await applyNeglect();
  setInterval(() => { void applyNeglect(); }, 24 * 60 * 60 * 1_000);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  try {
    if (interaction.isChatInputCommand()) await handleCommand(interaction);
    if (interaction.isButton()) await handleButton(interaction);
    if (interaction.isStringSelectMenu()) await handleSelectMenu(interaction);
  } catch (error: unknown) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Đã có lỗi không xác định.";
    if (interaction.isRepliable()) {
      const reply = { content: `⚠️ ${message}`, ephemeral: true };
      if (interaction.replied || interaction.deferred) await interaction.followUp(reply);
      else await interaction.reply(reply);
    }
  }
});

await client.login(env.token);
