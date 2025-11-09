"use client";

import { DynamicTable } from "@/components/shared/DynamicTable";
import AddEducationModal from "@/components/shared/modals/AddEducationModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditEducationModal from "@/components/shared/modals/EditEducationModal";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const EducationPage = () => {
  const blogs = [
    {
      institution: "Getting Started with React 19	",
      degree: "published",
      field: "2025-10-05",
      period: "2025-10-05",
      action: "",
    },
    {
      institution: "TypeScript Best Practices",
      degree: "draft",
      field: "2025-10-05",
      period: "2025-10-05",
    },
    {
      institution: "Understanding Web Performance",
      degree: "published",
      field: "2025-10-05",
      period: "2025-10-05",
    },
    {
      institution: "Modern CSS Techniques",
      degree: "published",
      field: "2025-10-05",
      period: "2025-10-05",
    },
    {
      institution: "TypeScript Best Practices",
      degree: "draft",
      field: "2025-10-05",
      period: "2025-10-05",
    },
    {
      institution: "Modern CSS Techniques",
      degree: "published",
      field: "2025-10-05",
      period: "2025-10-05",
    },
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-white pb-2">
            Education
          </h1>
          <p className="text-base leading-5 text-ring">
            The foundation of my skills and technical understanding.
          </p>
        </div>

        <AddEducationModal />
      </div>

      <div>
        <DynamicTable
          title="All Education"
          data={blogs}
          columns={[
            { key: "institution", label: "Institution", sortable: true },
            { key: "degree", label: "Degree", sortable: true },
            { key: "field", label: "Field", sortable: true },
            { key: "period", label: "Period", sortable: true },
            {
              key: "action",
              label: "Action",
              render: (row) => (
                <div className="flex items-center gap-2">
                  <EditEducationModal />
                  <DeleteConfirmModal
                    title="Delete Education"
                    description="Are you sure you want to delete this education? This action cannot be undone."
                    onDelete={() =>
                      console.log(`Education "${row.institution}" deleted`)
                    }
                    trigger={
                      <Button
                        variant="ghost"
                        className="
              transition-all duration-300 ease-linear cursor-pointer
              hover:bg-red-400 hover:text-red-700
              p-2.5 sm:p-3 rounded-xl
            "
                      >
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    }
                  />
                </div>
              ),
            },
          ]}
          getRowBadge={(row) => {
            if (row.degree === "published")
              return {
                label: "Published",
                color: "bg-purple-600",
                variant: "default",
                // icon: ClockCheck,
              };
            if (row.degree === "draft")
              return {
                label: "Draft",
                color: "bg-gray-800",
                variant: "destructive",
                // icon: Clock10,
              };
            return null;
          }}
        />
      </div>
    </div>
  );
};

export default EducationPage;
