import EducationForm from "@/components/forms/education";
import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { singleUser } from "@/lib/data";
import prisma from "@/lib/prismadb";

const EducationEditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>
        Add and Edit Your Education information
      </EditAndAddPageTitle>

      <EducationForm
        username={user!.username}
        education={user!.profile!.education}
      />
    </Main>
  );
};

export default EducationEditPage;
