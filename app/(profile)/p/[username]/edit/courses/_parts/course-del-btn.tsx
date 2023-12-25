"use client";

import { Button } from "@/components/ui/button";
import { deleteCourse } from "@/lib/actions";
import { Trash } from "lucide-react";

const CourseDeleteBtn = ({
  username,
  courseId,
}: {
  username: string;
  courseId: string;
}) => {
  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={() => deleteCourse(username, courseId)}
    >
      <Trash className="w-6 h-6" />
    </Button>
  );
};

export default CourseDeleteBtn;
