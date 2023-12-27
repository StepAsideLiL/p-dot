import prisma from "@/lib/prismadb";
import { slugify } from "@/lib/utils";
import { skills } from "../_const/constent";

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

      console.log("Successfully created Skill table.");
    } else {
      console.log("Skill table already populated.");
    }

    const output = await prisma.skill.findMany();
    return Response.json(output);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
