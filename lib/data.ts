import { cache } from "react";
import prisma from "./prismadb";

export const allUsers = cache(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const users = await prisma.user.findMany({
      include: {
        skills: true,
      },
    });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all users.");
  }
});

export const singleUser = cache(async (username: string) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        skills: true,
        profile: {
          include: {
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
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const user = await prisma.user.findUnique({
      where: {
        username: "Noah.Blanda-Bosco",
        // username: "Noah.Blanda-Boscoacasc",
      },
    });

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user session.");
  }
});
