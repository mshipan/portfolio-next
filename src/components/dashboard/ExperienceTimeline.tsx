import {
  Timeline,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import TimelineBox from "./TimelineBox";
import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Experience {
  company: string;
  start: string;
  end: string;
  duration: number;
}

interface ExperienceTimelineProps {
  data?: Experience[];
}

export default function ExperienceTimeline({
  data = [],
}: ExperienceTimelineProps) {
  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-in-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2 text-black dark:text-white">
            <Briefcase className="text-[#9767e4]" />
            Experience Timeline
          </span>
        </CardTitle>
        <CardDescription>Professional journey</CardDescription>
      </CardHeader>
      <CardContent>
        {data?.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No experience data available.
          </p>
        ) : (
          <Timeline className="relative pl-6">
            {data.map((item, index) => {
              const startYear = new Date(item.start).getFullYear();
              const endYear = new Date(item.end).getFullYear();

              return (
                <TimelineItem
                  key={`${item.company}-${index}`}
                  step={index + 1}
                  className="relative pb-10 last:pb-0"
                >
                  <TimelineSeparator className="absolute left-0 top-0 flex flex-col items-center">
                    <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-purple-500/50 to-purple-500/10"></div>

                    <TimelineIndicator className="relative z-10 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  </TimelineSeparator>

                  <TimelineContent className="rounded-xl border border-gray-300 dark:border-gray-800 hover:border-purple-500 transition-all duration-500 ease-out bg-[#fdfdfd] dark:bg-[#04070C] px-5 py-4 backdrop-blur-sm">
                    <TimelineBox
                      title="Experience"
                      company={item.company}
                      start={startYear.toString()}
                      end={endYear.toString()}
                      duration={`${item.duration} year${
                        item.duration > 1 ? "s" : ""
                      }`}
                    />
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        )}
      </CardContent>
    </Card>
  );
}
