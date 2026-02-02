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
import { Loader2, Plus, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useCreateProjectMutation } from "@/redux/features/project/project.api";
import { toast } from "sonner";

export type ProjectFormValues = {
  title: string;
  description: string;
  shortDescription: string;
  slug: string;
  techStack: string;
  featured: boolean;
  features: string[];
  repoUrl: string;
  liveUrl: string;
  thumbnail: File | null;
};

const AddProjectModal = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [featureInput, setFeatureInput] = useState("");
  const [submitType, setSubmitType] = useState<"publish" | "draft" | null>(
    null,
  );

  const form = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      description: "",
      shortDescription: "",
      slug: "",
      techStack: "",
      featured: false,
      features: [],
      repoUrl: "",
      liveUrl: "",
      thumbnail: null,
    },
  });

  const watchedTitle = form.watch("title");

  useEffect(() => {
    const slug = watchedTitle
      ? watchedTitle
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "")
      : "";

    form.setValue("slug", slug);
  }, [watchedTitle, form]);

  const addFeature = (
    currentFeatures: string[],
    onChange: (val: string[]) => void,
  ) => {
    if (featureInput.trim()) {
      onChange([...currentFeatures, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const removeFeature = (
    index: number,
    currentFeatures: string[],
    onChange: (val: string[]) => void,
  ) => {
    const updatedFeatures = currentFeatures.filter((_, i) => i !== index);
    onChange(updatedFeatures);
  };

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const handleOnSubmit = async (publish: boolean) => {
    setSubmitType(publish ? "publish" : "draft");
    const values = form.getValues();
    const formData = new FormData();

    const projectData = {
      title: values.title,
      description: values.description,
      shortDescription: values.shortDescription,
      techStack: values.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      features: values.features,
      featured: values.featured,
      repoUrl: values.repoUrl,
      liveUrl: values.liveUrl,
      published: publish,
    };

    formData.append("data", JSON.stringify(projectData));

    if (values.thumbnail) {
      formData.append("file", values.thumbnail);
    }

    const toastId = toast.loading(
      publish ? "Publishing project..." : "Saving project as draft...",
    );

    try {
      await createProject(formData).unwrap();

      toast.success(
        publish
          ? "Project published successfully!"
          : "Project saved as draft successfully!",
        { id: toastId },
      );

      form.reset();
      setPreview(null);
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to process project", {
        id: toastId,
      });
    } finally {
      setSubmitType(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <form className="space-y-6">
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

            {/* Project Title & Slug */}

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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                className="w-full sm:flex-1 btn-gradient cursor-pointer"
                disabled={isLoading}
                onClick={() => handleOnSubmit(true)}
              >
                {submitType === "publish" && isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Publishing...
                  </>
                ) : (
                  "Publish Project"
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full sm:flex-1 border-gray-700 cursor-pointer"
                disabled={isLoading}
                onClick={() => handleOnSubmit(false)}
              >
                {submitType === "draft" && isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Saving...
                  </>
                ) : (
                  "Save as Draft"
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

export default AddProjectModal;
