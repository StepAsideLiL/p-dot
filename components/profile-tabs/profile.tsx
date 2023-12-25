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
        <div className="flex items-center justify-between border-b">
          <ProfileSectionTitle>About Me</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} size={"icon"} asChild>
                <Link href={`/p/${user?.username}/edit/about`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: user!.profile!.about }}
          className="px-10"
        />
      </ProfileSection>

      <ProfileSection>
        <div className="flex items-center justify-between border-b">
          <ProfileSectionTitle>Skills</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} size={"icon"} asChild>
                <Link href={`/p/${user?.username}/edit/skills`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        <ul className="flex gap-2 flex-wrap px-10">
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
        <div className="flex items-center justify-between border-b">
          <ProfileSectionTitle>Education</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} size={"icon"} asChild>
                <Link href={`/p/${user?.username}/edit/education`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        <ul className="space-y-1 divide-y-2 px-10">
          {user?.profile?.education.map((list) => (
            <li key={list.id} className="py-2">
              <h1 className="text-xl">{list.institutionName}</h1>
              {list.degree && (
                <p>
                  {list.degree} {list.degree && " in "} {list.fieldOfStudy}
                </p>
              )}
              {list.gpa !== "" && (
                <p>
                  Grade {list.gpa} {list.maxGpa && " out of "} {list.maxGpa}
                </p>
              )}
              {list.startDate && list.finishDate && (
                <p>
                  {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
                  {isoDateToMonthYear(list.finishDate.toISOString())}
                </p>
              )}
            </li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection>
        <div className="flex items-center justify-between border-b">
          <ProfileSectionTitle>Courses and Certificates</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} size={"icon"} asChild>
                <Link href={`/p/${user?.username}/edit/courses`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        <ul className="space-y-1 divide-y-2 px-10">
          {user?.profile?.courses.map((list) => (
            <li key={list.id} className="py-2">
              <h1 className="text-xl">{list.institutionName}</h1>
              {list.courseName && <p>{list.courseName}</p>}
              {list.certificateLink !== "" && (
                <Link href={list.certificateLink || ""} className="underline">
                  {list.certificateLink}
                </Link>
              )}
              {list.startDate && list.finishDate && (
                <p>
                  {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
                  {isoDateToMonthYear(list.finishDate.toISOString())}
                </p>
              )}
            </li>
          ))}
        </ul>
      </ProfileSection>
    </>
  );
};

export default ProfileTabContent;
