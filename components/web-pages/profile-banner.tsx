import { Button } from "@/components/ui/button";
import { IsUserSignedIn, WorkStatusBadge } from "@/components/web-uis";
import { singleUser, useSession } from "@/lib/data";
import { dmSerifDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProfileBanner = async ({ username }: { username: string }) => {
  const user = await singleUser(username);
  const signedInUser = await useSession();
  const isUserSignedIn =
    signedInUser?.username === user?.username ? true : false;

  return (
    <section className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={user!.profilePicture || "/images/user-profile.png"}
          alt={`Profile Picture of ${user!.name}`}
          width={512}
          height={512}
          className="w-40 rounded-full"
        />

        <WorkStatusBadge>{user!.workStatus || "AVAILABLE"}</WorkStatusBadge>
      </div>

      <div className="space-y-2">
        <h1 className={cn(dmSerifDisplay.className, "text-4xl font-semibold")}>
          {user!.name}
        </h1>

        <p>{user!.jobRole}</p>

        <p className="text-muted-foreground">{user!.bio}</p>

        <div>
          <IsUserSignedIn
            isUserSignedIn={isUserSignedIn}
            signin={
              <Button variant={"outline"} asChild>
                <Link href={`/p/${user!.username}/edit-profile`}>
                  Edit Profile
                </Link>
              </Button>
            }
            signout={<Button>Follow</Button>}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
