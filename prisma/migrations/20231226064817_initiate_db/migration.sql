-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'HIRER');

-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('AVAILABLE', 'BUSY', 'HIRER');

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "username" STRING NOT NULL,
    "password" STRING NOT NULL,
    "name" STRING NOT NULL DEFAULT '',
    "profilePicture" STRING NOT NULL DEFAULT '',
    "profilePictureId" STRING NOT NULL DEFAULT '',
    "workStatus" "WorkStatus" NOT NULL DEFAULT 'AVAILABLE',
    "jobRole" STRING NOT NULL DEFAULT '',
    "bio" STRING NOT NULL DEFAULT '',
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "about" STRING NOT NULL DEFAULT '',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "slug" STRING NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" STRING NOT NULL,
    "profileId" STRING NOT NULL,
    "companyName" STRING,
    "jobPosition" STRING,
    "description" STRING,
    "startDate" TIMESTAMP(3),
    "finishDate" TIMESTAMP(3),

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" STRING NOT NULL,
    "profileId" STRING NOT NULL,
    "institutionName" STRING,
    "degree" STRING,
    "fieldOfStudy" STRING,
    "gpa" STRING,
    "maxGpa" STRING,
    "startDate" TIMESTAMP(3),
    "finishDate" TIMESTAMP(3),

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" STRING NOT NULL,
    "profileId" STRING NOT NULL,
    "institutionName" STRING,
    "courseName" STRING,
    "certificateLink" STRING,
    "startDate" TIMESTAMP(3),
    "finishDate" TIMESTAMP(3),

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToUser" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_id_key" ON "Skill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_slug_key" ON "Skill"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_id_key" ON "Experience"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Education_id_key" ON "Education"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToUser_AB_unique" ON "_SkillToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToUser_B_index" ON "_SkillToUser"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
