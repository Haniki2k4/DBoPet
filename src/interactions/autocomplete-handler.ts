import { AutocompleteInteraction } from "discord.js";
import { GAME, SPECIES } from "../config/game.js";
import { prisma } from "../database/prisma.js";

export async function handleAutocomplete(interaction: AutocompleteInteraction): Promise<void> {
  const commandName = interaction.commandName;
  const subcommand = interaction.options.getSubcommand(false);
  const focused = interaction.options.getFocused(true);

  try {
    // Pet selection for /feed and /petting
    if ((commandName === "feed" || commandName === "petting") && focused.name === "pet") {
      return respondPets(interaction, focused.value);
    }
    // Food selection in /feed
    if (commandName === "feed" && focused.name === "food") {
      return respondInventoryFood(interaction, focused.value);
    }
    // Shop food
    if (commandName === "shop" && subcommand === "food" && focused.name === "id") {
      return respondShopFood(interaction, focused.value);
    }
    // Shop house id
    if (commandName === "shop" && subcommand === "house" && focused.name === "id") {
      return respondShopHouse(interaction, focused.value);
    }
    // Shop house replace (owned houses)
    if (commandName === "shop" && subcommand === "house" && focused.name === "replace") {
      return respondOwnedHouses(interaction, focused.value);
    }
  } catch {
    await interaction.respond([]);
  }
}

async function requireUserUserId(interaction: AutocompleteInteraction): Promise<string | null> {
  const user = await prisma.user.findUnique({ where: { discordId: interaction.user.id } });
  return user?.id ?? null;
}

async function respondPets(interaction: AutocompleteInteraction, queryRaw: string): Promise<void> {
  const userId = await requireUserUserId(interaction);
  const query = queryRaw.toLowerCase();
  if (!userId) return interaction.respond([]);

  const pets = await prisma.pet.findMany({ where: { ownerId: userId }, orderBy: { createdAt: "asc" }, take: 25 });
  const filtered = pets.filter((pet) => {
    if (!query) return true;
    const speciesInfo = SPECIES[pet.species];
    return (
      pet.petCode.toLowerCase().includes(query) ||
      pet.name.toLowerCase().includes(query) ||
      pet.variant.toLowerCase().includes(query) ||
      speciesInfo.label.toLowerCase().includes(query)
    );
  });
  await interaction.respond(
    filtered.map((pet) => {
      const speciesInfo = SPECIES[pet.species];
      return {
        value: pet.petCode,
        name: `${speciesInfo.icon} ${pet.name} · ${pet.variant} [${pet.petCode}]`.slice(0, 100),
      };
    })
  );
}

async function respondInventoryFood(interaction: AutocompleteInteraction, queryRaw: string): Promise<void> {
  const userId = await requireUserUserId(interaction);
  const query = queryRaw.toLowerCase();
  if (!userId) return interaction.respond([]);

  const inventory = await prisma.userInventory.findMany({
    where: { userId },
    include: { food: true },
    orderBy: { quantity: "desc" },
    take: 25,
  });

  const sorted = [...inventory].sort((a, b) => Number(b.quantity > 0) - Number(a.quantity > 0));
  const filtered = sorted.filter((item) => {
    if (!query) return true;
    return item.food.name.toLowerCase().includes(query) || item.food.id.toLowerCase().includes(query);
  });

  await interaction.respond(
    filtered.map((item) => {
      const name = `${item.food.icon} ${item.food.name} · ${item.food.price} vàng · Lv.${item.food.unlockLevel}`;
      const status = item.quantity > 0
        ? (item.quantity < GAME.lowInventoryThreshold ? ` · ⚠️ còn ${item.quantity} (sắp hết)` : ` · còn ${item.quantity} phần`)
        : ` · hết (mua /shop food)`;
      return { value: item.foodId, name: `${name}${status}`.slice(0, 100) };
    })
  );
}

async function respondShopFood(interaction: AutocompleteInteraction, queryRaw: string): Promise<void> {
  const userId = await requireUserUserId(interaction);
  const query = queryRaw.toLowerCase();
  const foods = await prisma.food.findMany({ orderBy: { unlockLevel: "asc" }, take: 25 });
  const filtered = foods.filter((food) => {
    if (!query) return true;
    return food.name.toLowerCase().includes(query) || food.id.toLowerCase().includes(query);
  });

  const user = userId ? await prisma.user.findUnique({ where: { id: userId } }) : null;
  const owned = userId ? (await prisma.userInventory.findMany({ where: { userId } })).map((i) => i.foodId) : [];

  await interaction.respond(
    filtered.map((food) => {
      let status = "";
      if (owned.includes(food.id)) status = " ✓ đã sở hữu";
      else if (user && user.level < food.unlockLevel) status = ` 🔒 cần Lv.${food.unlockLevel}`;
      return {
        value: food.id,
        name: `${food.icon} ${food.name} · ${food.price} vàng · Lv.${food.unlockLevel}${status}`.slice(0, 100),
      };
    })
  );
}

async function respondShopHouse(interaction: AutocompleteInteraction, queryRaw: string): Promise<void> {
  const query = queryRaw.toLowerCase();
  const userId = await requireUserUserId(interaction);
  const entries = Object.entries(GAME.house) as Array<[keyof typeof GAME.house, (typeof GAME.house)[keyof typeof GAME.house]]>;
  const filtered = entries.filter(([id, house]) => {
    if (!query) return true;
    return id.toLowerCase().includes(query) || house.name.toLowerCase().includes(query);
  });

  const user = userId ? await prisma.user.findUnique({ where: { id: userId } }) : null;
  const owned = userId ? (await prisma.userHouse.findMany({ where: { userId } })).map((h) => h.houseType) : [];

  await interaction.respond(
    filtered.map(([id, house]) => {
      let status = "";
      if (owned.includes(id as never)) status = " ✓ đã sở hữu";
      else if (user && user.level < house.unlockLevel) status = ` 🔒 cần Lv.${house.unlockLevel}`;
      return {
        value: id,
        name: `${house.icon} ${house.name} · ${house.price} vàng · chứa ${house.maxPets} pet · Lv.${house.unlockLevel}${status}`.slice(0, 100),
      };
    })
  );
}

async function respondOwnedHouses(interaction: AutocompleteInteraction, queryRaw: string): Promise<void> {
  const userId = await requireUserUserId(interaction);
  const query = queryRaw.toLowerCase();
  if (!userId) return interaction.respond([]);

  const owned = await prisma.userHouse.findMany({ where: { userId } });
  const filtered = owned.filter((h) => {
    const house = GAME.house[h.houseType];
    if (!query) return true;
    return h.houseType.toLowerCase().includes(query) || house.name.toLowerCase().includes(query);
  });
  await interaction.respond(
    filtered.map((h) => {
      const house = GAME.house[h.houseType];
      return {
        value: h.houseType,
        name: `${house.icon} ${house.name} — sức chứa ${house.maxPets} pet`.slice(0, 100),
      };
    })
  );
}
