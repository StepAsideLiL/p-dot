import {
  IsUserSignedIn,
  ProfileSection,
  ProfileSectionTitle,
} from "@/components/web-uis";
import { singleUser, useSession } from "@/lib/data";
import { isoDateToMonthYear } from "@/lib/utils";
import { Edit } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProfileTabContent = async ({ username }: { username: string }) => {
  const user = await singleUser(username);
  const signedInUser = await useSession();
  const isUserSignedIn =
    signedInUser?.username === user?.username ? true : false;

  return (
    <>
      <ProfileSection>
        <div className="flex items-center justify-between">
          <ProfileSectionTitle>About</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} asChild>
                <Link href={`/p/${user?.username}/edit-profile#about`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: user!.profile!.about }} />
      </ProfileSection>

      <ProfileSection>
        <div className="flex items-center justify-between">
          <ProfileSectionTitle>Skills</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} asChild>
                <Link href={`/p/${user?.username}/edit-profile#skills`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

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
        <div className="flex items-center justify-between">
          <ProfileSectionTitle>Education</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} asChild>
                <Link href={`/p/${user?.username}/edit-profile#education`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

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
        <div className="flex items-center justify-between">
          <ProfileSectionTitle>Courses and Certificates</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} asChild>
                <Link
                  href={`/p/${user?.username}/edit-profile#courses-and-certificates`}
                >
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

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
