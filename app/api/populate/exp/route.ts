import prisma from "@/lib/prismadb";
import { getRandomElement } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import {
  courseInstitutionNames,
  courseTitles,
  degrees,
  fieldsOfStudy,
  jobRoles,
  softwareCompanies,
  uniInstitutionNames,
} from "../_const/constent";

export async function GET() {
  try {
    // const profiles = await prisma.profile.findMany();
    // const experiences = await prisma.experience.count();
    // const education = await prisma.education.count();
    // const courses = await prisma.course.count();
    // if (
    //   profiles.length !== 0 &&
    //   experiences === 0 &&
    //   education === 0 &&
    //   courses === 0
    // ) {
    //   profiles.map(async (profile) => {
    //     await prisma.experience.create({
    //       data: {
    //         companyName: getRandomElement(softwareCompanies),
    //         jobPosition: getRandomElement(jobRoles),
    //         description: getRandomElement(fieldsOfStudy),
    //         startDate: faker.date
    //           .between({
    //             from: "2015-01-01T00:00:00.000Z",
    //             to: "2017-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         finishDate: faker.date
    //           .between({
    //             from: "2019-01-01T00:00:00.000Z",
    //             to: "2023-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         profile: {
    //           connect: {
    //             id: profile.id,
    //           },
    //         },
    //       },
    //     });
    //     await prisma.education.create({
    //       data: {
    //         institutionName: getRandomElement(uniInstitutionNames),
    //         degree: getRandomElement(degrees),
    //         fieldOfStudy: getRandomElement(fieldsOfStudy),
    //         gpa: faker.number.float({ precision: 0.01, max: 4 }).toString(),
    //         maxGpa: "4",
    //         startDate: faker.date
    //           .between({
    //             from: "2015-01-01T00:00:00.000Z",
    //             to: "2017-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         finishDate: faker.date
    //           .between({
    //             from: "2019-01-01T00:00:00.000Z",
    //             to: "2023-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         profile: {
    //           connect: {
    //             id: profile.id,
    //           },
    //         },
    //       },
    //     });
    //     await prisma.course.create({
    //       data: {
    //         institutionName: getRandomElement(courseInstitutionNames),
    //         courseName: getRandomElement(courseTitles),
    //         certificateLink: "https://www.google.com/",
    //         startDate: faker.date
    //           .between({
    //             from: "2015-01-01T00:00:00.000Z",
    //             to: "2017-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         finishDate: faker.date
    //           .between({
    //             from: "2019-01-01T00:00:00.000Z",
    //             to: "2023-01-01T00:00:00.000Z",
    //           })
    //           .toISOString(),
    //         profile: {
    //           connect: {
    //             id: profile.id,
    //           },
    //         },
    //       },
    //     });
    //   });
    //   console.log(
    //     "Successfully created Experience, Education and Course table"
    //   );
    // } else {
    //   console.log("Experience, Education and Course table already populated.");
    // }
    // const createdUsers = await prisma.user.findMany({
    //   include: {
    //     profile: {
    //       include: {
    //         experiences: true,
    //         education: true,
    //         courses: true,
    //       },
    //     },
    //   },
    // });
    // return Response.json(createdUsers);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
