"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import ExperiencePill from "./ExperiencePill";
import AddExperienceModal from "@/components/shared/modals/AddExperienceModal";
import { useGetAboutQuery } from "@/redux/features/about/about.api";

const ExperienceCard = () => {
  const { data, isLoading, isError } = useGetAboutQuery(undefined);

  const experiences = data?.data?.experiences || [];

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-white hover:shadow-xl transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 pb-2">
        <div className="flex flex-col items-start">
          <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
            <h1 className="inline-flex gap-2 items-center">
              <Briefcase /> Experience
            </h1>
          </CardTitle>
          <CardDescription className="text-sm text-gray-400 text-center">
            My professional work history
          </CardDescription>
        </div>
        <AddExperienceModal />
      </CardHeader>

      <CardContent className="px-6">
        {isLoading && (
          <p className="text-sm text-gray-400 animate-pulse">
            Loading experiences...
          </p>
        )}

        {isError && (
          <div className="flex justify-center items-center py-5">
            <p className="text-sm text-red-500">
              Failed to load experiences. Please try again.
            </p>
          </div>
        )}

        {!isLoading && !isError && experiences.length === 0 && (
          <div className="flex justify-center items-center py-5">
            <p className="text-sm text-gray-400">No experience added yet.</p>
          </div>
        )}

        {!isLoading && !isError && experiences.length > 0 && (
          <div className="flex flex-col gap-6">
            {experiences.slice(0, 2).map((exp) => (
              <ExperiencePill key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
