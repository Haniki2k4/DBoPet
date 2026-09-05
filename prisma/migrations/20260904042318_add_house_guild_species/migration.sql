-- CreateTable
CREATE TABLE "UserHouse" (
    "userId" TEXT NOT NULL,
    "houseType" TEXT NOT NULL,
    "boughtAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "houseType"),
    CONSTRAINT "UserHouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GuildConfig" (
    "guildId" TEXT NOT NULL PRIMARY KEY,
    "prefix" TEXT NOT NULL DEFAULT 'p!'
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "discordId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 150,
    "activeHouse" TEXT NOT NULL DEFAULT 'BASIC',
    "ownedHouseSlots" INTEGER NOT NULL DEFAULT 1,
    "lastDailyAt" DATETIME,
    "dailyStreak" INTEGER NOT NULL DEFAULT 0,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "gamesToday" INTEGER NOT NULL DEFAULT 0,
    "lastGameResetAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("activeHouse", "createdAt", "dailyStreak", "discordId", "experience", "feedCount", "gamesPlayed", "gamesToday", "gold", "id", "lastDailyAt", "lastGameResetAt", "level", "updatedAt") SELECT "activeHouse", "createdAt", "dailyStreak", "discordId", "experience", "feedCount", "gamesPlayed", "gamesToday", "gold", "id", "lastDailyAt", "lastGameResetAt", "level", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- Backfill: every existing user owns their current activeHouse
INSERT OR IGNORE INTO "UserHouse" ("userId", "houseType", "boughtAt")
SELECT "id", "activeHouse", CURRENT_TIMESTAMP FROM "User";
