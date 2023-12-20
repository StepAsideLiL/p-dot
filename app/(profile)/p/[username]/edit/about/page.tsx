import { Main } from "@/components/web-uis";
import { singleUser } from "@/lib/data";
import React from "react";

const AboutEditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return <Main>AboutEditPage</Main>;
};

export default AboutEditPage;
