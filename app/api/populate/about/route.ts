import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    if (users.length !== 0) {
      users.map(async (user) => {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            profile: {
              create: {
                about: faker.lorem.paragraphs(5, "<br/>\n"),
              },
            },
          },
        });
      });
    } else {
      console.log("Already Modified.");
    }

    const modifiedUsers = await prisma.user.findMany();
    return Response.json(modifiedUsers);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
