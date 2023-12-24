"use client";

import { CoursesForm } from "@/lib/types";
import { isoDateToMonthYear } from "@/lib/utils";
import { useState } from "react";
import { useMedia } from "react-use";

const CoursesFrom = ({ username, courses }: CoursesForm) => {
  const isWide = useMedia("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  return (
    <section>
      <ul>
        {courses.map((list) => (
          <li key={list.id}>
            <h1 className="text-2xl">{list.institutionName}</h1>
            <p>{list.courseName}</p>
            <p>
              {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
              {isoDateToMonthYear(list.finishDate.toISOString())}
            </p>
          </li>
        ))}
      </ul>

      <div>{isWide ? "hello" : "world"}</div>
    </section>
  );
};

export default CoursesFrom;
