import { Button } from "@/components/ui/button";
import { Blog } from "@/types";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-[#11192c] rounded-2xl overflow-hidden flex flex-col border border-gray-800 hover:border-[#9767e4] transition-all ease-in-out duration-500">
      <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-full aspect-[16/9]">
        <Image
          src={blog.coverUrl || "/images/placeholder.jpeg"}
          alt={blog.title}
          fill
          className="object-cover transition duration-300 ease-in-out hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="p-6 sm:p-7 flex flex-col gap-3 sm:gap-6 h-full">
        <Link href={`/blog/${blog.slug}`}>
          <h4 className="text-white hover:text-[#9767e4] text-lg sm:text-xl leading-7 font-bold">
            {blog.title}
          </h4>
        </Link>

        <p className="text-sm leading-6 font-normal text-ring">
          {blog.summary}
        </p>

        <div className="text-xs leading-4 font-normal flex items-center gap-1 text-ring">
          <Calendar size={15} />
          <p>
            {blog.createdAt
              ? new Intl.DateTimeFormat("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(blog.createdAt)
              : ""}
          </p>
        </div>

        <div className="flex w-full mt-4">
          <Button className="flex items-center justify-center gap-2 w-full text-sm font-medium bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer">
            <ExternalLink className="w-4 h-4" />
            <span>Read More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
