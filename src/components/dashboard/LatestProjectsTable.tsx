"use client";

import { FolderKanban } from "lucide-react";
import { DynamicTable } from "../shared/DynamicTable";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  techStack: string[];
  featured: boolean;
  shortDescription?: string;
  published: boolean;
  createdAt: string;
}

interface LatestProjectsTableProps {
  data: Project[];
}

const LatestProjectsTable = ({ data }: LatestProjectsTableProps) => {
  const projects = data?.map((p) => ({
    name: p.title,
    tech: p.techStack.join(", "),
    status: p.featured ? "featured" : "regular",
    date: new Date(p.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(projects.length / rowsPerPage);

  const paginatedData = projects.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <DynamicTable
      title="Latest Projects"
      icon={FolderKanban}
      iconColor="text-purple-500"
      data={paginatedData}
      columns={[
        { key: "name", label: "Project", sortable: true },
        { key: "tech", label: "Tech", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "date", label: "Date", sortable: true },
      ]}
      currentPage={currentPage}
      totalPages={totalPages}
      rowsPerPage={rowsPerPage}
      onPageChange={setCurrentPage}
      onRowsPerPageChange={() => {}}
      getRowBadge={(row) => {
        if (row.status === "featured")
          return {
            label: "Featured",
            color:
              "border border-purple-600 text-purple-600 dark:text-white bg-white dark:bg-purple-600",
            variant: "default",
          };
        if (row.status === "regular")
          return {
            label: "Regular",
            color:
              "border border-gray-600 text-gray-600 dark:text-white bg-white dark:bg-gray-600",
            variant: "destructive",
          };
        return null;
      }}
    />
  );
};

export default LatestProjectsTable;
