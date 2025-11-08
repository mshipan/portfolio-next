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

const items = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2022 → Present",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 → 2022",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Startup Inc.",
    period: "2019 → 2020",
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "Web Solutions",
    period: "2018 → 2019",
  },
];

export default function ExperienceTimeline() {
  return (
    <Card className="w-full border-gray-800 bg-[#0B111E]">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white">
          <span className="flex items-center gap-2">
            <Briefcase className="text-[#9767e4]" />
            Experience Timeline
          </span>
        </CardTitle>
        <CardDescription>Professional journey</CardDescription>
      </CardHeader>
      <CardContent>
        <Timeline className="relative pl-6">
          {items.map((item, index) => (
            <TimelineItem
              key={item.id}
              step={index + 1}
              className="relative pb-10 last:pb-0"
            >
              <TimelineSeparator className="absolute left-0 top-0 flex flex-col items-center">
                <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500/50 to-purple-500/10"></div>

                <TimelineIndicator className="relative z-10 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
              </TimelineSeparator>

              <TimelineContent className=" rounded-xl border border-gray-800 hover:border-purple-500  transition-all duration-500 ease-out bg-[#04070C] px-5 py-4 backdrop-blur-sm">
                <TimelineBox
                  title={item.title}
                  company={item.company}
                  start={item.period.split("→")[0].trim()}
                  end={item.period.split("→")[1].trim()}
                  duration={
                    item.id === 1
                      ? "2 years"
                      : item.id === 2
                      ? "2 years"
                      : "1 year"
                  }
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
