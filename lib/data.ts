import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/lib/prismadb";
import { cache } from "react";

export const allUsers = cache(async () => {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const users = await prisma.user.findMany({
      include: {
        skillsInfo: true,
        profile: {
          include: {
            experiences: true,
            education: true,
            courses: true,
          },
        },
      },
    });

    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all users.");
  }
});

export const singleUser = cache(async (username: string) => {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        skillsInfo: true,
        hasSkills: true,
        profile: {
          include: {
            experiences: true,
            education: true,
            courses: true,
          },
        },
      },
    });

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch unique user.");
  }
});

export const useSession = cache(async () => {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const user = await prisma.user.findUnique({
      where: {
        username: "Zachary24",
        // username: "Noah.Blanda-Boscoacasc",
      },
    });

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user session.");
  }
});

export const allSkills = cache(async () => {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const skills = await prisma.skill.findMany({});

    return skills;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch skills.");
  }
});
