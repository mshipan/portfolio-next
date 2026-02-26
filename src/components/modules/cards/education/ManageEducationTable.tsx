"use client";

import { DynamicTable } from "@/components/shared/DynamicTable";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditEducationModal from "@/components/shared/modals/EditEducationModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useDeleteEducationMutation,
  useGetAllEducationQuery,
} from "@/redux/features/education/education.api";
import {
  AlertCircle,
  FileQuestion,
  RefreshCcw,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { start } from "repl";
import { toast } from "sonner";

const ManageEducationTable = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    search: "",
    sortOrder: "desc" as "asc" | "desc",
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
    data: allEducations,
    isLoading,
    isError,
    refetch,
  } = useGetAllEducationQuery(params);

  const [deleteEducation, { isLoading: isDeleting }] =
    useDeleteEducationMutation();

  const educations =
    allEducations?.data?.map((education: any) => ({
      id: education.id,
      institution: education.institution,
      degree: education.degree,
      description: education.description,
      startYear: education.startYear,
      endYear: education.endYear,
      date: new Date(education.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    })) || [];

  const meta = allEducations?.meta;

  const handleDeleteEducation = async (id: string) => {
    const toastId = toast.loading("Deleting education...");

    try {
      await deleteEducation(id).unwrap();

      toast.success("Education deleted successfully", { id: toastId });

      if (educations.length === 1 && params.page > 1) {
        setParams((p) => ({
          ...p,
          page: p.page - 1,
        }));
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to delete education", {
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
          Failed to load education
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
            placeholder="Search by institution or degree..."
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
        </div>
      </div>

      {educations?.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-16 border-2 border-dashed rounded-2xl">
          <FileQuestion className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold">No Education Found</h3>
        </div>
      ) : (
        <DynamicTable
          title="All Education"
          data={educations}
          rowsPerPage={params.limit}
          onRowsPerPageChange={(limit) =>
            setParams((p) => ({ ...p, limit, page: 1 }))
          }
          currentPage={params.page}
          totalPages={meta?.totalPage || 1}
          onPageChange={(page) => setParams((p) => ({ ...p, page }))}
          columns={[
            { key: "institution", label: "Institution", sortable: true },
            { key: "degree", label: "Degree", sortable: true },
            { key: "startYear", label: "Start Year", sortable: true },
            { key: "endYear", label: "End Year", sortable: true },
            {
              key: "id",
              label: "Action",
              render: (row) => (
                <div className="flex items-center gap-2">
                  <EditEducationModal education={row} />
                  <DeleteConfirmModal
                    title="Delete Education"
                    description="Are you sure you want to delete this education? This action cannot be undone."
                    onDelete={() => handleDeleteEducation(row.id)}
                    isLoading={isDeleting}
                    trigger={
                      <Button
                        variant="ghost"
                        className="transition-all duration-300 ease-linear cursor-pointer hover:bg-red-400 hover:text-red-700 p-2.5 sm:p-3 rounded-xl"
                      >
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    }
                  />
                </div>
              ),
            },
          ]}
        />
      )}
    </div>
  );
};

export default ManageEducationTable;
