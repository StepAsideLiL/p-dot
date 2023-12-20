"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { updateProfile } from "@/lib/actions";
import { ProfileForm } from "@/lib/types";

type UploadedResult = {
  event?: string | undefined;
  info?: {
    public_id: string;
    secure_url: string;
  };
};

const profileFormSchema = z.object({
  name: z.string(),
  jobRole: z.string(),
  bio: z.string(),
  workStatus: z.string(),
});

const ProfileForm = ({
  username,
  name,
  jobRole,
  bio,
  workStatus,
  profilePicture,
  profilePictureId,
}: ProfileForm) => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: name,
      jobRole: jobRole,
      bio: bio,
      workStatus: workStatus,
    },
  });
  const [image, setImage] = useState(profilePicture);
  const [imageId, setImageId] = useState(profilePictureId);

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    const formData = {
      ...values,
      username: username,
      profilePicture: image,
      profilePictureId: imageId,
    };
    console.log(formData);
    updateProfile(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-start md:flex-row flex-col w-full gap-4 justify-between">
          <div className="w-2/6">
            <FormLabel>Profile picture</FormLabel>

            <CldUploadWidget
              // @ts-expect-error
              onUpload={(results: UploadedResult, widget) => {
                setImage(results!.info!.secure_url);
                setImageId(results!.info!.public_id);
                widget.close();
              }}
              uploadPreset="qaljd9iw"
            >
              {({ open }) => {
                return (
                  <div
                    onClick={() => open()}
                    className="relative lg:w-80 w-60 lg:h-80 h-60 cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`Profile Picture of ${name}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                );
              }}
            </CldUploadWidget>
          </div>

          <div className="w-4/6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Job Title</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Bio</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nice Day" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AVAILABLE">AVAILABLE</SelectItem>
                      <SelectItem value="BUSY">BUSY</SelectItem>
                      <SelectItem value="HIRER">HIRER</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
