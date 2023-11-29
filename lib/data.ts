import prisma from "./prismadb";

export const allUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      skills: true,
    },
  });
  return users;
};

export const singleUser = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
    include: {
      skills: true,
    },
  });
  return user;
};

export const useSession = async () => {
  const user = await prisma.user.findUnique({
    where: {
      username: "Noah.Blanda-Bosco",
      // username: "Noah.Blanda-Boscoacasc",
    },
  });

  return user;
};
