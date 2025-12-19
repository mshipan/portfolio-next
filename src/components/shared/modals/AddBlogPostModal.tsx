"use client";

import { useRef, useState } from "react";
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
import { Plus } from "lucide-react";

type BlogFormValues = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  coverImage: File | null;
};

const AddBlogPostModal = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<BlogFormValues>({
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      summary: "",
      content: "",
      coverImage: null,
    },
  });

  const handleSubmitWithStatus = (publish: boolean) =>
    form.handleSubmit((values) => {
      // TODO: call API route / server action to create blog post using Prisma
      console.log({
        ...values,
        coverPreview: preview,
        published: publish,
      });
    })();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
          <Plus size={16} />
          New Post
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-300 dark:border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Create New Blog Post
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
                  className="object-contain w-full h-full opacity-80"
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
                            setPreview(null);
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
                        placeholder="post-url-slug"
                        className="border-gray-300 dark:border-gray-800"
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
                onClick={() => handleSubmitWithStatus(true)}
              >
                Publish Post
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full sm:flex-1 border-gray-700 cursor-pointer"
                onClick={() => handleSubmitWithStatus(false)}
              >
                Save as Draft
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

export default AddBlogPostModal;
