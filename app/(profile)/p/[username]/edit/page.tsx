import { useSession } from "@/lib/data";
import { redirect } from "next/navigation";

const EditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await useSession();
  if (user && user.username === username) {
    redirect(`/p/${user?.username}/edit/profile`);
  } else {
    redirect("/");
  }
};

export default EditPage;
