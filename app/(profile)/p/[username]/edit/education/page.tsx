import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import EducationInfo from "./_parts/education-info";
import { Suspense } from "react";
import { EducationInfoSkeleton } from "@/components/skeletons";

const EducationEditPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>
        Add and Edit Your Education information
      </EditAndAddPageTitle>

      <Suspense fallback={<EducationInfoSkeleton />}>
        <EducationInfo username={username} />
      </Suspense>
    </Main>
  );
};

export default EducationEditPage;
