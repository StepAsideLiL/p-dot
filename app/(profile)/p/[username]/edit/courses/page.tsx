import CoursesFrom from "@/components/forms/courses";
import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { singleUser } from "@/lib/data";

const CourseEditPage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>
        Add and Edit Your Course and Certificate information
      </EditAndAddPageTitle>

      {/* <CoursesFrom username={user!.username} courses={user!.profile!.courses} /> */}
    </Main>
  );
};

export default CourseEditPage;
