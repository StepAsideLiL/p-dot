/*
  Warnings:

  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Education` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_userId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_userId_fkey";

-- DropIndex
DROP INDEX "Course_userId_key";

-- DropIndex
DROP INDEX "Education_userId_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId";
ALTER TABLE "Course" ADD COLUMN     "profileId" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "userId";
ALTER TABLE "Education" ADD COLUMN     "profileId" STRING NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_profileId_key" ON "Course"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Education_profileId_key" ON "Education"("profileId");

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
