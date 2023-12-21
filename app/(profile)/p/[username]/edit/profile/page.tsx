import ProfileForm from "@/components/forms/profile";
import { Main } from "@/components/uis/main";
import { EditAndAddPageTitle } from "@/components/web-uis";
import { singleUser } from "@/lib/data";

const EditProfilePage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return (
    <Main variant={"md"}>
      <EditAndAddPageTitle>Edit Your Profile</EditAndAddPageTitle>

      <ProfileForm
        username={user!.username}
        name={user!.name}
        jobRole={user!.jobRole}
        bio={user!.bio}
        workStatus={user!.workStatus}
        profilePicture={user!.profilePicture}
        profilePictureId={user!.profilePictureId}
      />
    </Main>
  );
};

export default EditProfilePage;
