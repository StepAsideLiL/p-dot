import { Button } from "@/components/ui/button";
import ResponsiveDialogBox from "@/components/uis/responsive-dialog-box";
import { singleUser } from "@/lib/data";
import { Edit } from "lucide-react";
import React from "react";
import ExperienceDeleteBtn from "./experience-del-btn";
import { isoDateToMonthYear } from "@/lib/utils";
import ExperienceForm from "@/components/forms/experience";

const ExperienceInfo = async ({ username }: { username: string }) => {
  const user = await singleUser(username);

  return (
    <section className="space-y-3">
      <section>
        <ul className="space-y-1 divide-y-2 px-10">
          {user?.profile?.experiences.map((list) => (
            <li key={list.id} className="py-1">
              <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-semibold">{list.companyName}</h1>

                <ResponsiveDialogBox
                  triggerBtn={
                    <Button variant={"outline"} size={"icon"}>
                      <Edit className="w-6 h-6" />
                    </Button>
                  }
                  dialogTitle="Update New Education Information"
                  dialogContent={
                    <ExperienceForm
                      username={username}
                      profileId={user!.profile!.id}
                      experienceId={list.id}
                      companyName={list.companyName}
                      jobPosition={list.jobPosition}
                      description={list.description}
                      startDate={list.startDate}
                      finishDate={list.finishDate}
                    />
                  }
                  closeBtn={<Button>Close</Button>}
                />

                <ExperienceDeleteBtn
                  username={username}
                  educationId={list.id}
                />
              </div>

              {list.jobPosition && (
                <p className="font-semibold">{list.jobPosition}</p>
              )}
              {list.description && <p>{list.description}</p>}
              {list.startDate && list.finishDate && (
                <p>
                  {isoDateToMonthYear(list.startDate)} -{" "}
                  {isoDateToMonthYear(list.finishDate)}
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
            <ExperienceForm username={username} profileId={user!.profile!.id} />
          }
          closeBtn={<Button>Close</Button>}
        />
      </section>
    </section>
  );
};

export default ExperienceInfo;
