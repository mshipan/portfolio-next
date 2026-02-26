import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import BlogSummaryCard from "./BlogSummaryCard";

interface BlogGrowth {
  month: string;
  count: number;
}

interface MonthlyBlogSummaryProps {
  data?: BlogGrowth[];
}

const MonthlyBlogSummary = ({ data = [] }: MonthlyBlogSummaryProps) => {
  const formattedData = data.map((item) => {
    const [year, month] = item.month.split("-");
    const date = new Date(Number(year), Number(month) - 1);

    return {
      month: date.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      }),
      count: item.count,
    };
  });

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2 text-black dark:text-white">
            <Calendar className="text-[#9767e4]" />
            Monthly Blog Summary
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formattedData?.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No monthly blog data available.
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {formattedData.map((item) => (
              <BlogSummaryCard
                key={item.month}
                month={item.month}
                count={item.count}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyBlogSummary;
