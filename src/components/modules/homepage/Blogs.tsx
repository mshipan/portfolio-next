import HeaderSection from "@/components/shared/HeaderSection";
import BlogCard from "../cards/blog/BlogCard";
import { IGetBlog } from "@/redux/rtkTypes/blog.type";
import ShowMoreBtn from "@/components/shared/ShowMoreBtn";

interface Props {
  blogs: IGetBlog[];
}

const Blogs = ({ blogs }: Props) => {
  return (
    <div
      id="blog"
      className="bg-white dark:bg-[#131a2c] px-6 py-20 sm:py-28 md:py-36"
    >
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
        <HeaderSection
          titleFirstPart="latest"
          titleSecondPart="blog posts"
          subTitle="Sharing knowledge and insights about web development"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {blogs?.slice(0, 6)?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>

        {blogs?.length > 6 && <ShowMoreBtn href="/blogs" />}
      </div>
    </div>
  );
};

export default Blogs;
