import {
  EducationQueryParams,
  ICreateEducationError,
  ICreateEducationPayload,
  ICreateEducationSuccess,
  IEducation,
  IGetEducationResponse,
} from "@/redux/rtkTypes/education.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const educationApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createEducation: builder.mutation<
      ICreateEducationPayload,
      ICreateEducationPayload
    >({
      query: (formData) => ({
        url: "/about/education",
        method: "POST",
        body: formData,
      }),

      transformResponse: (
        response: ICreateEducationSuccess<ICreateEducationPayload>,
      ) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Education create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateEducationError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "EDUCATION"],
    }),

    getAllEducation: builder.query<
      IGetEducationResponse,
      EducationQueryParams | undefined
    >({
      query: (params) => ({
        url: "/about/education",
        method: "GET",
        params,
      }),
      providesTags: ["ABOUT", "EDUCATION"],
    }),

    updateEducation: builder.mutation<
      ICreateEducationPayload,
      { id: string; data: Partial<IEducation> }
    >({
      query: ({ id, data }) => ({
        url: `/about/education/${id}`,
        method: "PATCH",
        body: data,
      }),

      transformResponse: (
        response: ICreateEducationSuccess<ICreateEducationPayload>,
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
          message = String((error.data as ICreateEducationError).message);
        }
        return { message };
      },

      invalidatesTags: ["ABOUT", "EDUCATION"],
    }),

    deleteEducation: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/about/education/${id}`,
        method: "DELETE",
      }),

      transformResponse: (response: ICreateEducationSuccess<null>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return { message: response.message };
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Education delete failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateEducationError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "EDUCATION"],
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
