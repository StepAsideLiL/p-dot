import { Button } from "@/components/ui/button";
import ResponsiveDialogBox from "@/components/uis/responsive-dialog-box";
import { singleUser } from "@/lib/data";
import { Edit } from "lucide-react";
import CourseDeleteBtn from "./course-del-btn";
import { isoDateToMonthYear } from "@/lib/utils";
import CourseForm from "@/components/forms/course";
import Link from "next/link";

const CoursesInfo = async ({ username }: { username: string }) => {
  const user = await singleUser(username);

  return (
    <section className="space-y-3">
      <section>
        <ul className="space-y-1 divide-y-2 px-10">
          {user?.profile?.courses.map((list) => (
            <li key={list.id} className="py-1">
              <div className="flex gap-2 items-center">
                <h1 className="text-2xl">{list.institutionName}</h1>

                <ResponsiveDialogBox
                  triggerBtn={
                    <Button variant={"outline"} size={"icon"}>
                      <Edit className="w-6 h-6" />
                    </Button>
                  }
                  dialogTitle="Update Course Information"
                  dialogContent={
                    <CourseForm
                      username={username}
                      profileId={user!.profile!.id}
                      courseId={list.id}
                      institutionName={list.institutionName}
                      courseName={list.courseName}
                      certificateLink={list.certificateLink}
                      startDate={list.startDate}
                      finishDate={list.finishDate}
                    />
                  }
                  closeBtn={<Button>Close</Button>}
                />

                <CourseDeleteBtn username={username} courseId={list.id} />
              </div>

              {list.courseName && <p>{list.courseName}</p>}
              {list.certificateLink !== "" && (
                <Link href={list.certificateLink || ""} className="underline">
                  {list.certificateLink}
                </Link>
              )}
              {list.startDate && list.finishDate && (
                <p>
                  {isoDateToMonthYear(list.startDate.toISOString())} -{" "}
                  {isoDateToMonthYear(list.finishDate.toISOString())}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-10">
        <ResponsiveDialogBox
          triggerBtn={<Button>Add</Button>}
          dialogTitle="Add New Course Information"
          dialogContent={
            <CourseForm username={username} profileId={user!.profile!.id} />
          }
          closeBtn={<Button>Close</Button>}
        />
      </section>
    </section>
  );
};

export default CoursesInfo;
