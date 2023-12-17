import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const users = await prisma.profile.findMany({
      include: {
        education: true,
        courses: true,
      },
    });
    return Response.json(users);
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred.");
  }
}
