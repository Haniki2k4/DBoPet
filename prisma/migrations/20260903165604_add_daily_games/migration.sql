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
    "lastDailyAt" DATETIME,
    "dailyStreak" INTEGER NOT NULL DEFAULT 0,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "gamesToday" INTEGER NOT NULL DEFAULT 0,
    "lastGameResetAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("activeHouse", "createdAt", "discordId", "experience", "gold", "id", "level", "updatedAt") SELECT "activeHouse", "createdAt", "discordId", "experience", "gold", "id", "level", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
