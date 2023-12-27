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
      {/* About Me Section */}
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

      {/* Skills Section */}
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

        {user?.skillsInfo.length !== 0 ? (
          <ul className="flex gap-2 flex-wrap px-10">
            {user?.skillsInfo.map((skill) => (
              <li
                key={skill.slug}
                className="text-sm p-2 border border-1 rounded-3xl bg-zinc-200"
              >
                {skill.title}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-2 justify-center items-center">
            <h1 className="text-muted-foreground">So empty</h1>
          </div>
        )}
      </ProfileSection>

      {/* Experiences Section */}
      <ProfileSection>
        <div className="flex items-center justify-between border-b">
          <ProfileSectionTitle>Experiences</ProfileSectionTitle>

          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"ghost"} size={"icon"} asChild>
                <Link href={`/p/${user?.username}/edit/experiences`}>
                  <Edit />
                </Link>
              </Button>
            }
            signout={""}
          />
        </div>

        {user?.profile?.experiences.length !== 0 ? (
          <ul className="space-y-1 divide-y-2 px-10">
            {user?.profile?.experiences.map((list) => (
              <li key={list.id} className="py-2">
                <h1 className="text-xl font-medium">{list.companyName}</h1>
                {list.jobPosition && (
                  <p className="font-medium">{list.jobPosition}</p>
                )}
                {list.description && <p>{list.description}</p>}
                {list.startDate && list.finishDate && (
                  <p>
                    {isoDateToMonthYear(list.startDate)} -{" "}
                    {isoDateToMonthYear(list.finishDate)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-2 justify-center items-center">
            <h1 className="text-muted-foreground">So empty</h1>
          </div>
        )}
      </ProfileSection>

      {/* Education Section */}
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

        {user?.profile?.education.length !== 0 ? (
          <ul className="space-y-1 divide-y-2 px-10">
            {user?.profile?.education.map((list) => (
              <li key={list.id} className="py-2">
                <h1 className="text-xl font-medium">{list.institutionName}</h1>
                {list.degree && (
                  <p className="font-medium">
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
                    {isoDateToMonthYear(list.startDate)} -{" "}
                    {isoDateToMonthYear(list.finishDate)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-2 justify-center items-center">
            <h1 className="text-muted-foreground">So empty</h1>
          </div>
        )}
      </ProfileSection>

      {/* Courses and Certificates Section */}
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

        {user?.profile?.courses.length !== 0 ? (
          <ul className="space-y-1 divide-y-2 px-10">
            {user?.profile?.courses.map((list) => (
              <li key={list.id} className="py-2">
                <h1 className="text-xl font-medium">{list.institutionName}</h1>
                {list.courseName && (
                  <p className="font-medium">{list.courseName}</p>
                )}
                {list.certificateLink !== "" && (
                  <Link
                    href={list.certificateLink || ""}
                    className="underline"
                    target="_blank"
                  >
                    {list.certificateLink}
                  </Link>
                )}
                {list.startDate && list.finishDate && (
                  <p>
                    {isoDateToMonthYear(list.startDate)} -{" "}
                    {isoDateToMonthYear(list.finishDate)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-2 justify-center items-center">
            <h1 className="text-muted-foreground">So empty</h1>
          </div>
        )}
      </ProfileSection>
    </>
  );
};

export default ProfileTabContent;
