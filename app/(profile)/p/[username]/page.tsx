import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Main, WorkStatusBadge } from "@/components/web-uis";
import { singleUser } from "@/lib/data";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AppliedJobTabContent from "@/components/profile-tabs/applied-job";
import BlogsTabContent from "@/components/profile-tabs/blogs";
import JobTabContent from "@/components/profile-tabs/job";
import ProfileTabContent from "@/components/profile-tabs/profile";
import ProjectsTabContent from "@/components/profile-tabs/projects";
import {
  Briefcase,
  FlaskConical,
  ListChecks,
  ScrollText,
  User2,
} from "lucide-react";

const ProfilePage = async ({
  params: { username },
  searchParams: { tabs },
}: {
  params: { username: string };
  searchParams: { tabs: string };
}) => {
  const user = await singleUser(username);

  const tabsList = [
    {
      title: "Profile",
      value: "profile",
      href: `/p/${user!.username}`,
      icon: <User2 />,
      content: <ProfileTabContent username={user!.username} />,
    },
    {
      title: "Blogs",
      value: "blogs",
      href: `/p/${user!.username}?tabs=blogs`,
      icon: <ScrollText />,
      content: <BlogsTabContent username={user!.username} />,
    },
    {
      title: "Projects",
      value: "projects",
      href: `/p/${user!.username}?tabs=projects`,
      icon: <FlaskConical />,
      content: <ProjectsTabContent username={user!.username} />,
    },
    {
      title: "Jobs",
      value: "jobs",
      href: `/p/${user!.username}?tabs=jobs`,
      icon: <Briefcase />,
      content: <JobTabContent username={user!.username} />,
    },
    {
      title: "Applied Jobs",
      value: "applied-jobs",
      href: `/p/${user!.username}?tabs=applied-jobs`,
      icon: <ListChecks />,
      content: <AppliedJobTabContent username={user!.username} />,
    },
  ];
  const tabsParam = tabs ? tabs : tabsList[0].value;

  return (
    <Main className="max-w-3xl mx-auto space-y-3">
      <section className="flex gap-4 items-center">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={user!.profilePicture || "/images/user-profile.png"}
            alt={`Profile Picture of ${user!.name}`}
            width={512}
            height={512}
            className="w-40 rounded-full"
          />

          <WorkStatusBadge>{user!.workStatus || "AVAILABLE"}</WorkStatusBadge>
        </div>

        <div className="space-y-2">
          <h1
            className={cn(dmSerifDisplay.className, "text-4xl font-semibold")}
          >
            {user!.name}
          </h1>

          <p>{user!.jobRole}</p>

          <div>
            <Button variant={"outline"} asChild>
              <Link href={`/p/${user!.username}/edit-profile`}>
                Edit Profile
              </Link>
            </Button>
            {/* <Button>Follow</Button> */}
          </div>
        </div>
      </section>

      <Tabs defaultValue={tabsList[0].value} value={tabsParam}>
        <TabsList
          className={cn(
            "grid w-full",
            tabsList.length === 3 && "grid-cols-3",
            tabsList.length === 4 && "grid-cols-4",
            tabsList.length === 5 && "grid-cols-5",
            tabsList.length === 6 && "grid-cols-6",
            tabsList.length === 7 && "grid-cols-7",
            tabsList.length === 8 && "grid-cols-8",
            tabsList.length === 9 && "grid-cols-9",
            tabsList.length === 10 && "grid-cols-10",
            tabsList.length === 11 && "grid-cols-11",
            tabsList.length === 12 && "grid-cols-12"
          )}
        >
          {tabsList.map((tab) => (
            <Link key={tab.value} href={tab.href} className="w-full block">
              <TabsTrigger value={tab.value} className="w-full">
                {tab.title}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>

        {tabsList.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="space-y-2">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </Main>
  );
};

export default ProfilePage;
