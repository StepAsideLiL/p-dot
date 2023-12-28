"use client";

import { ExperienceFormData } from "@/lib/types";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  companyName: z
    .string()
    .min(1, { message: "Institution Name cannot be empty" }),
  jobPosition: z.string().optional(),
  description: z.string().optional(),
  startDate: z.date().optional(),
  finishDate: z.date().optional(),
});

const ExperienceForm = ({
  username,
  profileId,
  experienceId,
  companyName,
  jobPosition,
  description,
  startDate,
  finishDate,
}: ExperienceFormData) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: companyName ? companyName : "",
      jobPosition: jobPosition ? jobPosition : "",
      description: description ? description : "",
      startDate: startDate ? new Date(startDate) : undefined,
      finishDate: finishDate ? new Date(finishDate) : undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: ExperienceFormData = {
      username: username,
      profileId: profileId,
      experienceId: experienceId,
      ...values,
      startDate: values.startDate?.toISOString(),
      finishDate: values.finishDate?.toISOString(),
    };
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>

              <FormControl>
                <Input type="text" placeholder="XYZ School" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobPosition"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Job Position</FormLabel>

              <FormControl>
                <Input type="text" placeholder="Science" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="Job Description..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

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

        <Button type="submit">{experienceId ? "Update" : "Add"}</Button>
      </form>
    </Form>
  );
};

export default ExperienceForm;
