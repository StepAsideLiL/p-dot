import { Main, PageBanner } from "@/components/web-uis";
import { fields } from "@/lib/placeholder-data";
import TalentsGrid from "@/components/web-pages/talents-grid";
import { Suspense } from "react";
import { TalentsGridSkeleton } from "@/components/skeletons";

const TalentsPage = async () => {
  return (
    <Main className="container">
      <PageBanner>Find Talents</PageBanner>

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

      <Suspense fallback={<TalentsGridSkeleton />}>
        <TalentsGrid />
      </Suspense>
    </Main>
  );
};

export default TalentsPage;
