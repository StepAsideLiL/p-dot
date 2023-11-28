import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        skills: true,
      },
    });
    return Response.json(users);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
