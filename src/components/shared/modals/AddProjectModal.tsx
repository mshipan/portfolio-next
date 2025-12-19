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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Star } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

type ProjectFormValues = {
  title: string;
  description: string;
  techStack: string;
  featured: boolean;
  thumbnail: File | null;
};

const AddProjectModal = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      description: "",
      techStack: "",
      featured: false,
      thumbnail: null,
    },
  });

  const onSubmit = (values: ProjectFormValues) => {
    console.log({
      ...values,
      preview,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
          <Plus size={16} />
          New Project
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-300 dark:border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Create New Project
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Thumbnail Area — NEW Replacement */}
            <div className="flex flex-col sm:flex-row gap-4 md:items-center">
              <div className="relative w-full md:w-36 h-24 bg-gray-300 dark:bg-gray-800 rounded-lg">
                <Image
                  src={preview || "/images/user.png"}
                  alt="thumbnail"
                  fill
                  className="object-contain w-full h-full opacity-80"
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
                        ref={fileRef}
                        className="border-gray-300 dark:border-gray-800 file:text-black dark:file:text-white file:mr-2"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          field.onChange(file);
                          if (file) {
                            setPreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Title */}
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
                      placeholder="Project description"
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

            {/* Featured */}
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="featured"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <Label
                          htmlFor="featured"
                          className="text-sm font-medium cursor-pointer"
                        >
                          Mark as Featured Project
                        </Label>
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="w-full sm:w-4/5 btn-gradient cursor-pointer"
              >
                Create Project
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

export default AddProjectModal;
