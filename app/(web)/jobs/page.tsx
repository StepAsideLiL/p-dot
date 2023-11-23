import { Main, PageBanner } from "@/components/web-uis";
import { Button } from "@/components/ui/button";
import { dmSerifDisplay } from "@/lib/fonts";
import { arr20, fields } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const JobsPage = () => {
  return (
    <Main className="container">
      <PageBanner>Find Jobs</PageBanner>

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

      <section className="grid grid-cols-2 gap-2 max-w-5xl mx-auto pt-5">
        {arr20.map((job) => (
          <JobCard key={job} />
        ))}
      </section>
    </Main>
  );
};

const JobCard = () => {
  return (
    <article className="p-4 border border-slate-300 rounded max-w-2xl space-y-2">
      <h1 className={cn(dmSerifDisplay.className, "text-xl")}>
        React and React Native Developer
      </h1>

      <p className="text-sm">HelloDev &bull; {`6 hours ago`}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        dignissimos nemo distinctio sit numquam eveniet porro eaque fugiat,
        itaque sequi.
      </p>
      <ul className="flex gap-1.5 flex-wrap text-xs">
        {fields.map((field) => (
          <li key={field.slug} className="p-2 border border-1 rounded-3xl">
            {field.title}
          </li>
        ))}
      </ul>

      <Button asChild>
        <Link href={""}>See Details</Link>
      </Button>
    </article>
  );
};

export default JobsPage;
