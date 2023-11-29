import { Suspense } from "react";
import { LogoLink } from "../web-uis";
import NavLinks from "./nav-links";
import ProfileMenu from "./profile-menu";
import { SigninAndSignupSkeleton } from "../skeletons";

const Navbar = async () => {
  return (
    <header className="py-3 container px-0 flex gap-1 items-center">
      <LogoLink />

      <nav className="flex-1">
        <NavLinks />
      </nav>

      <div className="flex gap-1">
        <Suspense fallback={<SigninAndSignupSkeleton />}>
          <ProfileMenu />
        </Suspense>
      </div>
    </header>
  );
};

export default Navbar;
