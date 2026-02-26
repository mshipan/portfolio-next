import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "USER",
    "BLOG",
    "PROJECT",
    "ABOUT",
    "SKILL",
    "EXPERIENCE",
    "EDUCATION",
  ],
  endpoints: () => ({}),
});

export default baseApi;
