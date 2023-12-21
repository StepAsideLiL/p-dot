import AboutForm from "@/components/forms/about";
import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { singleUser } from "@/lib/data";
import React from "react";

const AboutEditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>Edit About Me</EditAndAddPageTitle>

      <AboutForm username={user!.username} about={user!.profile!.about} />
    </Main>
  );
};

export default AboutEditPage;
