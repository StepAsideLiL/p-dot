/*
  Warnings:

  - You are about to drop the column `bio` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "bio";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" STRING NOT NULL DEFAULT '';
