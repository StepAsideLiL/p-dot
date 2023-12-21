import type { Metadata } from "next";
import "./globals.css";
import "./main.css";
import { Children } from "@/lib/types";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "P dot",
  description: "Find Jobs",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        {children}

        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
