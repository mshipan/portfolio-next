import {
  IBlogPayload,
  ICreateBlogError,
  ICreateBlogSuccess,
} from "@/redux/rtkTypes/blog.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation<IBlogPayload, FormData>({
      query: (formData) => ({
        url: "/blog",
        method: "POST",
        body: formData,
      }),

      transformResponse: (response: ICreateBlogSuccess<IBlogPayload>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Blog create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateBlogError).message);
        }

        return { message };
      },

      invalidatesTags: ["BLOG"],
    }),
  }),
});

export const { useCreateBlogMutation } = blogApi;
