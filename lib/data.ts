import prisma from "./prismadb";

export const allUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      skills: true,
    },
  });
  return users;
};
