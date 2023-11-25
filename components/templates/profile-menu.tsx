"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatar } from "@/components/web-uis";
import Link from "next/link";
import { useState } from "react";
import { addContentsMenu, tabsList } from "@/components/menus";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

export default ProfileMenu;
