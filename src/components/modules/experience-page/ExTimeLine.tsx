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
import {
  useDeleteExperienceMutation,
  useGetAllExperienceQuery,
} from "@/redux/features/experience/experience.api";
import { Briefcase, Trash2 } from "lucide-react";
import { toast } from "sonner";

const ExTimeLine = () => {
  const { data, isLoading, isError, refetch } =
    useGetAllExperienceQuery(undefined);

  const allExperiences = data?.data || [];

  const experiences = allExperiences?.map((exp: any) => {
    const startYear = new Date(exp.startYear).getFullYear();
    const endYear = exp.endYear
      ? new Date(exp.endYear).getFullYear()
      : "Present";

    return {
      ...exp,
      period: `${startYear} - ${endYear}`,
    };
  });

  const [deleteExperience, { isLoading: isDeleting }] =
    useDeleteExperienceMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting experience...");

    try {
      await deleteExperience(id).unwrap();
      toast.success("Experience deleted successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to delete experience.", { id: toastId });
    }
  };

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-black dark:text-white hover:shadow-xl transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-col lg:flex-row items-start justify-between pb-2">
        <div className="flex flex-col items-center md:items-start">
          <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
            Experience Timeline
          </CardTitle>
        </div>

        {/* <ProfileEditModal /> */}
      </CardHeader>

      <CardContent className="px-6">
        {isLoading && (
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="h-20 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <p className="text-sm text-red-500">
              Failed to load experiences. Please try again.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => refetch()}
            >
              Retry
            </Button>
          </div>
        )}

        {!isLoading && !isError && experiences?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
            <Briefcase className="mb-3 h-8 w-8 opacity-50" />
            <p>No experiences added yet.</p>
          </div>
        )}

        {!isLoading && !isError && experiences?.length > 0 && (
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
                  <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 border border-gray-300 dark:border-gray-800 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.59rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />

                  {/* Indicator Icon */}
                  <TimelineIndicator className="flex size-8 items-center justify-center group-data-[orientation=vertical]/timeline:-left-7 bg-[#d6c4f2] dark:bg-[#2C2951] text-[#9767E4] rounded-full">
                    <Briefcase size={16} />
                  </TimelineIndicator>

                  {/* Title and Actions */}
                  <div className="flex w-full items-start justify-between">
                    <div>
                      <TimelineTitle className="text-base sm:text-lg font-semibold">
                        {exp.jobTitle}
                      </TimelineTitle>
                      <p className="text-sm text-[#9767E4]">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <EditExperienceModal experience={exp} />

                      <DeleteConfirmModal
                        title="Delete Experience"
                        description="Are you sure you want to delete this experience? This action cannot be undone."
                        onDelete={() => handleDelete(exp.id)}
                        isLoading={isDeleting}
                        trigger={
                          <Button
                            variant="ghost"
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
                  <p className="text-xs text-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </CardContent>
    </Card>
  );
};

export default ExTimeLine;
