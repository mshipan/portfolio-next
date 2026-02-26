import {
  ICreateSkillError,
  ICreateSkillPayload,
  ICreateSkillSuccess,
  IGetSingleSkillResponse,
  IGetSkillResponse,
  ISkill,
  SkillQueryParams,
} from "@/redux/rtkTypes/skill.type";
import baseApi from "../baseApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const skillApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createSkill: builder.mutation<ICreateSkillPayload, FormData>({
      query: (formData) => ({
        url: "/about/skill",
        method: "POST",
        body: formData,
      }),

      transformResponse: (
        response: ICreateSkillSuccess<ICreateSkillPayload>,
      ) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return response.data;
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Skill create failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateSkillError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "SKILL"],
    }),

    getAllSkill: builder.query<IGetSkillResponse, SkillQueryParams | undefined>(
      {
        query: (params) => ({
          url: "/about/skill",
          method: "GET",
          params,
        }),
        providesTags: ["ABOUT", "SKILL"],
      },
    ),

    updateSkill: builder.mutation<
      ICreateSkillPayload,
      { id: string; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/about/skill/${id}`,
        method: "PATCH",
        body: formData,
      }),

      transformResponse: (
        response: ICreateSkillSuccess<ICreateSkillPayload>,
      ) => {
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
          message = String((error.data as ICreateSkillError).message);
        }
        return { message };
      },

      invalidatesTags: ["ABOUT", "SKILL"],
    }),

    deleteSkill: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/about/skill/${id}`,
        method: "DELETE",
      }),

      transformResponse: (response: ICreateSkillSuccess<null>) => {
        if (!response.success) {
          throw new Error(response.message);
        }

        return { message: response.message };
      },

      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Skill delete failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ICreateSkillError).message);
        }

        return { message };
      },

      invalidatesTags: ["ABOUT", "SKILL"],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetAllSkillQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
