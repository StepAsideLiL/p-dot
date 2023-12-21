"use client";

import { TipTapEditor } from "@/components/tiptap/about-editor";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { updateAbout } from "@/lib/actions";
import { AboutForm } from "@/lib/types";

const formSchema = z.object({
  about: z
    .string()
    .min(100, { message: "About has to be 100 character minimum" })
    .max(1000, { message: "About has to be 1000 character maximum" }),
});

const AboutForm = ({ username, about }: AboutForm) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      about: about,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      ...values,
      username: username,
    };
    console.log(formData);
    updateAbout(formData);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TipTapEditor about={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default AboutForm;
