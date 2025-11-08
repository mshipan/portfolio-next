import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import BlogSummaryCard from "./BlogSummaryCard";

const MonthlyBlogSummary = () => {
  const blogSummaryData = [
    { month: "Jan", count: 5 },
    { month: "Feb", count: 8 },
    { month: "Mar", count: 3 },
    { month: "Apr", count: 6 },
    { month: "May", count: 4 },
    { month: "Jun", count: 7 },
    { month: "Jul", count: 2 },
    { month: "Aug", count: 5 },
    { month: "Sep", count: 9 },
    { month: "Oct", count: 11 },
    { month: "Nov", count: 6 },
    { month: "Dec", count: 10 },
  ];
  return (
    <Card className="w-full border-gray-800 bg-[#0B111E]">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2">
            <Calendar className="text-[#9767e4]" />
            Monthly Blog Summary
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {blogSummaryData.map((item) => (
            <BlogSummaryCard
              key={item.month}
              month={item.month}
              count={item.count}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyBlogSummary;
