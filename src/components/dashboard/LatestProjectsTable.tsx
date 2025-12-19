"use client";

import { DynamicTable } from "../shared/DynamicTable";
import { FolderKanban } from "lucide-react";

const LatestProjectsTable = () => {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "Next.js",
      status: "completed",
      date: "2025-10-05",
    },
    {
      name: "Ride Booking App",
      tech: "Express",
      status: "ongoing",
      date: "2025-09-22",
    },
    {
      name: "Admin Dashboard",
      tech: "React",
      status: "pending",
      date: "2025-11-02",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js",
      status: "completed",
      date: "2025-10-05",
    },
    {
      name: "Admin Dashboard",
      tech: "React",
      status: "pending",
      date: "2025-11-02",
    },
    {
      name: "Ride Booking App",
      tech: "Express",
      status: "ongoing",
      date: "2025-09-22",
    },
  ];
  return (
    <DynamicTable
      title="Latest Projects"
      icon={FolderKanban}
      iconColor="text-purple-500"
      data={projects}
      columns={[
        { key: "name", label: "Project", sortable: true },
        { key: "tech", label: "Tech", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "date", label: "Date", sortable: true },
      ]}
      getRowBadge={(row) => {
        if (row.status === "completed")
          return {
            label: "Done",
            color:
              "border border-green-600 text-green-600! dark:text-white! bg-white dark:bg-green-600",
            variant: "default",
          };
        if (row.status === "ongoing")
          return {
            label: "Live",
            color:
              "border border-purple-600 text-purple-600! dark:text-white! bg-white dark:bg-purple-600",
            variant: "default",
          };
        if (row.status === "pending")
          return {
            label: "Development",
            color:
              "border border-gray-600 text-gray-600! dark:text-white! bg-white dark:bg-gray-600",
            variant: "destructive",
          };
        return null;
      }}
    />
  );
};

export default LatestProjectsTable;
