"use client";
import { Card, CardContent } from "@/components/ui/card";
import TechPill from "../../about-me-page/TechPill";
import { useGetAllSkillQuery } from "@/redux/features/skill/skill.api";
import { AlertCircle, Loader2 } from "lucide-react";

const ManageTechCard = () => {
  const { data, isLoading, isError } = useGetAllSkillQuery(undefined);

  const techs = data?.data || [];
  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out text-white">
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center py-5">
            <Loader2 className="w-6 h-6 animate-spin text-[#47cfeb]" />
            <span className="ml-2 text-gray-500 dark:text-gray-400">
              Loading skills...
            </span>
          </div>
        )}

        {isError && (
          <div className="flex flex-col items-center justify-center py-5 text-center">
            <AlertCircle className="w-6 h-6 text-red-500 mb-2" />
            <p className="text-red-500 font-medium">Failed to load skills</p>
            <p className="text-sm text-gray-500">
              Please try refreshing the page.
            </p>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            {techs.length === 0 ? (
              <div className="text-center py-5 text-gray-500 dark:text-gray-400">
                No skills found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {techs.map((tech) => (
                  <TechPill key={tech.id} skill={tech} />
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ManageTechCard;
