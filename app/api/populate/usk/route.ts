import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const allSkills = await prisma.skill.findMany();

    allSkills.map(async (skill) => {
      const user = await prisma.user.findMany({
        include: {
          hasSkills: true,
        },
      });
      const selectedUsers: typeof user = [];
      const randomNumberUser = Math.floor(Math.random() * user.length + 1);

      // Randomly select elements
      for (let i = 0; i < randomNumberUser; i++) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * user.length);

        // Remove the selected element from the original array and push it to the new array
        selectedUsers.push(user.splice(randomIndex, 1)[0]);
      }

      selectedUsers.map(async (user) => {
        if (user.hasSkills.length === 0) {
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

          console.log("Successfully connected the User and Skill table");
        } else {
          console.log("User and Skill table are already connected");
        }
      });
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
