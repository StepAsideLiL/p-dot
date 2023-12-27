"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { EducationFormData } from "@/lib/types";
import { addAndUpdateEducation } from "@/lib/actions";

const formSchema = z.object({
  institutionName: z
    .string()
    .min(1, { message: "Institution Name cannot be empty" }),
  degree: z.string().optional(),
  fieldOfStudy: z.string().optional(),
  gpa: z.string().optional(),
  maxGpa: z.string().optional(),
  startDate: z
    .date({
      required_error: "A date of birth is required.",
    })
    .optional(),
  finishDate: z
    .date({
      required_error: "A date of birth is required.",
    })
    .optional(),
});

const EducationForm = ({
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
}: EducationFormData) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: institutionName ? institutionName : "",
      degree: degree ? degree : "",
      fieldOfStudy: fieldOfStudy ? fieldOfStudy : "",
      gpa: gpa ? gpa : "",
      maxGpa: maxGpa ? maxGpa : "",
      startDate: startDate ? new Date(startDate) : undefined,
      finishDate: finishDate ? new Date(finishDate) : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: EducationFormData = {
      profileId: profileId,
      username: username,
      educationId: educationId,
      ...values,
      startDate: values.startDate?.toISOString(),
      finishDate: values.finishDate?.toISOString(),
    };
    addAndUpdateEducation(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="institutionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Name</FormLabel>

              <FormControl>
                <Input type="text" placeholder="XYZ School" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Degree</FormLabel>

                <FormControl>
                  <Input type="text" placeholder="Science" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fieldOfStudy"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Field of Study</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    placeholder="Computer Science"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="gpa"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Obtained GPA</FormLabel>

                <FormControl>
                  <Input type="text" placeholder="3.2" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxGpa"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Max GPA</FormLabel>

                <FormControl>
                  <Input type="text" placeholder="4" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Starting Date</FormLabel>

                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        captionLayout="dropdown-buttons"
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        fromYear={1960}
                        toYear={2030}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finishDate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Finishing Date</FormLabel>

                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        captionLayout="dropdown-buttons"
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        fromYear={1960}
                        toYear={2030}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">{educationId ? "Update" : "Add"}</Button>
      </form>
    </Form>
  );
};

export default EducationForm;
