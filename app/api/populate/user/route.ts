import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

type User = {
  id: string; // uuid
  username: string;
  email: string;
  profilePicture: string;
  name: string; // "FirstName LastName"
  bio: string; // 240 characters
  jobTitle: string; // programming and engineering job titles
  jobStatus: string; // "Available", "Busy", "Hiring"
  about: string; // 200 words
  skills: any;
  education: any;
  course: any;
}[];

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove non-word characters
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

function getRandomElement(arr: string[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

enum JobStatus {
  "available",
  "busy",
  "hiring",
}

const degrees = [
  "Bachelor of Science",
  "Master of Science",
  "Bachelor of Technology.",
];

const fieldOfStudies = [
  "Computer Science",
  "Software Engineering",
  "Computer Engineering",
  "Information Technology",
  "Data Science",
  "Information Systems",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Biomedical Engineering",
  "Aerospace Engineering",
  "Industrial Engineering",
  "Chemical Engineering",
  "Computer Information Systems",
  "Network Engineering",
  "Cybersecurity",
  "Web Development",
  "Computer Programming",
  "Artificial Intelligence",
  "Machine Learning",
];

const coursesTitle = [
  "Computer Science",
  "Software Engineering",
  "Computer Engineering",
  "Information Technology",
  "Data Science",
  "Artificial Intelligence",
  "Web Development",
  "Network Engineering",
  "Cybersecurity",
  "Database Management",
  "Programming Fundamentals",
  "Mobile App Development",
  "Algorithms and Data Structures",
  "Computer Graphics",
  "Embedded Systems",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Robotics",
  "Human-Computer Interaction",
];

let usersArr = [];
let skillsArr = [];
let educationArr = [];
let coursesArr = [];

// const jobTitle = faker.person.jobTitle();

// let skillObj = {
//   title: jobTitle,
//   slug: slugify(jobTitle),
// };

// let educationObj = {
//   institute: faker.company.name(),
//   degree: getRandomElement(degrees),
//   fieldOfStudies: getRandomElement(fieldOfStudies),
//   gpa: faker.number.float({ min: 2, max: 4, precision: 0.01 }),
//   maxGpa: 4,
//   startDate: faker.date.between({
//     from: "2015-01-01T00:00:00.000Z",
//     to: "2017-01-01T00:00:00.000Z",
//   }),
//   finishedDate: faker.date.between({
//     from: "2020-01-01T00:00:00.000Z",
//     to: "2024-01-01T00:00:00.000Z",
//   }),
// };

// let coursesObj = {
//   institute: faker.company.name(),
//   title: getRandomElement(coursesTitle),
//   startDate: faker.date.between({
//     from: "2015-01-01T00:00:00.000Z",
//     to: "2017-01-01T00:00:00.000Z",
//   }),
//   finishedDate: faker.date.between({
//     from: "2020-01-01T00:00:00.000Z",
//     to: "2024-01-01T00:00:00.000Z",
//   }),
// };

// let userObj = {
//   id: faker.string.uuid(),
//   username: faker.internet.userName(),
//   email: faker.internet.email(),
//   profilePicture: faker.image.avatar(),
//   name: faker.person.fullName(),
//   bio: faker.lorem.sentence({ min: 1, max: 10 }),
//   jobTitle: faker.person.jobTitle(),
//   jobStatus: faker.helpers.enumValue(JobStatus),
//   about: faker.lorem.paragraphs({ min: 1, max: 3 }, "<br/>\n"),
//   skills: [],
//   education: [],
//   course: [],
// };

export async function GET() {
  try {
    const userCount = await prisma.user.count();

    if (userCount === 0) {
      for (let i = 0; i < 20; i++) {
        await prisma.user.create({
          data: {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: await bcrypt.hash("12345678", 10),
          },
        });
      }

      const createdUsers = await prisma.user.findMany();

      return Response.json(createdUsers);
    }

    return Response.json({ status: "Already Populated." });
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
