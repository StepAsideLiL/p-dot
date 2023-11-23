import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/nav-bar";
import { Children } from "@/lib/types";
import React from "react";

const WebLayout = ({ children }: Children) => {
  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default WebLayout;
