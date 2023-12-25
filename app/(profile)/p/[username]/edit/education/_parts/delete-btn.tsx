"use client";

import { Button } from "@/components/ui/button";
import { deleteEducation } from "@/lib/actions";
import { Trash } from "lucide-react";

const DeleteBtn = ({
  username,
  educationId,
}: {
  username: string;
  educationId: string;
}) => {
  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={() => deleteEducation(username, educationId)}
    >
      <Trash className="w-6 h-6" />
    </Button>
  );
};

export default DeleteBtn;
