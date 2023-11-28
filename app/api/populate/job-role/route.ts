import prisma from "@/lib/prismadb";
import { getRandomElement } from "@/lib/utils";

const jobRoles = [
  "Software Developer",
  "React Developer",
  "Nextjs Developer",
  "Web Developer",
  "Data Scientist",
  "Network Engineer",
  "Database Administrator",
  "System Administrator",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Cybersecurity Analyst",
  "UI/UX Designer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Mobile App Developer",
  "Cloud Solutions Architect",
  "Software Engineer",
  "Systems Analyst",
  "Quality Assurance Engineer",
  "IT Consultant",
  "Network Security Engineer",
];

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
            jobRole: getRandomElement(jobRoles),
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
