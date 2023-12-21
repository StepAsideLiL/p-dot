"use client";

import { SkillsForm } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import { addSkill } from "@/lib/actions";

const SkillsForm = ({ username, userSkills, availableSkills }: SkillsForm) => {
  const handleClick = (skillId: string) => {
    addSkill(username, skillId);
  };

  return (
    <div>
      <section className="space-y-2">
        <h3 className="text-xl font-medium">Your Skills</h3>

        <ul className="flex flex-wrap gap-2 justify-start items-center">
          {userSkills.map((skill) => (
            <li key={skill.id} className="p-2 rounded bg-slate-200">
              {skill.title}
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-4" />

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Available Skills</h3>

        <ul className="flex flex-wrap gap-2 justify-start items-center">
          {availableSkills?.map((skill) => (
            <li
              key={skill.id}
              className="p-2 rounded bg-slate-200 cursor-pointer"
              onClick={() => handleClick(skill.id)}
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SkillsForm;
