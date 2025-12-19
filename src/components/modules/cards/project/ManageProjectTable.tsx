"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash2, Star } from "lucide-react";
import Image from "next/image";
import { DynamicTable } from "@/components/shared/DynamicTable";
import EditProjectModal from "@/components/shared/modals/EditProjectModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";

const ManageProjectTable = () => {
  // Example data (same as your screenshot)
  const projects = [
    {
      thumbnail: "/images/user.png",
      title: "E-Commerce Platform",
      techStack: ["React", "Node.js", "+1"],
      featured: true,
      status: "published",
      action: "",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
    {
      thumbnail: "/images/user.png",
      title: "Social Media Dashboard",
      techStack: ["Next.js", "TypeScript", "+1"],
      featured: false,
      status: "published",
    },
  ];

  return (
    <DynamicTable
      title="All Projects"
      data={projects}
      rowsPerPage={5}
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
              {row.techStack.map((item, i) => (
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
          key: "action",
          label: "Actions",
          render: (row) => (
            <div className="flex items-center gap-2">
              <EditProjectModal project={row} />
              <DeleteConfirmModal
                title="Delete Project"
                description="Are you sure you want to delete this project? This action cannot be undone."
                onDelete={() => console.log(`Education "${row.title}" deleted`)}
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
  );
};

export default ManageProjectTable;
