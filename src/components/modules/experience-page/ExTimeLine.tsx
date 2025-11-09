"use client";

import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditExperienceModal from "@/components/shared/modals/EditExperienceModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Briefcase, Trash2 } from "lucide-react";

const ExTimeLine = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of microservices architecture",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description: "Built scalable web applications using React and Node.js",
    },
  ];

  const handleEdit = (title: string) => {
    console.log("Edit:", title);
  };

  const handleDelete = (title: string) => {
    console.log("Delete:", title);
  };

  return (
    <Card className="w-full bg-[#0B111E] border border-gray-800 text-white shadow-[0_0_25px_#000000] hover:shadow-[0_0_40px_#000000] transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-col lg:flex-row items-center justify-between pb-2">
        <div className="flex flex-col items-center lg:items-start">
          <CardTitle className="font-inter text-lg font-semibold text-white">
            Experience Timeline
          </CardTitle>
        </div>

        {/* <ProfileEditModal /> */}
      </CardHeader>

      <CardContent className="px-6">
        <Timeline>
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              step={exp.id}
              className="group-data-[orientation=vertical]/timeline:ms-10"
            >
              {/* Header Section */}
              <TimelineHeader>
                {/* Vertical Line */}
                <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 border border-gray-800 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.59rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />

                {/* Indicator Icon */}
                <TimelineIndicator
                  className="
                    flex size-8 items-center justify-center
                    group-data-[orientation=vertical]/timeline:-left-7
                    bg-[#2C2951] text-[#9767E4] rounded-full
                    
                  "
                >
                  <Briefcase size={16} />
                </TimelineIndicator>

                {/* Title and Actions */}
                <div className="flex w-full items-start justify-between">
                  <div>
                    <TimelineTitle className="text-base sm:text-lg font-semibold">
                      {exp.title}
                    </TimelineTitle>
                    <p className="text-sm text-[#9767E4]">{exp.company}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <EditExperienceModal />

                    <DeleteConfirmModal
                      title="Delete Experience"
                      description="Are you sure you want to delete this experience? This action cannot be undone."
                      onDelete={() => console.log("Experience deleted")}
                      trigger={
                        <Button
                          variant="ghost"
                          //   onClick={onDelete}
                          className="transition-all duration-300 ease-linear cursor-pointer hover:bg-red-400 hover:text-red-700 p-2.5 sm:p-3 rounded-xl"
                        >
                          <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Button>
                      }
                    />
                  </div>
                </div>
              </TimelineHeader>

              {/* Content */}
              <TimelineContent className="pl-1 mt-1">
                <p className="text-xs text-gray-400">{exp.period}</p>
                <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default ExTimeLine;
