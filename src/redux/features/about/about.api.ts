import {
  IAboutPayload,
  ICreateAboutError,
  ICreateAboutSuccess,
  IGetAboutResponse,
} from "@/redux/rtkTypes/about.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const aboutApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createOrUpdateAbout: builder.mutation<IAboutPayload, FormData>({
      query: (formData) => ({
        url: "/about",
        method: "POST",
        body: formData,
      }),

      transformResponse: (response: ICreateAboutSuccess<IAboutPayload>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "About create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateAboutError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT"],
    }),

    getAbout: builder.query<IGetAboutResponse, void>({
      query: () => ({
        url: "/about",
        method: "GET",
      }),

      providesTags: ["ABOUT"],
    }),

    uploadAboutPhoto: builder.mutation<IAboutPayload, FormData>({
      query: (formData) => ({
        url: "/about/photo",
        method: "PATCH",
        body: formData,
      }),

      transformResponse: (response: ICreateAboutSuccess<IAboutPayload>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Photo upload failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateAboutError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT"],
    }),
  }),
});

export const {
  useCreateOrUpdateAboutMutation,
  useGetAboutQuery,
  useUploadAboutPhotoMutation,
} = aboutApi;
