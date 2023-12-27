import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import {
  courseInstitutionNames,
  courseTitles,
  degrees,
  fieldsOfStudy,
  jobRoles,
} from "../_const/constent";
import { getRandomElement, slugify } from "@/lib/utils";

export async function GET() {
  try {
    // 1. Create 20 dummy users
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
            password: await bcrypt.hash("123456", 10),
            name: faker.person.fullName({
              firstName: name.firstName,
              lastName: name.lastName,
            }),
            bio: faker.person.bio(),
            jobRole: getRandomElement(jobRoles),
            profilePicture: faker.image.avatar(),
          },
        });
      }

      console.log("Successfully created User table.");
    } else {
      console.log("User table already populated.");
    }

    const output = await prisma.user.findMany();
    return Response.json(output);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
