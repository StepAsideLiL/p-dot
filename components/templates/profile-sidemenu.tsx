"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Briefcase,
  CalendarPlus,
  FlaskConical,
  ListChecks,
  PackagePlus,
  PenLine,
  ScrollText,
  User2,
  UserCog2,
} from "lucide-react";
import { UserAvatar } from "@/components/web-uis";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ProfileSideMenu = ({
  username,
  name,
  profilePicture,
  bio,
}: {
  username: string | undefined;
  name: string | undefined;
  profilePicture: string | undefined;
  bio: string | undefined;
}) => {
  const [open, setOpen] = useState(false);
  const tabsList = [
    {
      title: "Profile",
      href: `/p/${username}`,
      icon: <User2 />,
    },
    {
      title: "Blogs",
      href: `/p/${username}?tabs=blogs`,
      icon: <ScrollText />,
    },
    {
      title: "Projects",
      href: `/p/${username}?tabs=projects`,
      icon: <FlaskConical />,
    },
    {
      title: "Jobs",
      href: `/p/${username}?tabs=jobs`,
      icon: <Briefcase />,
    },
    {
      title: "Applied Jobs",
      href: `/p/${username}?tabs=applied-jobs`,
      icon: <ListChecks />,
    },
  ];

  const addContentsMenu = [
    {
      title: "Edit Profile",
      href: `/p/${username}/edit-profile`,
      icon: <UserCog2 />,
    },
    {
      title: "New Blog",
      href: `/p/${username}/new-blog`,
      icon: <PenLine />,
    },
    {
      title: "New Project",
      href: `/p/${username}/new-project`,
      icon: <PackagePlus />,
    },
    {
      title: "New Job",
      href: `/p/${username}/new-job`,
      icon: <CalendarPlus />,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar user={{ name, profilePicture }} />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar user={{ name, profilePicture }} />

            <div className="text-sm">
              <h1 className="font-semibold">{name}</h1>
              <p className="text-foreground">{username}</p>
            </div>
          </div>

          <SheetDescription>{bio}</SheetDescription>
        </SheetHeader>

        <nav>
          <ul className="space-y-1">
            {tabsList.map((list) => (
              <li key={list.href}>
                <Link
                  href={list.href}
                  className="p-1.5 pl-2.5 hover:bg-slate-200 rounded w-full flex gap-2"
                  onClick={() => setOpen(false)}
                >
                  <span>{list.icon}</span> <span>{list.title}</span>
                </Link>
              </li>
            ))}

            <Separator />

            {addContentsMenu.map((list) => (
              <li key={list.href}>
                <Link
                  href={list.href}
                  className="p-1.5 pl-2.5 hover:bg-slate-200 rounded w-full flex gap-2"
                  onClick={() => setOpen(false)}
                >
                  <span>{list.icon}</span> <span>{list.title}</span>
                </Link>
              </li>
            ))}

            <Separator />

            <li>
              <Button
                className="p-1.5 pl-2.5 rounded w-full flex gap-2"
                onClick={() => setOpen(false)}
              >
                Sign Out
              </Button>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSideMenu;
