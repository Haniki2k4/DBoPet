import { Client, Events, GatewayIntentBits, Interaction, Message, MessageFlags } from "discord.js";
import { env } from "./config/env.js";
import { handleCommand } from "./interactions/command-handler.js";
import { handleButton, handleSelectMenu } from "./interactions/button-handler.js";
import { handleAutocomplete } from "./interactions/autocomplete-handler.js";
import { handlePrefixCommand } from "./interactions/prefix-handler.js";
import { getPrefix } from "./services/guild.service.js";
import { applyNeglect } from "./services/pet.service.js";
import { enqueue } from "./utils/user-queue.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
  await applyNeglect();
  setInterval(() => { void applyNeglect(); }, 24 * 60 * 60 * 1_000);
});

client.on(Events.MessageCreate, async (message: Message) => {
  if (message.author.bot) return;
  try {
    const prefix = await getPrefix(message.guildId ?? null);
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    // Prefix commands: queue per author to prevent concurrent DB writes.
    await enqueue(message.author.id, () => handlePrefixCommand(message, prefix));
  } catch (error: unknown) {
    console.error(error);
  }
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  try {
    // Autocomplete: must respond within ~1 s, never queue.
    if (interaction.isAutocomplete()) {
      await handleAutocomplete(interaction);
      return;
    }

    const userId = interaction.user.id;

    // Slash commands: serialize per user to prevent DB race conditions
    if (interaction.isChatInputCommand()) {
      await enqueue(userId, () => handleCommand(interaction));
      return;
    }

    // Buttons & select menus: users can click faster than the bot processes them,
    // causing race conditions on shared state (e.g. petting daily count).
    // Strategy: deferUpdate() immediately to ack within 3 s, then queue the work.
    if (interaction.isButton() || interaction.isStringSelectMenu()) {
      await interaction.deferUpdate();
      if (interaction.isButton()) {
        await enqueue(userId, () => handleButton(interaction));
      } else {
        await enqueue(userId, () => handleSelectMenu(interaction));
      }
      return;
    }
  } catch (error: unknown) {
    const isUnknownInteraction =
      error instanceof Error && typeof (error as { code?: unknown }).code === "number" && (error as { code?: number }).code === 10062;
    if (isUnknownInteraction) {
      // Người dùng đã huỷ tương tác (bấm đi chỗ khác / hết hạn 15s). Bỏ qua, không cần phản hồi.
      return;
    }
    console.error(error);
    const message = error instanceof Error ? error.message : "Đã có lỗi không xác định.";
    if (interaction.isRepliable()) {
      const reply = { content: `⚠️ ${message}`, flags: MessageFlags.Ephemeral as number };
      try {
        if (interaction.replied || interaction.deferred) await interaction.followUp(reply);
        else await interaction.reply(reply);
      } catch {
        // Interaction token đã hết hạn, bỏ qua.
      }
    }
  }
});

async function main(): Promise<void> {
  await client.login(env.token);
}

void main();

