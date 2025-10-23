import HeaderSection from "@/components/shared/HeaderSection";
import BlogCard from "../cards/blog/BlogCard";
import { Blog } from "@/types";

const Blogs = () => {
  const blogs: Blog[] = Array.from({ length: 6 }).map((_, i) => ({
    id: `blog-${i}`,
    authorId: "user-1",
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    summary:
      "Learn best practices for structuring large React applications with proper state management and code organization.",
    content: "This is a demo blog content.",
    published: true,
    coverUrl: "/images/blog1.jpeg",
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  return (
    <div id="blog" className="bg-[#131a2c] px-6 py-20 sm:py-28 md:py-36">
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
        <HeaderSection
          titleFirstPart="latest"
          titleSecondPart="blog posts"
          subTitle="Sharing knowledge and insights about web development"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
