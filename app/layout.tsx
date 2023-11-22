import type { Metadata } from "next";
import "./globals.css";
import { Children } from "@/lib/types";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "P dot",
  description: "Find Jobs",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
