"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { DynamicTable } from "@/components/shared/DynamicTable";
import AddEducationModal from "@/components/shared/modals/AddEducationModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditEducationModal from "@/components/shared/modals/EditEducationModal";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const EducationPage = () => {
  const educations = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
      action: "",
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
    },
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row lg:items-end justify-between gap-6">
        <DashboardHeader
          title="Education"
          subTitle="The foundation of my skills and technical understanding."
        />

        <AddEducationModal />
      </div>

      <div>
        <DynamicTable
          title="All Education"
          data={educations}
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
      </div>
    </div>
  );
};

export default EducationPage;
