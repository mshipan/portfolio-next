import { Calendar, MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { FC } from "react";

interface TimelineBoxProps {
  title: string;
  company: string;
  start: string;
  end: string;
  duration: string;
}

const TimelineBox: FC<TimelineBoxProps> = ({
  title,
  company,
  start,
  end,
  duration,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
      {/* Left side */}
      <div className="space-y-1">
        <h1 className="text-base sm:text-lg font-semibold text-white leading-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-400">{company}</p>
        <p className="text-sm sm:text-base text-gray-300 font-medium inline-flex items-center gap-1">
          {start} <MoveRight width={14} height={14} /> {end}
        </p>
      </div>

      {/* Right side */}
      <Badge
        variant="outline"
        className="self-start sm:self-auto text-white text-xs sm:text-sm font-medium flex flex-row items-center gap-1 whitespace-nowrap"
      >
        <Calendar size={16} /> <span>{duration}</span>
      </Badge>
    </div>
  );
};

export default TimelineBox;
