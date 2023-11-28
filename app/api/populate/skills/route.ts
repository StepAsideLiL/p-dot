import prisma from "@/lib/prismadb";
import { slugify } from "@/lib/utils";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Nextjs",
  "Nodejs",
  "MongoDB",
  "Mongoose",
  "Express",
  "MySQL",
  "Firebase Auth",
  "Vercel",
  "Netlify",
  "Zustand",
  "Redux",
  "React Query",
  "Git",
  "GitHib",
  "Figma",
  "Framer Motion",
  "Java",
  "Cpp",
  "C",
  "Python",
  "Machine Learning",
  "Android App Development",
  "Apple App Development",
  "GSAP",
  "Web Development",
  "SDLC",
  "Data Structures and Algorithms",
  "Object Oriented Programming",
  "UI/UX",
  "Communication",
];

export async function GET() {
  try {
    const skillCount = await prisma.skill.count();

    if (skillCount === 0) {
      for (let i = 0; i < skills.length; i++) {
        const title = skills[i];

        await prisma.skill.create({
          data: {
            title: title,
            slug: slugify(title),
          },
        });
      }
    } else {
      console.log("Already Populated.");
    }

    const createdSkills = await prisma.skill.findMany();
    return Response.json(createdSkills);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
