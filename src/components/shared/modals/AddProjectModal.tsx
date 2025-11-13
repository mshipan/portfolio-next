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
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ProjectFormValues = {
  title: string;
  description: string;
  techStack: string;
  featured: boolean;
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
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = (values: ProjectFormValues) => {
    const file = fileRef.current?.files?.[0];

    // handle submit here (values + file)
    console.log({ values, file, preview });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium">
          <Plus size={16} />
          New Project
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
        text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-6"
      >
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Create New Project
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Thumbnail Image */}
            <div className="space-y-2">
              <FormLabel className="text-sm font-medium">
                Thumbnail Image
              </FormLabel>

              <Input
                ref={fileRef}
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={onChange}
                className="
                  w-full rounded-md border-gray-700 bg-transparent text-white
                  file:text-white file:mr-4
                "
              />

              <p className="text-xs text-muted-foreground">
                Upload project thumbnail
              </p>
            </div>

            {/* Optional tiny preview under the file input */}
            {preview && (
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt="Thumbnail preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}

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
                      className="border-gray-800"
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
                      className="min-h-28 border-gray-800"
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
                      placeholder="React, Node.js, PostgreSQL (comma separated)"
                      className="border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Featured checkbox */}
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
              <Button type="submit" className="w-full sm:w-4/5 btn-gradient">
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
