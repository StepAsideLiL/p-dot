import { arr20 } from "@/lib/placeholder-data";
import { ProfileSection, ProfileSectionTitle } from "../web-uis";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { dmSerifDisplay } from "@/lib/fonts";

const BlogsTabContent = () => {
  return (
    <ProfileSection>
      <ProfileSectionTitle>Blogs</ProfileSectionTitle>

      <section className="space-y-4">
        {arr20.map((list) => (
          <BlogCard key={list} />
        ))}
      </section>
    </ProfileSection>
  );
};

const BlogCard = () => {
  return (
    <article className="p-4 border border-slate-300 rounded space-y-2">
      <header>
        <h1
          className={cn(dmSerifDisplay.className, "text-4xl py-2")}
        >{`Some Really Big Title`}</h1>

        <div className="flex gap-2 items-center">
          <Image
            src={"/images/user-profile.png"}
            alt={`User Profile Picture`}
            width={512}
            height={512}
            className="w-14 rounded-full"
          />

          <div>
            <h1 className="text-xl">{`Rifat Khan`}</h1>
            <p className="text-sm">
              {`rifatkhan`} &bull; {`6 hours ago`}
            </p>
          </div>
        </div>
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

export default BlogsTabContent;
