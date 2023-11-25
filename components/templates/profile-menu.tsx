"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatar } from "../web-uis";
import Link from "next/link";
import { FlaskConical, ListChecks, ScrollText, User2 } from "lucide-react";
import { useState } from "react";

const menusList = [
  {
    title: "Profile",
    href: "/p/user",
    icon: <User2 />,
  },
  {
    title: "Blogs",
    href: "/p/user?tabs=blogs",
    icon: <ScrollText />,
  },
  {
    title: "Projects",
    href: "/p/user?tabs=projects",
    icon: <FlaskConical />,
  },
  {
    title: "Applied Jobs",
    href: "/p/user?tabs=applied-jobs",
    icon: <ListChecks />,
  },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar />

            <div className="text-sm">
              <h1 className="font-semibold">Rifat Khan</h1>
              <p className="text-foreground">rifatkhan</p>
            </div>
          </div>

          <SheetDescription>{`What are you about`}</SheetDescription>
        </SheetHeader>

        <nav>
          <ul className="space-y-1">
            {menusList.map((list) => (
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
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileMenu;
