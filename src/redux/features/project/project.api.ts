import {
  ICreateProjectError,
  ICreateProjectSuccess,
  IGetProjectResponse,
  IGetSingleProjectResponse,
  IProjectPayload,
  Project,
  ProjectQueryParams,
} from "@/redux/rtkTypes/project.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const projectApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createProject: builder.mutation<IProjectPayload, FormData>({
      query: (formData) => ({
        url: "/project",
        method: "POST",
        body: formData,
      }),

      transformResponse: (response: ICreateProjectSuccess<IProjectPayload>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Project create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateProjectError).message);
        }

        return { message };
      },

      invalidatesTags: ["PROJECT"],
    }),

    getAllProject: builder.query<
      IGetProjectResponse,
      ProjectQueryParams | undefined
    >({
      query: (params) => ({
        url: "/project",
        method: "GET",
        params,
      }),
      providesTags: ["PROJECT"],
    }),

    updateProject: builder.mutation<
      IProjectPayload,
      { slug: string; formData: FormData }
    >({
      query: ({ slug, formData }) => ({
        url: `/project/${slug}`,
        method: "PATCH",
        body: formData,
      }),

      transformResponse: (response: ICreateProjectSuccess<IProjectPayload>) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Project update failed";
        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateProjectError).message);
        }
        return { message };
      },

      invalidatesTags: ["PROJECT"],
    }),

    getSingleProject: builder.query<Project, string>({
      query: (slug) => ({
        url: `/project/${slug}`,
        method: "GET",
      }),

      transformResponse: (response: IGetSingleProjectResponse) => {
        if (!response.success) {
          throw new Error(response.message);
        }
        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Failed to fetch project";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateProjectError).message);
        }

        return { message };
      },

      providesTags: ["PROJECT"],
    }),

    deleteProject: builder.mutation<{ message: string }, string>({
      query: (slug) => ({
        url: `/project/${slug}`,
        method: "DELETE",
      }),

      transformResponse: (response: ICreateProjectSuccess<null>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return { message: response.message };
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Project delete failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateProjectError).message);
        }

        return { message };
      },

      invalidatesTags: ["PROJECT"],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectQuery,
  useUpdateProjectMutation,
  useGetSingleProjectQuery,
  useDeleteProjectMutation,
} = projectApi;
