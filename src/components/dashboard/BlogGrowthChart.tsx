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

export const description = "A line chart with styled grid lines";

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 300, mobile: 100 },
  { month: "Aug", desktop: 265, mobile: 543 },
  { month: "Sep", desktop: 564, mobile: 654 },
  { month: "Oct", desktop: 123, mobile: 321 },
  { month: "Nov", desktop: 987, mobile: 345 },
  { month: "Dec", desktop: 234, mobile: 657 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function BlogGrowthChart() {
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
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 20,
            }}
            // 👇 This keeps aspect ratio more square-ish
            width={600}
            height={300}
          >
            {/* Dotted grid lines with low opacity */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.3)"
              strokeOpacity={0.2}
              horizontal={true}
              vertical={true}
            />

            {/* Y Axis (left line) — make solid and high opacity */}
            <YAxis
              tickLine={false}
              axisLine={{
                stroke: "var(--foreground)",
                strokeWidth: 1.5,
              }}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
              domain={[0, "auto"]}
            />

            {/* X Axis (bottom line) — solid and high opacity */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={{
                stroke: "var(--foreground)",
                strokeWidth: 1.5,
              }}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{
                fill: "var(--muted-foreground)",
                fontSize: 12,
              }}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Line
              dataKey="desktop"
              type="monotone"
              stroke="#9767e4"
              strokeWidth={2}
              dot={{
                fill: "#9767e4",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
