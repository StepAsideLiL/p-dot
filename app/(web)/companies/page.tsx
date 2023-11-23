import { Main, PageBanner } from "@/components/web-uis";
import { Button } from "@/components/ui/button";
import { dmSerifDisplay } from "@/lib/fonts";
import { arr20, fields } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CompaniesPage = () => {
  return (
    <Main className="container">
      <PageBanner>Companies</PageBanner>

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
          <CompanyCard key={job} />
        ))}
      </section>
    </Main>
  );
};

const CompanyCard = () => {
  return (
    <article className="p-4 border border-slate-300 rounded max-w-2xl space-y-2">
      <Image
        src={`/images/company-logo.png`}
        alt={`Company Logo`}
        width={512}
        height={512}
        className="w-24 rounded-full"
      />

      <h1 className={cn(dmSerifDisplay, "text-xl")}>New time</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        eaque, repellat, quod enim nesciunt eos omnis nihil porro, nemo
        molestiae eum. Tempora repellendus cumque itaque sapiente dolore, earum
        praesentium sunt!
      </p>

      <Button asChild>
        <Link href={""}>See Details</Link>
      </Button>
    </article>
  );
};

export default CompaniesPage;
