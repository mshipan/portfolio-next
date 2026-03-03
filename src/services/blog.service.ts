import { fetcher } from "@/lib/fetcher";
import { IApiResponse } from "@/redux/rtkTypes/api.type";
import { IGetBlog } from "@/redux/rtkTypes/blog.type";

export const getBlogs = async (): Promise<IApiResponse<IGetBlog[]>> => {
  return fetcher<IApiResponse<IGetBlog[]>>("/blog");
};
