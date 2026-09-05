-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "petCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "affection" INTEGER NOT NULL DEFAULT 0,
    "comfort" INTEGER NOT NULL DEFAULT 60,
    "mood" TEXT NOT NULL DEFAULT 'OKAY',
    "dailyPetCount" INTEGER NOT NULL DEFAULT 0,
    "lastPetResetAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastFedAt" DATETIME,
    "lastPettedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("affection", "comfort", "createdAt", "dailyPetCount", "experience", "id", "lastFedAt", "lastPetResetAt", "lastPettedAt", "level", "mood", "name", "ownerId", "petCode", "species", "updatedAt", "variant") SELECT "affection", "comfort", "createdAt", "dailyPetCount", "experience", "id", "lastFedAt", "lastPetResetAt", "lastPettedAt", "level", "mood", "name", "ownerId", "petCode", "species", "updatedAt", "variant" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
CREATE UNIQUE INDEX "Pet_ownerId_petCode_key" ON "Pet"("ownerId", "petCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
