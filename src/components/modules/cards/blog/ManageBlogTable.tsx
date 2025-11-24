"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DynamicTable } from "@/components/shared/DynamicTable";
import EditBlogPostModal, {
  BlogRow,
} from "@/components/shared/modals/EditBlogPostModal";
import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";

const ManageBlogTable = () => {
  // Example data (matching your screenshot)
  const posts: BlogRow[] = [
    {
      id: "1",
      cover: "/images/user.png",
      title: "Building Scalable React Applications",
      slug: "building-scalable-react-applications",
      category: "React",
      summary: "Learn best practices for structuring large React applications",
      content: "Full blog content here...",
      date: "Dec 15, 2024",
      status: "published",
    },
    {
      id: "2",
      cover: "/images/user.png",
      title: "Mastering TypeScript: Advanced Types",
      slug: "mastering-typescript-advanced-types",
      category: "TypeScript",
      summary: "Deep dive into advanced TypeScript types and patterns",
      content: "Full blog content here...",
      date: "Nov 28, 2024",
      status: "published",
    },
  ];

  return (
    <DynamicTable
      title="All Blog Posts"
      data={posts}
      rowsPerPage={5}
      columns={[
        {
          key: "cover",
          label: "Cover",
          render: (row: BlogRow) => (
            <Image
              src={row.cover}
              width={55}
              height={40}
              alt="cover"
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
          key: "category",
          label: "Category",
          render: (row: BlogRow) => (
            <Badge className="bg-[#29A3FE] text-black px-3">
              {row.category}
            </Badge>
          ),
        },
        {
          key: "date",
          label: "Date",
          sortable: true,
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          render: (row: BlogRow) => (
            <Badge className="bg-purple-600 text-white px-3">
              {row.status === "published" ? "Published" : "Draft"}
            </Badge>
          ),
        },
        {
          key: "id",
          label: "Actions",
          render: (row: BlogRow) => (
            <div className="flex items-center gap-2">
              {/* Edit */}
              <EditBlogPostModal post={row} />

              {/* View */}
              <Button
                asChild
                variant="ghost"
                className="
                  transition-all duration-300 ease-linear cursor-pointer
                  hover:bg-[#47cfeb]
                  p-2.5 sm:p-3 rounded-xl
                "
              >
                <Link href={`/blog/${row.slug}`} aria-label="View post">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </Button>

              {/* Delete */}
              <DeleteConfirmModal
                title="Delete Blog Post"
                description="Are you sure you want to delete this blog post? This action cannot be undone."
                onDelete={() => console.log(`Blog post "${row.title}" deleted`)}
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
      // If your DynamicTable still supports getRowBadge and you want to disable it:
      // getRowBadge={() => null}
    />
  );
};

export default ManageBlogTable;
