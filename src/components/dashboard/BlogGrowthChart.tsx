"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface BlogGrowthChartProps {
  data: {
    month: string;
    count: number;
  }[];
}

export const description = "A line chart with styled grid lines";

export function BlogGrowthChart({ data }: BlogGrowthChartProps) {
  const formattedData =
    data?.map((item) => {
      const date = new Date(item.month + "-01");

      return {
        month: date.toLocaleString("default", { month: "short" }),
        blogs: item.count,
      };
    }) ?? [];

  const chartConfig = {
    blogs: {
      label: "Blogs",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;
  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2 text-black dark:text-white">
            <TrendingUp className="text-[#9767e4]" />
            Blog Growth Trends
          </span>
        </CardTitle>
        <CardDescription>Last 12 months</CardDescription>
      </CardHeader>
      <CardContent>
        {formattedData?.length === 0 ? (
          <div className="flex items-center justify-center h-75 text-muted-foreground">
            No blog data available
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <LineChart
              data={formattedData}
              width={600}
              height={300}
              margin={{
                top: 20,
                left: 12,
                right: 12,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

              <YAxis tickLine={false} axisLine={false} domain={[0, "auto"]} />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Line
                dataKey="blogs"
                type="monotone"
                stroke="#9767e4"
                strokeWidth={2}
                dot={{ fill: "#9767e4" }}
                activeDot={{ r: 6 }}
              >
                <LabelList position="top" offset={12} fontSize={12} />
              </Line>
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
