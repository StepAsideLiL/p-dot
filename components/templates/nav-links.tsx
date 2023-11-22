"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Find Talent",
    href: "/talents",
  },
  {
    name: "Find Jobs",
    href: "/jobs",
  },
  {
    name: "Find Companies",
    href: "/companies",
  },
  {
    name: "User Posts",
    href: "/posts",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn("px-2 py-1 hover:underline", {
              underline: pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
