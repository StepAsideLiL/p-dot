import { tabsList } from "@/components/menus";
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
            <Button variant={"outline"} asChild>
              <Link href={"/p/hello/edit-profile"}>Edit Profile</Link>
            </Button>
            <Button>Follow</Button>
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
