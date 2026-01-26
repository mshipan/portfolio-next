import {
  IBlogPayload,
  ICreateBlogError,
  ICreateBlogSuccess,
  IGetBlog,
  IGetBlogParams,
  IGetBlogResponse,
  IGetSingleBlogResponse,
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

    updateBlog: builder.mutation<
      IBlogPayload,
      { slug: string; formData: FormData }
    >({
      query: ({ slug, formData }) => ({
        url: `/blog/${slug}`,
        method: "PATCH",
        body: formData,
      }),

      transformResponse: (response: ICreateBlogSuccess<IBlogPayload>) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Blog update failed";
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

    deleteBlog: builder.mutation<{ message: string }, string>({
      query: (slug) => ({
        url: `/blog/${slug}`,
        method: "DELETE",
      }),

      transformResponse: (response: ICreateBlogSuccess<null>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return { message: response.message };
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Blog delete failed";

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

    getAllBlog: builder.query<IGetBlogResponse, IGetBlogParams | undefined>({
      query: (params) => ({
        url: "/blog",
        method: "GET",
        params,
      }),

      providesTags: ["BLOG"],
    }),

    getSingleBlog: builder.query<IGetBlog, string>({
      query: (slug) => ({
        url: `/blog/${slug}`,
        method: "GET",
      }),

      transformResponse: (response: IGetSingleBlogResponse) => {
        if (!response.success) {
          throw new Error(response.message);
        }
        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Failed to fetch blog";

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

      providesTags: ["BLOG"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
} = blogApi;
