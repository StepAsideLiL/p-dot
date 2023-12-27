import SkillsForm from "@/components/forms/skills";
import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { allSkills, singleUser } from "@/lib/data";

const SkillsEditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);
  const skills = await allSkills();
  const availableSkills = user?.hasSkills
    ?.filter((item1) => !skills.some((item2) => item1.id === item2.id))
    .concat(
      skills.filter(
        (item2) => !user?.hasSkills?.some((item1) => item2.id === item1.id)
      )
    );

  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>Add Your Skills</EditAndAddPageTitle>

      <SkillsForm
        username={user!.username}
        userSkills={user!.hasSkills}
        availableSkills={availableSkills}
      />
    </Main>
  );
};

export default SkillsEditPage;
