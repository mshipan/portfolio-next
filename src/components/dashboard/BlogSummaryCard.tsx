import { FC } from "react";

interface BlogSummaryCardProps {
  month: string | Date | number;
  count: number;
}

const BlogSummaryCard: FC<BlogSummaryCardProps> = ({ month, count }) => {
  let monthLabel = "";

  if (typeof month === "string" && isNaN(Number(month))) {
    monthLabel = month.slice(0, 3);
  } else if (typeof month === "number") {
    const date = new Date(2000, month - 1);
    monthLabel = date.toLocaleString("default", { month: "short" });
  } else {
    const date = new Date(month);
    monthLabel = date.toLocaleString("default", { month: "short" });
  }

  return (
    <div className="p-4 border border-gray-300 dark:border-gray-800 hover:border-[#9767E4] bg-[#fafafa] dark:bg-[#04070C] transition-all duration-500 ease-out rounded-2xl flex flex-col items-center justify-center gap-1">
      <h1 className="text-2xl leading-8 font-bold text-[#9767E4]">{count}</h1>
      <p className="text-xs leading-4 font-normal text-ring">{monthLabel}</p>
    </div>
  );
};

export default BlogSummaryCard;
