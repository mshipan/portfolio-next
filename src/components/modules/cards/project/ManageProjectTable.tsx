"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Edit,
  Eye,
  Trash2,
  Star,
  AlertCircle,
  RefreshCcw,
  Search,
  FileQuestion,
} from "lucide-react";
import Image from "next/image";
import { DynamicTable } from "@/components/shared/DynamicTable";
import EditProjectModal from "@/components/shared/modals/EditProjectModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import {
  useDeleteProjectMutation,
  useGetAllProjectQuery,
} from "@/redux/features/project/project.api";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ViewSingleProjectModal from "@/components/shared/modals/ViewSingleProjectModal";
import { toast } from "sonner";

const ManageProjectTable = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    search: "",
    sortBy: "createdAt",
    sortOrder: "desc" as "asc" | "desc",
    featured: undefined as undefined | "true" | "false",
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
    data: allProjects,
    isLoading,
    isError,
    refetch,
  } = useGetAllProjectQuery(params);

  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();

  const projects =
    allProjects?.data?.map((project: any) => ({
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.description,
      shortDescription: project.shortDescription,
      techStack: project.techStack,
      features: project.features,
      featured: project.featured,
      repoUrl: project.repoUrl,
      liveUrl: project.liveUrl,
      thumbnail: project.thumbnail,
      date: new Date(project.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: project.published ? "published" : "draft",
    })) || [];

  const meta = allProjects?.meta;

  const handleDeleteProject = async (slug: string) => {
    const toastId = toast.loading("Deleting project...");

    try {
      await deleteProject(slug).unwrap();

      toast.success("Project deleted successfully", { id: toastId });

      if (projects.length === 1 && params.page > 1) {
        setParams((p) => ({
          ...p,
          page: p.page - 1,
        }));
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to delete project", {
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
          Failed to load projects
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
            placeholder="Search by title..."
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
            value={params.featured}
            onValueChange={(value) =>
              setParams((p) => ({
                ...p,
                featured: (value as "true" | "false") || undefined,
                page: 1,
              }))
            }
          >
            <SelectTrigger className="h-9 w-32">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Featured</SelectItem>
              <SelectItem value="false">Not Featured</SelectItem>
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
      {projects?.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-16 border-2 border-dashed rounded-2xl">
          <FileQuestion className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold">No Projects Found</h3>
        </div>
      ) : (
        <DynamicTable
          title="All Projects"
          data={projects}
          rowsPerPage={params.limit}
          onRowsPerPageChange={(limit) =>
            setParams((p) => ({ ...p, limit, page: 1 }))
          }
          currentPage={params.page}
          totalPages={meta?.totalPage || 1}
          onPageChange={(page) => setParams((p) => ({ ...p, page }))}
          columns={[
            {
              key: "thumbnail",
              label: "Thumbnail",
              render: (row) => (
                <Image
                  src={row.thumbnail}
                  width={55}
                  height={40}
                  alt="thumbnail"
                  className="rounded-lg opacity-80 object-cover"
                />
              ),
            },
            {
              key: "title",
              label: "Title",
              sortable: true,
            },
            {
              key: "techStack",
              label: "Tech Stack",
              render: (row) => (
                <div className="flex gap-2">
                  {row.techStack.map((item: string, i: number) => (
                    <Badge
                      key={i}
                      className="bg-white dark:bg-[#29A3FE] border-[#29A3FE] text-[#29A3FE] dark:text-white"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              ),
            },
            {
              key: "featured",
              label: "Featured",
              render: (row) =>
                row.featured ? (
                  <Star size={18} className="text-[#A381FF]" />
                ) : (
                  <span className="text-gray-500">—</span>
                ),
            },
            {
              key: "status",
              label: "Status",
              sortable: true,
            },
            {
              key: "id",
              label: "Actions",
              render: (row) => (
                <div className="flex items-center gap-2">
                  <EditProjectModal project={row} />
                  <ViewSingleProjectModal slug={row?.slug} />
                  <DeleteConfirmModal
                    title="Delete Project"
                    description="Are you sure you want to delete this project? This action cannot be undone."
                    onDelete={() => handleDeleteProject(row.slug)}
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
          getRowBadge={(row) => {
            if (row.status === "published")
              return {
                label: "Published",
                color:
                  "bg-white dark:bg-purple-600 text-purple-600! dark:text-white! border-purple-600",
                variant: "default",
              };

            if (row.status === "draft")
              return {
                label: "Draft",
                color: "bg-gray-700",
                variant: "secondary",
              };

            return null;
          }}
        />
      )}
    </div>
  );
};

export default ManageProjectTable;
