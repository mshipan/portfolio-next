"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import EducationPill from "./EducationPill";
import AddEducationModal from "@/components/shared/modals/AddEducationModal";
import { useGetAboutQuery } from "@/redux/features/about/about.api";

const EducationCard = () => {
  const { data, isLoading, isError } = useGetAboutQuery(undefined);

  const educations = data?.data?.educations || [];

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-black dark:text-white hover:shadow-xl transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 pb-2">
        <div className="flex flex-col items-start">
          <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
            <h1 className="inline-flex gap-2 items-center">
              <GraduationCap /> Education
            </h1>
          </CardTitle>
          <CardDescription className="text-sm text-gray-400 text-center">
            My academic background
          </CardDescription>
        </div>
        <AddEducationModal />
      </CardHeader>

      <CardContent className="px-6">
        {isLoading && (
          <p className="text-sm text-gray-400 animate-pulse">
            Loading educations...
          </p>
        )}

        {isError && (
          <div className="flex justify-center items-center py-5">
            <p className="text-sm text-red-500">
              Failed to load educations. Please try again.
            </p>
          </div>
        )}

        {!isLoading && !isError && educations?.length === 0 && (
          <div className="flex justify-center items-center py-5">
            <p className="text-sm text-gray-400">No education added yet.</p>
          </div>
        )}

        {!isLoading && !isError && educations?.length > 0 && (
          <div className="flex flex-col gap-6">
            {educations?.slice(0, 2)?.map((edu) => (
              <EducationPill key={edu.id} education={edu} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
