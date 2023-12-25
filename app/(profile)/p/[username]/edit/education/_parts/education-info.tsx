import EducationForm from "@/components/forms/education";
import { Button } from "@/components/ui/button";
import ResponsiveDialogBox from "@/components/uis/responsive-dialog-box";
import { singleUser } from "@/lib/data";
import { isoDateToMonthYear } from "@/lib/utils";
import { Edit } from "lucide-react";
import DeleteBtn from "./delete-btn";

const EducationInfo = async ({ username }: { username: string }) => {
  const user = await singleUser(username);

  return (
    <section className="space-y-3">
      <section>
        <ul className="space-y-1 divide-y-2 px-10">
          {user?.profile?.education.map((list) => (
            <li key={list.id} className="py-1">
              <div className="flex gap-2 items-center">
                <h1 className="text-2xl">{list.institutionName}</h1>

                <ResponsiveDialogBox
                  triggerBtn={
                    <Button variant={"outline"} size={"icon"}>
                      <Edit className="w-6 h-6" />
                    </Button>
                  }
                  dialogTitle="Update New Education Information"
                  dialogContent={
                    <EducationForm
                      username={username}
                      profileId={user!.profile!.id}
                      educationId={list.id}
                      institutionName={list.institutionName}
                      degree={list.degree}
                      fieldOfStudy={list.fieldOfStudy}
                      gpa={list.gpa}
                      maxGpa={list.maxGpa}
                      startDate={list.startDate}
                      finishDate={list.finishDate}
                    />
                  }
                  closeBtn={<Button>Close</Button>}
                />

                <DeleteBtn username={username} educationId={list.id} />
              </div>

              {(list.degree || list.fieldOfStudy) && (
                <p>
                  {list.degree}
                  {list.degree && " in "}
                  {list.fieldOfStudy}
                </p>
              )}
              {list.gpa && list.gpa !== 0 && (
                <p>
                  GPA {list.gpa} {list.maxGpa && " out of "} {list.maxGpa}
                </p>
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
          triggerBtn={<Button>Add New</Button>}
          dialogTitle="Add New Education Information"
          dialogContent={
            <EducationForm username={username} profileId={user!.profile!.id} />
          }
          closeBtn={<Button>Close</Button>}
        />
      </section>
    </section>
  );
};

export default EducationInfo;
