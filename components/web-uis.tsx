import { dmSerifDisplay } from "@/lib/fonts";
import { ChildrenClassname, Classname } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
  return <main className={cn("flex-1 py-4", className)}>{children}</main>;
};

export const PageBanner = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <section className="p-10">
      <h1
        className={cn(
          dmSerifDisplay.className,
          "text-5xl font-semibold",
          className
        )}
      >
        {children}
      </h1>
    </section>
  );
};

export const IsUserSignedIn = ({
  user = false,
  signin,
  signout,
}: {
  user?: boolean;
  signin: React.ReactNode;
  signout: React.ReactNode;
}) => {
  if (user) {
    return signin;
  }

  return signout;
};

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage
        src={"/images/user-profile.png"}
        alt={`User Profile Picture`}
      />
      <AvatarFallback>{`rifatkhan`}</AvatarFallback>
    </Avatar>
  );
};

export const ProfileSection = ({
  children,
  className = "",
}: ChildrenClassname) => {
  return (
    <section className={cn("border p-3 rounded space-y-2", className)}>
      {children}
    </section>
  );
};

export const ProfileSectionTitle = ({
  children,
  className = "",
}: ChildrenClassname) => {
  return (
    <h1 className={cn("text-2xl font-semibold", className)}>{children}</h1>
  );
};

export const WorkStatusBadge = ({ children }: { children: string }) => {
  return (
    <Badge
      className={cn(
        children === "AVAILABLE" && "bg-green-500",
        children === "BUSY" && "bg-slate-500",
        children === "HIRER" && "bg-blue-500"
      )}
    >
      {children}
    </Badge>
  );
};
