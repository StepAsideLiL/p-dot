import prisma from "@/lib/prismadb";
import { getRandomElement } from "@/lib/utils";
import { faker } from "@faker-js/faker";

const uniInstitutionNames = [
  "University of Example",
  "Tech Institute",
  "Science University",
  "Art College",
  "Business School",
];
const degrees = [
  "Bachelor of Science",
  "Master of Engineering",
  "Bachelor of Arts",
  "Master of Fine Arts",
  "Bachelor of Business Administration",
];
const fieldsOfStudy = [
  "Computer Science",
  "Software Engineering",
  "Mathematics",
  "Painting",
  "Finance",
];

const courseInstitutionNames = [
  "Programming Academy",
  "Data Science Institute",
  "Design School",
  "Business Training Center",
  "Language School",
];
const courseTitles = [
  "Web Development Bootcamp",
  "Machine Learning Fundamentals",
  "Graphic Design Workshop",
  "Project Management Certification",
  "Spanish Language Intensive Course",
];

export async function GET() {
  try {
    const profiles = await prisma.profile.findMany();
    const education = await prisma.education.findMany();
    // const courses = await prisma.course.findMany();

    if (
      profiles.length !== 0 &&
      education.length === 0 //&&
      // courses.length === 0
    ) {
      profiles.map(async (profile) => {
        await prisma.education.create({
          data: {
            institutionName: getRandomElement(uniInstitutionNames),
            degree: getRandomElement(degrees),
            fieldOfStudy: getRandomElement(fieldsOfStudy),
            gpa: faker.number.float({ precision: 0.01, max: 4 }).toString(),
            maxGpa: "4",
            startDate: faker.date.between({
              from: "2015-01-01T00:00:00.000Z",
              to: "2017-01-01T00:00:00.000Z",
            }),
            finishDate: faker.date.between({
              from: "2019-01-01T00:00:00.000Z",
              to: "2023-01-01T00:00:00.000Z",
            }),
            profile: {
              connect: {
                id: profile.id,
              },
            },
          },
        });

        // await prisma.course.create({
        //   data: {
        //     institutionName: getRandomElement(courseInstitutionNames),
        //     courseName: getRandomElement(courseTitles),
        //     startDate: faker.date.between({
        //       from: "2015-01-01T00:00:00.000Z",
        //       to: "2017-01-01T00:00:00.000Z",
        //     }),
        //     finishDate: faker.date.between({
        //       from: "2019-01-01T00:00:00.000Z",
        //       to: "2023-01-01T00:00:00.000Z",
        //     }),
        //     profile: {
        //       connect: {
        //         id: profile.id,
        //       },
        //     },
        //   },
        // });
      });
    } else {
      console.log("Already Modified.");
    }

    const modifiedUsers = await prisma.user.findMany({
      include: {
        profile: {
          include: {
            education: true,
            courses: true,
          },
        },
      },
    });
    return Response.json(modifiedUsers);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
