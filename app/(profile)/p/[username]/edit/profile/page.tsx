import ProfileForm from "@/components/forms/profile";
import { EditAndAddPageTitle, Main } from "@/components/web-uis";
import { singleUser } from "@/lib/data";

const EditProfilePage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await singleUser(username);

  return (
    <Main className="max-w-5xl mx-auto container space-y-4">
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
