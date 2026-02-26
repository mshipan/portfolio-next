import {
  ExperienceQueryParams,
  ICreateExperienceError,
  ICreateExperiencePayload,
  ICreateExperienceSuccess,
  IExperience,
  IGetExperienceResponse,
} from "@/redux/rtkTypes/experience.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const experienceApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createExperience: builder.mutation<
      ICreateExperiencePayload,
      ICreateExperiencePayload
    >({
      query: (formData) => ({
        url: "/about/experience",
        method: "POST",
        body: formData,
      }),

      transformResponse: (
        response: ICreateExperienceSuccess<ICreateExperiencePayload>,
      ) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Experience create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateExperienceError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "EXPERIENCE"],
    }),

    getAllExperience: builder.query<
      IGetExperienceResponse,
      ExperienceQueryParams | undefined
    >({
      query: (params) => ({
        url: "/about/experience",
        method: "GET",
        params,
      }),
      providesTags: ["ABOUT", "EXPERIENCE"],
    }),

    updateExperience: builder.mutation<
      ICreateExperiencePayload,
      { id: string; data: Partial<IExperience> }
    >({
      query: ({ id, data }) => ({
        url: `/about/experience/${id}`,
        method: "PATCH",
        body: data,
      }),

      transformResponse: (
        response: ICreateExperienceSuccess<ICreateExperiencePayload>,
      ) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Experience update failed";
        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateExperienceError).message);
        }
        return { message };
      },

      invalidatesTags: ["ABOUT", "EXPERIENCE"],
    }),

    deleteExperience: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/about/experience/${id}`,
        method: "DELETE",
      }),

      transformResponse: (response: ICreateExperienceSuccess<null>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return { message: response.message };
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Experience delete failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateExperienceError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "EXPERIENCE"],
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useGetAllExperienceQuery,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApi;
