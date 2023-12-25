"use client";

import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";

const ResponsiveDialogBox = ({
  triggerBtn,
  dialogTitle,
  dialogDescription,
  dialogContent,
  closeBtn,
}: {
  triggerBtn: React.ReactNode;
  dialogTitle?: string;
  dialogDescription?: string;
  dialogContent: React.ReactNode;
  closeBtn: React.ReactNode;
}) => {
  const isDesktop = useMedia("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{triggerBtn}</DialogTrigger>

        <DialogContent>
          {(dialogTitle || dialogDescription) && (
            <DialogHeader>
              {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
              {dialogDescription && (
                <DialogDescription>{dialogDescription}</DialogDescription>
              )}
            </DialogHeader>
          )}

          {dialogContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerBtn}</DrawerTrigger>

      <DrawerContent>
        {(dialogTitle || dialogDescription) && (
          <DrawerHeader className="text-left">
            {dialogTitle && <DrawerTitle>{dialogTitle}</DrawerTitle>}
            {dialogDescription && (
              <DrawerDescription>{dialogDescription}</DrawerDescription>
            )}
          </DrawerHeader>
        )}

        <div className="px-4">{dialogContent}</div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>{closeBtn}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialogBox;
