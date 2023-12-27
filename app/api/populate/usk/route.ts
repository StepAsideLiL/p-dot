import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const allUser = await prisma.user.findMany({
      include: {
        hasSkills: true,
        skillsInfo: true,
      },
    });

    allUser.map(async (user, index) => {
      if (user.hasSkills.length === 0) {
        const skill = await prisma.skill.findMany();
        const selectedSkills: typeof skill = [];
        const randomNumberUser = Math.floor(Math.random() * 8 + 2);

        // Randomly select elements
        for (let i = 0; i < randomNumberUser; i++) {
          // Generate a random index
          const randomIndex = Math.floor(Math.random() * skill.length);

          // Remove the selected element from the original array and push it to the new array
          selectedSkills.push(skill.splice(randomIndex, 1)[0]);
        }

        selectedSkills.map(async (skill) => {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              hasSkills: {
                connect: {
                  id: skill.id,
                },
              },
              skillsInfo: {
                create: {
                  title: skill.title,
                  slug: skill.slug,
                },
              },
            },
          });
        });

        console.log(index, " Successfully conneted Skill and User.");
      } else {
        console.log("Skill and User already connected.");
      }
    });

    const output = await prisma.user.findMany({
      include: {
        hasSkills: true,
        skillsInfo: true,
      },
    });
    return Response.json(output);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
