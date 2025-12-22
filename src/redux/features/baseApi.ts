import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  //   baseQuery: axiosBaseQuery(),
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["USER"],
  endpoints: () => ({}),
});

export default baseApi;
