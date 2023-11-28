import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    const userCount = await prisma.user.count();

    if (userCount === 0) {
      for (let i = 0; i < 20; i++) {
        const name = {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        };

        await prisma.user.create({
          data: {
            username: faker.internet.userName({
              firstName: name.firstName,
              lastName: name.lastName,
            }),
            email: faker.internet.email({
              firstName: name.firstName,
              lastName: name.lastName,
            }),
            password: await bcrypt.hash("12345678", 10),
            name: faker.person.fullName({
              firstName: name.firstName,
              lastName: name.lastName,
            }),
            profilePicture: faker.image.avatar(),
          },
        });
      }
    } else {
      console.log("Already Populated.");
    }

    const createdUsers = await prisma.user.findMany();
    return Response.json(createdUsers);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
