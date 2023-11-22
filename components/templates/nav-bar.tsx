import React from "react";
import { LogoLink } from "../custom-ui";
import NavLinks from "./nav-links";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-3 container px-0 flex gap-1 items-center">
      <LogoLink />

      <nav className="flex-1">
        <NavLinks />
      </nav>

      <div className="flex gap-1">
        <Button variant={"secondary"} asChild>
          <Link href={"/auth/signin"}>Sign In</Link>
        </Button>

        <Button asChild>
          <Link href={"/auth/signup"}>Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
