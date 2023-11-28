import { arr20, fields } from "@/lib/placeholder-data";
import { ProfileSection, ProfileSectionTitle } from "../web-uis";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const AppliedJobTabContent = ({
  username,
}: {
  username: string | undefined;
}) => {
  return (
    <ProfileSection>
      <ProfileSectionTitle>Applied Jobs</ProfileSectionTitle>

      <section className="space-y-4">
        {arr20.map((list) => (
          <AppliedJobsCard key={list} />
        ))}
      </section>
    </ProfileSection>
  );
};

const AppliedJobsCard = () => {
  return (
    <article className="p-4 border border-slate-300 rounded space-y-2">
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

export default AppliedJobTabContent;
