"use client";

import { ChevronsLeftRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

interface TechStackChartProps {
  data: {
    tech: string;
    count: number;
  }[];
}

export const description = "A bar chart with styled grid lines";

export function TechStackChart({ data }: TechStackChartProps) {
  const chartData =
    data?.map((item) => ({
      tech: item.tech,
      count: item.count,
    })) ?? [];

  const chartConfig = {
    count: {
      label: "Usage",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2 text-black dark:text-white">
            <ChevronsLeftRight className="text-[#47cfeb]" />
            Tech Stack Usage
          </span>
        </CardTitle>
        <CardDescription>Most used technologies</CardDescription>
      </CardHeader>
      <CardContent>
        {chartData?.length === 0 ? (
          <div className="flex items-center justify-center h-75 text-muted-foreground">
            No tech stack data available
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart
              data={chartData}
              height={300}
              margin={{ top: 20, left: 12, right: 12, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.3)"
                strokeOpacity={0.2}
                vertical
                horizontal
              />

              <YAxis tickLine={false} axisLine={false} domain={[0, "auto"]} />

              <XAxis
                dataKey="tech"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              <Bar dataKey="count" fill="#47cfeb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
