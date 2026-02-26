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
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  experience: IExperience;
}

const EditExperienceModal = ({ experience }: Props) => {
  const [open, setOpen] = useState(false);

  const [updateExperience, { isLoading }] = useUpdateExperienceMutation();
  const form = useForm<IExperience>({
    defaultValues: {
      jobTitle: "",
      company: "",
      startYear: "",
      endYear: "",
      description: "",
    },
  });

  useEffect(() => {
    if (experience) {
      form.reset({
        jobTitle: experience.jobTitle,
        company: experience.company,
        startYear: experience.startYear,
        endYear: experience.endYear || "",
        description: experience.description || "",
      });
    }
  }, [experience, form]);

  const onSubmit = async (values: IExperience) => {
    const toastId = toast.loading("Updating experience...");
    try {
      await updateExperience({
        id: experience.id,
        data: values,
      }).unwrap();

      toast.success("Experience updated successfully", {
        id: toastId,
      });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed", {
        id: toastId,
      });
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
