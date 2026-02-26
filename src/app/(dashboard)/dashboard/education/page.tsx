"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ManageEducationTable from "@/components/modules/cards/education/ManageEducationTable";
import AddEducationModal from "@/components/shared/modals/AddEducationModal";

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
        <ManageEducationTable />
      </div>
    </div>
  );
};

export default EducationPage;
