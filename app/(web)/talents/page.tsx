import { Main } from "@/components/custom-ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const fields = [
  {
    title: "Front-end",
    slug: "front-end",
  },
  {
    title: "Back-end",
    slug: "back-end",
  },
  {
    title: "Full-stack",
    slug: "full-stack",
  },
  {
    title: "Android",
    slug: "android",
  },
  {
    title: "Apple",
    slug: "apple",
  },
];

const profiles = Array.from({ length: 20 }, (_, index) => index + 1);

const TalentsPage = () => {
  return (
    <Main className="container">
      <section className="p-10">
        <h1 className={cn(dmSerifDisplay.className, "text-5xl font-semibold")}>
          Find Talents
        </h1>
      </section>

      <section className="flex justify-center">
        <ul className="flex gap-1.5">
          {fields.map((field) => (
            <li key={field.slug} className="p-2 border border-1 rounded-3xl">
              {field.title}
            </li>
          ))}
          <li className="p-2 border border-1 rounded-3xl">View all</li>
        </ul>
      </section>

      <section className="grid grid-cols-3 gap-2 max-w-5xl mx-auto pt-5">
        {profiles.map((profile) => (
          <ProfileCard key={profile} />
        ))}
      </section>
    </Main>
  );
};

const ProfileCard = () => {
  return (
    <article className="p-2 border border-slate-300 rounded max-w-sm">
      <div className="text-right">
        <Badge>Hunting</Badge>
      </div>

      <div className="flex items-center flex-col gap-1">
        <Image
          src={"/images/user-profile.png"}
          alt={`User Profile Picture`}
          width={512}
          height={512}
          className="w-28"
        />

        <h1 className={cn(dmSerifDisplay.className, "text-2xl")}>Rifat Khan</h1>

        <p className="py-1">React Developer</p>

        <ul className="flex flex-wrap gap-2 justify-center">
          {fields.map((field) => (
            <li
              key={field.slug}
              className="text-sm p-2 border border-1 rounded-2xl bg-zinc-200"
            >
              {field.title}
            </li>
          ))}
        </ul>

        <Button asChild className="my-2">
          <Link href={""}>View Profile</Link>
        </Button>
      </div>
    </article>
  );
};

export default TalentsPage;
