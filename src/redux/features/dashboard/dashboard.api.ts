import { IApiResponse, IDashboardOverview } from "@/redux/rtkTypes/api.type";
import baseApi from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query<IApiResponse<IDashboardOverview>, void>(
      {
        query: () => ({
          url: "/dashboard/overview",
          method: "GET",
        }),

        providesTags: [
          "USER",
          "BLOG",
          "PROJECT",
          "ABOUT",
          "SKILL",
          "EXPERIENCE",
          "EDUCATION",
        ],
      },
    ),
  }),
});

export const { useGetDashboardOverviewQuery } = dashboardApi;
