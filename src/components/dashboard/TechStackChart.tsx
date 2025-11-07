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

export const description = "A bar chart with styled grid lines";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function TechStackChart() {
  return (
    <Card className="w-full bg-transparent border-gray-800">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2">
            <ChevronsLeftRight className="text-[#47cfeb]" />
            Tech Stack Usage
          </span>
        </CardTitle>
        <CardDescription>Most used technologies</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 20,
            }}
            // width={600}
            height={300} // ensures grid boxes look more square
          >
            {/* Dotted grid with low opacity */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.3)"
              strokeOpacity={0.2}
              vertical={true}
              horizontal={true}
            />

            {/* Y Axis (left line) — strong opacity */}
            <YAxis
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.8)", strokeWidth: 1.5 }}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
              domain={[0, "auto"]}
            />

            {/* X Axis (bottom line) — strong opacity */}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={{ stroke: "rgba(255,255,255,0.8)", strokeWidth: 1.5 }}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* Bars */}
            <Bar dataKey="desktop" fill="#47cfeb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
