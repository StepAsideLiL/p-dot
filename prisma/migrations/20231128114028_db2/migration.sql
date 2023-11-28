-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('AVAILABLE', 'BUSY', 'HIRER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "jobRole" STRING NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN     "workStatus" "WorkStatus" NOT NULL DEFAULT 'AVAILABLE';
