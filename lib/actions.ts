"use server";

import { AboutForm, ProfileForm } from "@/lib/types";
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

export const updateAbout = async (valuse: AboutForm) => {
  const { username, about } = valuse;

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
