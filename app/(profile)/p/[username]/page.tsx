import AppliedJobContent from "@/components/profile-tabs/applied-job";
import BlogsContent from "@/components/profile-tabs/blogs";
import ProfileContent from "@/components/profile-tabs/profile";
import ProjectsContent from "@/components/profile-tabs/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Main } from "@/components/web-uis";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = ({
  params: { username },
  searchParams: { tabs },
}: {
  params: { username: string };
  searchParams: { tabs: string };
}) => {
  const tabsList = [
    {
      title: "Profile",
      value: "profile",
      href: `/p/hello?tabs=profile`,
      content: <ProfileContent />,
    },
    {
      title: "Blogs",
      value: "blogs",
      href: "/p/hello?tabs=blogs",
      content: <BlogsContent />,
    },
    {
      title: "Projects",
      value: "projects",
      href: "/p/hello?tabs=projects",
      content: <ProjectsContent />,
    },
    {
      title: "Applied Jobs",
      value: "applied-jobs",
      href: "/p/hello?tabs=applied-jobs",
      content: <AppliedJobContent />,
    },
  ];

  const tabsParam = tabs ? tabs : tabsList[0].value;

  return (
    <Main className="max-w-3xl mx-auto space-y-3">
      <section className="flex gap-2 items-center">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/user-profile.png"}
            alt={`User Profile Picture`}
            width={512}
            height={512}
            className="w-40 rounded-full"
          />

          <Badge>hunting</Badge>
        </div>

        <div>
          <h1
            className={cn(dmSerifDisplay.className, "text-4xl font-semibold")}
          >
            {`Rifat Khan`}
          </h1>

          <p>{`Fullstack developer`}</p>

          <div>
            <Button variant={"outline"}>Edit Profile</Button>
            <Button>Follow</Button>
          </div>
        </div>
      </section>

      <Tabs defaultValue={tabsList[0].value} value={tabsParam}>
        <TabsList className="grid w-full grid-cols-4">
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
