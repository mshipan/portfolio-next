/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  Clock10,
  ClockCheck,
  Eye,
  FileQuestion,
  RefreshCcw,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DynamicTable } from "@/components/shared/DynamicTable";
import EditBlogPostModal, {
  BlogRow,
} from "@/components/shared/modals/EditBlogPostModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import {
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "@/redux/features/blog/blog.api";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ViewSingleBlogModal from "@/components/shared/modals/ViewSingleBlogModal";
import { toast } from "sonner";

const ManageBlogTable = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    search: "",
    sortBy: "createdAt",
    sortOrder: "desc" as "asc" | "desc",
    published: undefined as undefined | "true" | "false",
  });

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setParams((p) => ({
        ...p,
        search: searchInput,
        page: 1,
      }));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const {
    data: allBlogs,
    isLoading,
    isError,
    refetch,
  } = useGetAllBlogQuery(params);

  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();

  const posts: BlogRow[] =
    allBlogs?.data?.map((blog: any) => ({
      id: blog.id,
      cover: blog.coverUrl,
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      summary: blog.summary,
      content: blog.content,
      date: new Date(blog.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: blog.published ? "published" : "draft",
    })) || [];

  const meta = allBlogs?.meta;

  const handleDeleteBlog = async (slug: string) => {
    const toastId = toast.loading("Deleting blog...");

    try {
      await deleteBlog(slug).unwrap();

      toast.success("Blog deleted successfully", { id: toastId });

      if (posts.length === 1 && params.page > 1) {
        setParams((p) => ({
          ...p,
          page: p.page - 1,
        }));
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to delete blog", {
        id: toastId,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4 w-full">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-105 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-red-200 rounded-2xl">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-red-700">
          Failed to load blogs
        </h3>
        <Button
          onClick={() => refetch()}
          variant="outline"
          className="gap-2 mt-4"
        >
          <RefreshCcw className="w-4 h-4" /> Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 relative">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by title or content..."
            className="pl-10"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <Select
            value={params.sortOrder}
            onValueChange={(value: "asc" | "desc") =>
              setParams((p) => ({ ...p, sortOrder: value, page: 1 }))
            }
          >
            <SelectTrigger className="h-9 w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={params.published ?? "all"}
            onValueChange={(value) =>
              setParams((p) => ({
                ...p,
                published:
                  value === "all" ? undefined : (value as "true" | "false"),
                page: 1,
              }))
            }
          >
            <SelectTrigger className="h-9 w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Published</SelectItem>
              <SelectItem value="false">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {posts?.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-16 border-2 border-dashed rounded-2xl">
          <FileQuestion className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold">No Blogs Found</h3>
        </div>
      ) : (
        <DynamicTable
          title="All Blog Posts"
          data={posts}
          rowsPerPage={params.limit}
          onRowsPerPageChange={(limit) =>
            setParams((p) => ({ ...p, limit, page: 1 }))
          }
          currentPage={params.page}
          totalPages={meta?.totalPage || 1}
          onPageChange={(page) => setParams((p) => ({ ...p, page }))}
          columns={[
            {
              key: "cover",
              label: "Cover",
              render: (row) => (
                <Image
                  src={row.cover || "/images/blog1.jpeg"}
                  width={55}
                  height={40}
                  alt="cover"
                  className="rounded-lg object-cover"
                />
              ),
            },
            { key: "title", label: "Title" },
            {
              key: "category",
              label: "Category",
              render: (row: BlogRow) => {
                const categories = row.category ? row.category.split(",") : [];

                return (
                  <div className="flex flex-wrap gap-1.5">
                    {categories.length > 0 ? (
                      categories.map((cat, index) => (
                        <Badge
                          key={index}
                          className="border-[#29A3FE] bg-white dark:bg-[#29A3FE] 
                         text-[#29A3FE] dark:text-white 
                         px-3 py-0.5 capitalize text-xs"
                        >
                          {cat.trim()}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">No Category</span>
                    )}
                  </div>
                );
              },
            },
            { key: "date", label: "Date" },
            { key: "status", label: "Status" },
            {
              key: "id",
              label: "Actions",
              render: (row) => (
                <div className="flex gap-2">
                  <EditBlogPostModal post={row} />
                  <ViewSingleBlogModal slug={row?.slug} />
                  <DeleteConfirmModal
                    title="Delete Blog"
                    description="This action cannot be undone."
                    onDelete={() => handleDeleteBlog(row.slug)}
                    isLoading={isDeleting}
                    trigger={
                      <Button
                        variant="ghost"
                        className="transition-all duration-300 ease-linear cursor-pointer hover:text-red-600 p-2 rounded-full"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    }
                  />
                </div>
              ),
            },
          ]}
          getRowBadge={(row) =>
            row.status === "published"
              ? {
                  label: "Published",
                  color:
                    "border border-purple-600 text-purple-600 bg-white dark:bg-purple-600 text-purple-600! dark:text-white!",
                  icon: ClockCheck,
                }
              : {
                  label: "Draft",
                  color:
                    "border border-gray-600 text-gray-600 bg-white dark:bg-gray-600 text-gray-600! dark:text-white!",
                  icon: Clock10,
                }
          }
        />
      )}
    </div>
  );
};

export default ManageBlogTable;
