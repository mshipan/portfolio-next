"use client";

import { DynamicTable } from "../shared/DynamicTable";
import { Clock10, ClockCheck, FileText } from "lucide-react";

const LatestBlogTable = () => {
  const blogs = [
    {
      title: "Getting Started with React 19	",
      status: "published",
      createdAt: "2025-10-05",
    },
    {
      title: "TypeScript Best Practices",
      status: "draft",
      createdAt: "2025-10-05",
    },
    {
      title: "Understanding Web Performance",
      status: "published",
      createdAt: "2025-10-05",
    },
    {
      title: "Modern CSS Techniques",
      status: "published",
      createdAt: "2025-10-05",
    },
    {
      title: "TypeScript Best Practices",
      status: "draft",
      createdAt: "2025-10-05",
    },
    {
      title: "Modern CSS Techniques",
      status: "published",
      createdAt: "2025-10-05",
    },
  ];
  return (
    <DynamicTable
      title="Latest Blogs"
      icon={FileText}
      iconColor="text-[#47cfeb]"
      data={blogs}
      columns={[
        { key: "title", label: "Project", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "createdAt", label: "Date", sortable: true },
      ]}
      getRowBadge={(row) => {
        if (row.status === "published")
          return {
            label: "Published",
            color:
              "border border-purple-600 text-purple-600! dark:text-white! bg-white dark:bg-purple-600",
            variant: "default",
            icon: ClockCheck,
          };
        if (row.status === "draft")
          return {
            label: "Draft",
            color:
              "border border-gray-600 text-gray-600! dark:text-white! bg-white dark:bg-gray-600",
            variant: "destructive",
            icon: Clock10,
          };
        return null;
      }}
    />
  );
};

export default LatestBlogTable;
