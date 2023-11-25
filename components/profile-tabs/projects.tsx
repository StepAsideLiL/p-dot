import { arr20 } from "@/lib/placeholder-data";
import { ProfileSection, ProfileSectionTitle } from "../web-uis";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const ProjectsTabContent = () => {
  return (
    <ProfileSection>
      <div className="flex justify-between items-center">
        <ProfileSectionTitle>Projects</ProfileSectionTitle>

        <Button variant={"outline"} asChild>
          <Link href={"/p/hello/new-project"} className="flex">
            <Plus size={16} /> <span>New Project</span>
          </Link>
        </Button>
      </div>

      <section className="space-y-4 divide-y-2">
        {arr20.map((list) => (
          <ProjectCard key={list} />
        ))}
      </section>
    </ProfileSection>
  );
};

const ProjectCard = () => {
  return (
    <article className="p-4 border border-slate-300 rounded space-y-2">
      <header>
        <h1
          className={cn(dmSerifDisplay.className, "text-4xl py-2")}
        >{`Some Really Big Title For A Project`}</h1>
      </header>

      <section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          ipsam omnis ullam eum magnam non voluptate voluptatem est perferendis
          iure amet tenetur molestiae dignissimos, odio nesciunt sunt deserunt
          aut incidunt consectetur placeat voluptates suscipit. Recusandae,
          excepturi obcaecati debitis incidunt nostrum ex magnam aut nemo
          quaerat, sit laboriosam, soluta possimus ipsa.
        </p>
      </section>
    </article>
  );
};

export default ProjectsTabContent;
