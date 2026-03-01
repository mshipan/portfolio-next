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
import { useUpdateExperienceMutation } from "@/redux/features/experience/experience.api";
import { IExperience } from "@/redux/rtkTypes/experience.type";
import { Edit, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  experience: IExperience;
}

type FormValues = {
  jobTitle: string;
  company: string;
  startYear: string;
  endYear?: string;
  description?: string;
  achievements: { value: string }[];
};

const EditExperienceModal = ({ experience }: Props) => {
  const [open, setOpen] = useState(false);

  const [updateExperience, { isLoading }] = useUpdateExperienceMutation();
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

  const { fields, append, remove, replace } = useFieldArray({
    control: form.control,
    name: "achievements",
  });

  useEffect(() => {
    if (experience) {
      const achievementsArray = experience.achievements ?? [];
      const initialAchievements =
        achievementsArray.length > 0
          ? achievementsArray.map((item) => ({ value: item }))
          : [{ value: "" }];

      form.reset({
        jobTitle: experience.jobTitle,
        company: experience.company,
        startYear: experience.startYear,
        endYear: experience.endYear || "",
        description: experience.description || "",
        achievements: initialAchievements,
      });

      replace(initialAchievements);
    }
  }, [experience, form, replace]);

  const onSubmit = async (values: FormValues) => {
    const toastId = toast.loading("Updating experience...");

    const cleanedData = {
      jobTitle: values.jobTitle,
      company: values.company,
      startYear: values.startYear,
      endYear: values.endYear,
      description: values.description,
      achievements: values.achievements
        .filter((item) => item.value.trim() !== "")
        .map((item) => item.value),
    };

    try {
      await updateExperience({ id: experience.id, data: cleanedData }).unwrap();
      toast.success("Experience updated successfully!", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed", { id: toastId });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all duration-300 ease-linear cursor-pointer hover:bg-[#47cfeb] hover:text-black p-2.5 sm:p-3 rounded-xl"
        >
          <Edit className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Edit Experience
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
                    <FormLabel>Job Title</FormLabel>
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
                    <FormLabel>Company</FormLabel>
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
                    <FormLabel>Start Date</FormLabel>
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
                    <FormLabel>End Date</FormLabel>
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
                    <FormLabel>Description</FormLabel>
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
                <FormLabel className="font-medium">Key Achievements</FormLabel>
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
                              className="border-gray-300 dark:border-gray-800 pr-10"
                            />
                          </FormControl>

                          <div className="flex gap-1 ml-2">
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => remove(index)}
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
                {isLoading ? "Updating..." : "Update Experience"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditExperienceModal;
