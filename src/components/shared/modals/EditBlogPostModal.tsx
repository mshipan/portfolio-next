"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

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
import { Edit, Loader2 } from "lucide-react";
import { useUpdateBlogMutation } from "@/redux/features/blog/blog.api";
import { toast } from "sonner";

export type BlogRow = {
  id?: string;
  cover: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  status: "published" | "draft";
  date: string;
};

type BlogFormValues = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  coverImage: File | null;
};

type Props = {
  post: BlogRow;
};

const EditBlogPostModal = ({ post }: Props) => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(post.cover || null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [editBlog, { isLoading }] = useUpdateBlogMutation();

  const [loadingPublish, setLoadingPublish] = useState(false);
  const [loadingDraft, setLoadingDraft] = useState(false);

  const form = useForm<BlogFormValues>({
    defaultValues: {
      title: post.title,
      slug: post.slug,
      category: post.category,
      summary: post.summary,
      content: post.content,
      coverImage: null,
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
      : post.slug;
    form.setValue("slug", slug);
  }, [watchedTitle, form, post.slug]);

  useEffect(() => {
    setPreview(post.cover || null);
  }, [post.cover]);

  const handleSubmitWithStatus = async (publish: boolean) => {
    const values = form.getValues();
    const formData = new FormData();

    const blogData = {
      title: values.title,
      slug: values.slug,
      category: values.category,
      summary: values.summary,
      content: values.content,
      published: publish,
    };

    formData.append("data", JSON.stringify(blogData));
    if (values.coverImage) formData.append("file", values.coverImage);

    const toastId = toast.loading(
      publish ? "Publishing blog..." : "Updating draft...",
    );

    try {
      publish ? setLoadingPublish(true) : setLoadingDraft(true);

      await editBlog({ slug: post.slug!, formData }).unwrap();

      toast.success(
        publish
          ? "Blog updated & published successfully!"
          : "Blog saved as draft successfully!",
        { id: toastId },
      );

      form.reset({
        title: values.title,
        slug: values.slug,
        category: values.category,
        summary: values.summary,
        content: values.content,
        coverImage: null,
      });

      setPreview(
        values.coverImage ? URL.createObjectURL(values.coverImage) : post.cover,
      );
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message || "Failed to update blog", { id: toastId });
    } finally {
      publish ? setLoadingPublish(false) : setLoadingDraft(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all duration-300 ease-linear cursor-pointer p-2.5 sm:p-3 rounded-xl hover:bg-[#47cfeb]"
        >
          <Edit className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Edit Blog Post
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-6">
            {/* Cover Image + file input */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full md:w-36 h-24 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={preview || "/images/user.png"}
                  alt="cover"
                  fill
                  className="object-fill w-full h-full opacity-80"
                />
              </div>

              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Cover Image</FormLabel>
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
                          } else {
                            setPreview(post.cover || null);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Title + Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Post title"
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
                        placeholder="post-url-slug"
                        className="border-gray-300 dark:border-gray-800 pointer-events-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. React, TypeScript"
                      className="border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Summary / Excerpt */}
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Brief description of the post"
                      className="min-h-24 border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Write your blog content here..."
                      className="min-h-40 border-gray-300 dark:border-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Actions */}
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

export default EditBlogPostModal;
