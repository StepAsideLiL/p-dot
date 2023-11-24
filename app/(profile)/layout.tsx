import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/nav-bar";
import { Children } from "@/lib/types";
import React from "react";

const ProfileLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default ProfileLayout;
