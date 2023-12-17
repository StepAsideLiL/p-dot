import { ProfileSection, ProfileSectionTitle } from "@/components/web-uis";
import { singleUser } from "@/lib/data";
import { isoDateToMonthYear } from "@/lib/utils";

const ProfileTabContent = async ({ username }: { username: string }) => {
  const user = await singleUser(username);

  return (
    <>
      <ProfileSection>
        <ProfileSectionTitle>About</ProfileSectionTitle>

        <div dangerouslySetInnerHTML={{ __html: user!.profile!.about }} />
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Skills</ProfileSectionTitle>

        <ul className="flex gap-2 flex-wrap">
          {user?.skills.map((skill) => (
            <li
              key={skill.slug}
              className="text-sm p-2 border border-1 rounded-3xl bg-zinc-200"
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Education</ProfileSectionTitle>

        <ul className="space-y-1">
          {user?.profile?.education.map((list) => (
            <li key={list.id}>
              <h1 className="text-xl">{list.institutionName}</h1>
              <p>
                {list.degree} in {list.fieldOfStudy}
              </p>
              <p>
                Grade {list.gpa} out of {list.maxGpa}
              </p>
              <p>
                {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
                {isoDateToMonthYear(list.finishDate.toISOString())}
              </p>
            </li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Courses and Certificates</ProfileSectionTitle>

        <ul className="space-y-1">
          {user?.profile?.courses.map((list) => (
            <li key={list.id}>
              <h1 className="text-xl">{list.institutionName}</h1>
              <p>{list.courseName}</p>
              <p>
                {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
                {isoDateToMonthYear(list.finishDate.toISOString())}
              </p>
            </li>
          ))}
        </ul>
      </ProfileSection>
    </>
  );
};

export default ProfileTabContent;
