"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useCreateExperienceMutation } from "@/redux/features/experience/experience.api";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
  jobTitle: string;
  company: string;
  startYear: string;
  endYear?: string;
  description?: string;
  achievements: {
    value: string;
  }[];
};

const AddExperienceModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      jobTitle: "",
      company: "",
      startYear: "",
      endYear: "",
      description: "",
      achievements: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "achievements",
  });

  const [createExperience, { isLoading }] = useCreateExperienceMutation();

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading("Creating experience...");

    const cleanedData = {
      ...data,
      achievements: data.achievements
        .filter((item) => item.value.trim() !== "")
        .map((item) => item.value),
    };

    try {
      await createExperience(cleanedData).unwrap();

      toast.success("Experience added successfully!", {
        id: toastId,
      });

      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to add experience. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
          <Plus size={16} />
          Add Experience
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-300 dark:border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold text-black dark:text-white">
            Add New Experience
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Job Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Position"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Company
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Company Name"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Start Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      End Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel className="text-black dark:text-white">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Job Description"
                        className="min-h-28 border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="lg:col-span-2 space-y-3">
                <FormLabel className="text-black dark:text-white font-medium">
                  Key Achievements
                </FormLabel>

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-2 w-full"
                  >
                    <FormField
                      control={form.control}
                      name={`achievements.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="flex-1 flex items-center">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="e.g. Improved performance by 40%"
                              className="border-gray-300 dark:border-gray-800 pr-10 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </FormControl>

                          <div className="flex gap-1 ml-2">
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => remove(index)}
                                className="p-1 rounded-md"
                              >
                                <Minus size={14} />
                              </Button>
                            )}

                            {index === fields.length - 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => append({ value: "" })}
                                className="p-1 rounded-md"
                              >
                                <Plus size={14} />
                              </Button>
                            )}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full btn-gradient cursor-pointer"
              >
                {isLoading ? "Adding..." : "Add Experience"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;
