import { ProfileSection, ProfileSectionTitle } from "@/components/web-uis";
import { fields } from "@/lib/placeholder-data";

const ProfileContent = () => {
  return (
    <>
      <ProfileSection>
        <ProfileSectionTitle>About</ProfileSectionTitle>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          possimus officia, distinctio facere dolorum explicabo repudiandae
          provident laboriosam omnis! Eum, doloremque cum impedit architecto ex
          qui ut voluptatum quam reprehenderit nemo sed ea sapiente voluptatibus
          non sequi facilis. Tempore, possimus.
        </p>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Skills</ProfileSectionTitle>

        <ul className="flex gap-2">
          {fields.map((field) => (
            <li
              key={field.slug}
              className="text-sm p-2 border border-1 rounded-3xl bg-zinc-200"
            >
              {field.title}
            </li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Education</ProfileSectionTitle>

        <ul className="space-y-1">
          <li>
            <h1 className="text-xl">JKKNIU</h1>
            <p>B.Sc in EEE</p>
            <p>Feb 2017 - May 2023</p>
          </li>
        </ul>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Courses and Certificates</ProfileSectionTitle>

        <ul className="space-y-1">
          <li>
            <h1 className="text-xl">Programming Hero</h1>
            <p>Complete Web Development With Jangkar Mahbub</p>
            <p>Jan 2023 - Aug 2023</p>
          </li>
        </ul>
      </ProfileSection>
    </>
  );
};

export default ProfileContent;
