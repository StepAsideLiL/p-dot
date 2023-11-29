import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleUser } from "@/lib/data";
import { cn } from "@/lib/utils";
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

const TabsContainer = async ({
  username,
  tabs,
}: {
  username: string;
  tabs: string;
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
  );
};

export default TabsContainer;
