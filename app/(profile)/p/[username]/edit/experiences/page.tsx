import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { Suspense } from "react";
import ExperienceInfo from "./_part/experince-info";
import { ExperienceInfoSkeleton } from "@/components/skeletons";

const ExperienceEditPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>
        Add and Update Your Experience information
      </EditAndAddPageTitle>

      <Suspense fallback={<ExperienceInfoSkeleton />}>
        <ExperienceInfo username={username} />
      </Suspense>
    </Main>
  );
};

export default ExperienceEditPage;
