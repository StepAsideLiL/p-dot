"use client";

import { EducationForm } from "@/lib/types";
import { isoDateToMonthYear } from "@/lib/utils";
import { useState } from "react";
import { useMedia } from "react-use";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

const EducationForm = ({ username, education }: EducationForm) => {
  const isDesktop = useMedia("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  return (
    <section>
      <ul>
        {education.map((list) => (
          <li key={list.id}>
            <h1 className="text-2xl">{list.institutionName}</h1>
            <p>
              {list.degree} in {list.fieldOfStudy}
            </p>
            <p>
              GPA {list.gpa} out of {list.maxGpa}
            </p>
            <p>
              {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
              {isoDateToMonthYear(list.finishDate.toISOString())}
            </p>
          </li>
        ))}
      </ul>

      <div>
        {isDesktop ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when
                  you&rsquo;re done.
                </DialogDescription>
              </DialogHeader>

              <div>hello</div>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when
                  you&rsquo;re done.
                </DrawerDescription>
              </DrawerHeader>

              <div>hello</div>

              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </section>
  );
};

export default EducationForm;
