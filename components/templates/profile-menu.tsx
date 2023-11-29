import { IsUserSignedIn } from "@/components/web-uis";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProfileSideMenu from "./profile-sidemenu";
import { useSession } from "@/lib/data";

const ProfileMenu = async () => {
  const user = await useSession();
  const isUserSignedIn = user ? true : false;

  return (
    <>
      <IsUserSignedIn
        isUserSignedIn={isUserSignedIn}
        signout={
          <>
            <Button variant={"secondary"} asChild>
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>

            <Button asChild>
              <Link href={"/auth/signup"}>Sign Up</Link>
            </Button>
          </>
        }
        signin={
          <ProfileSideMenu
            username={user?.username}
            name={user?.name}
            profilePicture={user?.profilePicture}
          />
        }
      />
    </>
  );
};

export default ProfileMenu;
