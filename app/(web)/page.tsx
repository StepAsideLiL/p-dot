import { Main } from "@/components/custom-ui";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <Main className="container mx-auto py-4 space-y-32">
      <section className="flex items-center">
        <div className="w-full space-y-3">
          <h1 className="text-3xl font-semibold">
            Find The Best Talents For Your Company
          </h1>

          <p>We house the best people with the best talent.</p>

          <div className="flex gap-1">
            <Button>Find Talents</Button>

            <Button variant={"outline"}>Post Your Job</Button>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={"/images/banner-virtual-interview.jpg"}
            alt="Banner Image - A person attending an virtual interview"
            width={1920}
            height={1281}
          />
        </div>
      </section>

      <section className="flex justify-center flex-col text-center space-y-3">
        <h1 className="text-2xl font-semibold">Have Talent?</h1>

        <div>
          <Button asChild>
            <Link href={"/auth/signup"}>Create A Profile</Link>
          </Button>
        </div>
      </section>
    </Main>
  );
};

export default HomePage;
