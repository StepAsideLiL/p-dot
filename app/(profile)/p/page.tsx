import { useSession } from "@/lib/data";
import { redirect } from "next/navigation";

const PPage = async () => {
  const user = await useSession();
  if (user) {
    redirect(`/p/${user?.username}`);
  } else {
    redirect("/");
  }
};

export default PPage;
