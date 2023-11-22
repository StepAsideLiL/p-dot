import { ChildrenClassname, Classname } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="text-2xl border-4 border-black p-2 inline-block font-black rounded-md">
      P.
    </div>
  );
};

export const LogoLink = ({ className }: Classname) => {
  return (
    <Link href={"/"} className={cn(className)}>
      <Logo />
    </Link>
  );
};

export const Main = ({ children, className = "" }: ChildrenClassname) => {
  return <main className={cn("max-h-screen", className)}>{children}</main>;
};
