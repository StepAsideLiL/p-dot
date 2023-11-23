import { Main, PageBanner } from "@/components/custom-ui";
import { dmSerifDisplay } from "@/lib/fonts";
import { arr20 } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PostsPage = () => {
  return (
    <Main className="container">
      <PageBanner>User Post</PageBanner>

      <section className="space-y-4 max-w-4xl mx-auto p-5 border rounded-sm divide-y-2">
        {arr20.map((list) => (
          <PostCard key={list} />
        ))}
      </section>
    </Main>
  );
};

const PostCard = () => {
  return (
    <article className="p-2 space-y-2">
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

export default PostsPage;
