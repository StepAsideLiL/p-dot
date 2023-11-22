import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Children } from "@/lib/types";
import Navbar from "@/components/templates/nav-bar";
import MainFooter from "@/components/templates/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P dot",
  description: "Find Jobs",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <MainFooter />
      </body>
    </html>
  );
};

export default RootLayout;
