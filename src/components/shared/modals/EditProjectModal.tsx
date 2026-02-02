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

import { Edit, Loader2, Plus, Star, X } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ProjectFormValues } from "./AddProjectModal";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { useUpdateProjectMutation } from "@/redux/features/project/project.api";
import { toast } from "sonner";

const EditProjectModal = ({ project }: { project: any }) => {
  const [open, setOpen] = useState(false);
  const [featureInput, setFeatureInput] = useState("");
  const [loadingPublish, setLoadingPublish] = useState(false);
  const [loadingDraft, setLoadingDraft] = useState(false);

  const [updateProject] = useUpdateProjectMutation();
  const form = useForm<ProjectFormValues>({
    defaultValues: {
      title: project.title,
      slug: project.slug,
      description: project.description,
      shortDescription: project.shortDescription,
      techStack: project.techStack?.join(", ") || "",
      features: project.features || [],
      liveUrl: project.liveUrl || "",
      repoUrl: project.repoUrl || "",
      featured: project.featured || false,
      thumbnail: null,
    },
  });

  const watchedTitle = form.watch("title");

  if (watchedTitle && form.getValues("slug") === project.slug) {
    const slug = watchedTitle
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    form.setValue("slug", slug, { shouldDirty: true });
  }

  const thumbnailPreview = project.thumbnail || "/images/user.png";

  const addFeature = (current: string[], onChange: (val: string[]) => void) => {
    if (!featureInput.trim()) return;
    onChange([...current, featureInput.trim()]);
    setFeatureInput("");
  };

  const removeFeature = (
    index: number,
    current: string[],
    onChange: (val: string[]) => void,
  ) => {
    onChange(current.filter((_, i) => i !== index));
  };

  const handleSubmitWithStatus = async (publish: boolean) => {
    const values = form.getValues();
    const formData = new FormData();

    const projectData = {
      title: values.title,
      slug: values.slug,
      description: values.description,
      shortDescription: values.shortDescription,
      techStack: values.techStack
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      features: values.features || [],
      repoUrl: values.repoUrl,
      liveUrl: values.liveUrl,
      featured: values.featured,
      published: publish,
    };

    formData.append("data", JSON.stringify(projectData));
    if (values.thumbnail) formData.append("file", values.thumbnail);

    const toastId = toast.loading(
      publish ? "Updating & publishing project..." : "Updating draft...",
    );

    try {
      publish ? setLoadingPublish(true) : setLoadingDraft(true);

      await updateProject({
        slug: project.slug,
        formData,
      }).unwrap();

      toast.success(
        publish
          ? "Project updated & published successfully!"
          : "Project saved as draft successfully!",
        { id: toastId },
      );

      form.reset({
        title: values.title,
        slug: values.slug,
        description: values.description,
        shortDescription: values.shortDescription,
        techStack: values.techStack,
        features: values.features || [],
        liveUrl: values.liveUrl,
        repoUrl: values.repoUrl,
        featured: values.featured,
        thumbnail: null,
      });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message || "Failed to update project", {
        id: toastId,
      });
    } finally {
      publish ? setLoadingPublish(false) : setLoadingDraft(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

            {/* Title & Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        readOnly
                        placeholder="project-url-slug"
                        className="border-gray-300 dark:border-gray-800 pointer-events-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Short Description */}
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Project short description"
                      className="min-h-28 border-gray-300 dark:border-gray-800"
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

            {/* Featrues */}

            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem className="">
                  <div className="flex items-center justify-between">
                    <FormLabel>Features</FormLabel>
                  </div>

                  {/* Input Field with Inline Button */}
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        value={featureInput}
                        onChange={(e) => setFeatureInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addFeature(field.value || [], field.onChange);
                          }
                        }}
                        placeholder="Type new feature and press Enter"
                        className="pr-12 border-gray-300 dark:border-gray-800"
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          addFeature(field.value || [], field.onChange)
                        }
                        className="absolute right-1 h-8 w-8 p-0 bg-[#A381FF] hover:bg-[#A381FF] text-white rounded-md"
                      >
                        <Plus size={18} />
                      </Button>
                    </div>
                  </FormControl>

                  {/* Feature Tags/Grid Display Area */}
                  {field.value?.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 p-4 rounded-xl bg-black/10 border border-slate-800">
                      {field.value.map((feature: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-slate-100 dark:bg-input/30 border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg group transition-all hover:border-[#00D1FF]"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#29A3FE]" />
                            <span className="text-sm">{feature}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeFeature(index, field.value, field.onChange)
                            }
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Title & Slug */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="liveUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Url</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Project live url"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="repoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repo Url</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Project github repo url"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                className="w-full sm:flex-1 btn-gradient cursor-pointer"
                disabled={loadingPublish}
                onClick={() => handleSubmitWithStatus(true)}
              >
                {loadingPublish ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Publishing...
                  </>
                ) : (
                  "Update & Publish"
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full sm:flex-1 border-gray-700 cursor-pointer"
                disabled={loadingDraft}
                onClick={() => handleSubmitWithStatus(false)}
              >
                {loadingDraft ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Saving...
                  </>
                ) : (
                  "Update as Draft"
                )}
              </Button>

              <DialogClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full sm:w-auto hover:bg-[#47cfeb] cursor-pointer"
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
