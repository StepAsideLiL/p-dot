import { IsUserSignedIn, LogoLink } from "../web-uis";
import NavLinks from "./nav-links";
import { Button } from "../ui/button";
import Link from "next/link";
import ProfileMenu from "./profile-menu";
import { userSession } from "@/lib/data";

const Navbar = async () => {
  const user = await userSession();

  return (
    <header className="py-3 container px-0 flex gap-1 items-center">
      <LogoLink />

      <nav className="flex-1">
        <NavLinks />
      </nav>

      <div className="flex gap-1">
        <IsUserSignedIn
          user={true}
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
            <ProfileMenu
              username={user!.username}
              name={user!.name}
              profilePicture={user!.profilePicture}
            />
          }
        />
      </div>
    </header>
  );
};

export default Navbar;
