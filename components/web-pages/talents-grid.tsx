import { WorkStatusBadge } from "@/components/web-uis";
import { Button } from "@/components/ui/button";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { allUsers } from "@/lib/data";

const TalentsGrid = async () => {
  const users = await allUsers();

  return (
    <section className="grid grid-cols-3 gap-2 max-w-5xl mx-auto pt-5">
      {users.map((user) => (
        <article
          key={user.id}
          className="p-2 border border-slate-300 rounded max-w-sm flex flex-col"
        >
          <div className="text-right">
            <WorkStatusBadge>{user.workStatus}</WorkStatusBadge>
          </div>

          <div className="flex items-center flex-col gap-2 flex-grow">
            <Image
              src={user.profilePicture}
              alt={`User Profile Picture`}
              width={512}
              height={512}
              className="w-28 rounded-full"
            />

            <h1 className={cn(dmSerifDisplay.className, "text-2xl")}>
              {user.name}
            </h1>

            <p className="py-1">{user.jobRole}</p>

            <ul className="flex flex-wrap gap-2 justify-center flex-grow items-center">
              {user.skills.slice(0, 5).map((skill) => (
                <li
                  key={skill.slug}
                  className="text-sm p-2 border border-1 rounded-2xl bg-zinc-200"
                >
                  {skill.title}
                </li>
              ))}
            </ul>

            <Button asChild className="my-2 mt-auto">
              <Link href={`p/${user.username}`}>View Profile</Link>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TalentsGrid;
