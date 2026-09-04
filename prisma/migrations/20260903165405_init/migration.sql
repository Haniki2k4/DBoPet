-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "discordId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 150,
    "activeHouse" TEXT NOT NULL DEFAULT 'BASIC',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Food" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "unlockLevel" INTEGER NOT NULL,
    "petExperience" INTEGER NOT NULL,
    "ownerExperience" INTEGER NOT NULL,
    "comfortGain" INTEGER NOT NULL,
    "preferredBy" TEXT
);

-- CreateTable
CREATE TABLE "UserInventory" (
    "userId" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("userId", "foodId"),
    CONSTRAINT "UserInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserInventory_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
