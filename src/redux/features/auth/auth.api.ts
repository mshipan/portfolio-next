import { LoginForm } from "@/app/auth/page";
import baseApi from "../baseApi";
import {
  ILoginError,
  ILoginPayload,
  ILoginSuccess,
} from "@/redux/rtkTypes/auth.type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginPayload, LoginForm>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      transformResponse: (response: ILoginSuccess<ILoginPayload>) => {
        if (!response.success) {
          throw new Error(response.message);
        }
        return response.data;
      },
      transformErrorResponse: (error: FetchBaseQueryError) => {
        let message = "Login failed";

        if (
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data
        ) {
          message = String((error.data as ILoginError).message);
        }

        return { message };
      },
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
