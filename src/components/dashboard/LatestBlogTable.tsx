"use client";

import { useMemo, useState } from "react";
import { DynamicTable } from "../shared/DynamicTable";
import { Clock10, ClockCheck, FileText } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  published: boolean;
  createdAt: string;
}

interface LatestBlogTableProps {
  data?: Blog[];
}

const LatestBlogTable = ({ data = [] }: LatestBlogTableProps) => {
  const formattedBlogs = useMemo(() => {
    return data.map((blog) => ({
      title: blog.title,
      status: blog.published ? "published" : "draft",
      createdAt: new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }));
  }, [data]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(formattedBlogs.length / rowsPerPage);

  const paginatedData = formattedBlogs.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <DynamicTable
      title="Latest Blogs"
      icon={FileText}
      iconColor="text-[#47cfeb]"
      data={paginatedData}
      columns={[
        { key: "title", label: "Blog Title", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "createdAt", label: "Date", sortable: true },
      ]}
      currentPage={currentPage}
      totalPages={totalPages}
      rowsPerPage={rowsPerPage}
      onPageChange={setCurrentPage}
      onRowsPerPageChange={() => {}}
      getRowBadge={(row) => {
        if (row.status === "published")
          return {
            label: "Published",
            color:
              "border border-purple-600 text-purple-600 dark:text-white bg-white dark:bg-purple-600",
            variant: "default",
            icon: ClockCheck,
          };

        if (row.status === "draft")
          return {
            label: "Draft",
            color:
              "border border-gray-600 text-gray-600 dark:text-white bg-white dark:bg-gray-600",
            variant: "destructive",
            icon: Clock10,
          };

        return null;
      }}
    />
  );
};

export default LatestBlogTable;
