import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  credentials: "include",
});

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery(
        { url: "/auth/logout", method: "POST" },
        api,
        extraOptions
      );

      if (typeof window !== "undefined") {
        window.location.href = "/unauthorized";
      }
    }
  }

  return result;
};
