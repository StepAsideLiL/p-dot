"use server";

import { AboutForm, EducationFormData, ProfileForm } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";

export const updateProfile = async (values: ProfileForm) => {
  const {
    username,
    name,
    jobRole,
    bio,
    workStatus,
    profilePicture,
    profilePictureId,
  } = values;

  try {
    await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        name: name,
        bio: bio,
        jobRole: jobRole,
        workStatus:
          workStatus === "AVAILABLE"
            ? "AVAILABLE"
            : workStatus === "BUSY"
            ? "BUSY"
            : "HIRER",
        profilePicture: profilePicture,
        profilePictureId: profilePictureId,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user profile.");
  }

  revalidatePath(`/p/${username}`);
  redirect(`/p/${username}`);
};

export const updateAbout = async (values: AboutForm) => {
  const { username, about } = values;

  try {
    await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        profile: {
          update: {
            about: about,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user about.");
  }

  revalidatePath(`/p/${username}`);
  redirect(`/p/${username}`);
};

export const addSkill = async (username: string, skillId: string) => {
  try {
    await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        skills: {
          connect: {
            id: skillId,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user about.");
  }

  revalidatePath(`/p/${username}/edit/skills`);
};

export const addAndUpdateEducation = async (values: EducationFormData) => {
  const {
    username,
    profileId,
    educationId,
    institutionName,
    degree,
    fieldOfStudy,
    gpa,
    maxGpa,
    startDate,
    finishDate,
  } = values;

  try {
    if (educationId) {
      await prisma.education.update({
        where: {
          id: educationId,
        },
        data: {
          institutionName: institutionName,
          degree: degree,
          fieldOfStudy: fieldOfStudy,
          gpa: gpa,
          maxGpa: maxGpa,
          startDate: startDate,
          finishDate: finishDate,
        },
      });
    } else {
      await prisma.education.create({
        data: {
          institutionName: institutionName,
          degree: degree,
          fieldOfStudy: fieldOfStudy,
          gpa: gpa,
          maxGpa: maxGpa,
          startDate: startDate,
          finishDate: finishDate,
          profile: {
            connect: {
              id: profileId,
            },
          },
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update or add user education information.");
  }

  revalidatePath(`/p/${username}/edit/education`);
};

export const deleteEducation = async (
  username: string,
  educationId: string
) => {
  try {
    await prisma.education.delete({
      where: {
        id: educationId,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user education information.");
  }

  revalidatePath(`/p/${username}/edit/education`);
};
