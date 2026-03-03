import { Button } from "@/components/ui/button";
import { IGetBlog } from "@/redux/rtkTypes/blog.type";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: IGetBlog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#11192c] rounded-2xl overflow-hidden flex flex-col h-full border border-gray-300 dark:border-gray-800 hover:border-[#9767e4] transition-all duration-500">
      <div className="relative overflow-hidden w-full aspect-video">
        <Image
          src={blog.coverUrl || "/images/placeholder.jpeg"}
          alt={blog.title}
          fill
          className="object-cover transition duration-300 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">
        <Link href={`/blog/${blog.slug}`}>
          <h4 className="text-black dark:text-white hover:text-[#9767e4] text-lg sm:text-xl leading-7 font-bold">
            {blog.title}
          </h4>
        </Link>

        <p className="text-sm leading-6 text-ring line-clamp-3">
          {blog.summary}
        </p>

        <div className="text-xs flex items-center gap-1 text-ring">
          <Calendar size={15} />
          <p>
            {blog.createdAt
              ? new Intl.DateTimeFormat("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(blog.createdAt))
              : ""}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <Button className="flex items-center justify-center gap-2 w-full text-sm font-medium bg-linear-to-r from-[#9767e4] to-[#47cfeb]">
            <ExternalLink className="w-4 h-4" />
            <span>Read More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
