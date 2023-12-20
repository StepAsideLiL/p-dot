import { useSession } from "@/lib/data";
import { redirect } from "next/navigation";
import React from "react";

const EditAndAddLayout = async ({
  children,
  params: { username },
}: {
  children: React.ReactNode;
  params: { username: string };
}) => {
  const user = await useSession();
  if (user!.username !== username) {
    redirect("/");
  }

  return <div>{children}</div>;
};

export default EditAndAddLayout;
