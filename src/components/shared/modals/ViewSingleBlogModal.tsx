"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Clock10, Eye } from "lucide-react";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/features/blog/blog.api";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Props = {
  slug: string;
};

const ViewSingleBlogModal = ({ slug }: Props) => {
  const [open, setOpen] = useState(false);

  const [editBlog, { isLoading }] = useUpdateBlogMutation();

  const { data: post } = useGetSingleBlogQuery(slug);

  const categories = post?.category?.split(",").map((cat) => cat.trim());

  const handlePublish = async () => {
    if (!post?.slug) return;

    const toastId = toast.loading("Publishing blog...");

    try {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          published: true,
        }),
      );

      await editBlog({
        slug: post.slug,
        formData,
      }).unwrap();

      setOpen(false);
      toast.success("Blog published successfully", { id: toastId });
    } catch (error: any) {
      toast.error(error?.message || "Failed to publish blog", {
        id: toastId,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all duration-300 ease-linear cursor-pointer p-2.5 sm:p-3 rounded-xl hover:bg-[#47cfeb]"
        >
          <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-3">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-thin">
            View Single Blog Post
          </DialogTitle>
        </DialogHeader>

        {/* Content goes here */}
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Image */}
            <div className="relative flex-1 aspect-4/3 md:aspect-auto md:h-auto">
              <Image
                src={post?.coverUrl as string}
                alt="blog image"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Content */}
            <div className="flex-2 flex justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl line-clamp-2 mb-4">
                  {post?.title}
                </h1>

                <p className="text-sm text-muted-foreground mb-2">
                  Author : <span>{post?.author?.name}</span>
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {categories?.map((category, index) => (
                    <Badge
                      key={index}
                      className="border-[#29A3FE] bg-[#29A3FE] text-white text-xs capitalize"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status */}

              <div className="flex-none self-start capitalize">
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 text-white ${
                    post?.published ? "bg-[#9767e4]" : "bg-gray-500"
                  }`}
                >
                  <Clock10 size={14} />
                  {post?.published ? "published" : "draft"}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-lg capitalize">Summary</h1>
              <p className="text-sm text-ring">{post?.summary}</p>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-lg capitalize">Content</h1>
              <p className="text-sm text-ring">{post?.content}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          {post?.published ? (
            <Link
              href={`/blog/${post?.slug}`}
              className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-md"
            >
              View Live Post
            </Link>
          ) : (
            <div className="btn-gradient p-px rounded-md">
              <Button
                type="button"
                className="bg-white hover:bg-white dark:bg-[#0d1322] dark:hover:bg-[#0d1322] flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-md text-black dark:text-white"
                onClick={handlePublish}
              >
                {isLoading ? "Publishing..." : "Publish This Post"}
              </Button>
            </div>
          )}

          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="w-full sm:w-auto hover:bg-[#47cfeb] cursor-pointer"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewSingleBlogModal;
