-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "petCode" TEXT NOT NULL DEFAULT '',
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
INSERT INTO "new_Pet" ("affection", "comfort", "createdAt", "dailyPetCount", "experience", "id", "lastFedAt", "lastPetResetAt", "lastPettedAt", "level", "mood", "name", "ownerId", "petCode", "species", "updatedAt", "variant")
SELECT
  p."affection", p."comfort", p."createdAt", p."dailyPetCount", p."experience", p."id",
  p."lastFedAt", p."lastPetResetAt", p."lastPettedAt", p."level", p."mood", p."name", p."ownerId",
  -- Build petCode: species prefix + zero-padded rank within owner+species
  (CASE p."species" WHEN 'DOG' THEN '00' WHEN 'CAT' THEN '01' WHEN 'HAMSTER' THEN '02' ELSE '99' END)
  || printf('%03d',
      (SELECT COUNT(*) FROM "Pet" p2
       WHERE p2."ownerId" = p."ownerId"
         AND p2."species" = p."species"
         AND p2."createdAt" <= p."createdAt"
         AND p2."id" <= p."id")
     ),
  p."species", p."updatedAt", p."variant"
FROM "Pet" p;
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
CREATE UNIQUE INDEX "Pet_ownerId_petCode_key" ON "Pet"("ownerId", "petCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
