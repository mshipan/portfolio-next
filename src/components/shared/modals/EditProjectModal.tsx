/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { Checkbox } from "@/components/ui/checkbox";

import { Edit, Star } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const EditProjectModal = ({ project }: { project: any }) => {
  const form = useForm({
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      techStack: project?.techStack?.join(", ") || "",
      featured: project?.featured || false,
      thumbnail: null as File | null,
    },
  });

  const thumbnailPreview = project?.thumbnail || "/images/user.png";

  return (
    <Dialog>
      {/* Edit Button */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all duration-300 ease-linear cursor-pointer hover:bg-[#47cfeb] hover:text-black p-2.5 sm:p-3 rounded-xl"
        >
          <Edit className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="text-black dark:text-white border-gray-300 dark:border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Edit Project
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-6">
            {/* Thumbnail */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full md:w-36 h-24 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={thumbnailPreview || "/images/user.png"}
                  fill
                  alt="thumbnail"
                  className="object-contain opacity-80"
                />
              </div>

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Thumbnail Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          field.onChange(e.target.files?.[0] || null)
                        }
                        className="border-gray-300 dark:border-gray-800 file:text-black dark:file:text-white file:mr-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Project name"
                      className="border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe the project"
                      className="min-h-28 border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tech Stack */}
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tech Stack</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="React, Node.js, PostgreSQL"
                      className="border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Featured Checkbox */}
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">
                    <Star size={16} /> Mark as Featured Project
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="w-full sm:w-4/5 btn-gradient cursor-pointer"
              >
                Update Project
              </Button>

              <DialogClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full sm:w-1/5 hover:bg-[#47cfeb]"
                >
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectModal;
