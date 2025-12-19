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

const EducationCard = () => {
  const educations = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Tech University",
      startYear: "2016",
      endYear: "2020",
      description: "Focused on software engineering and web technologies",
    },
    {
      degree: "Frontend Bootcamp",
      institution: "Creative Studio",
      startYear: "2021-03",
      endYear: "2021-08",
      description:
        "Specialized in building interactive, responsive UI using React.js",
    },
  ];

  const handleEdit = (degree: string) => {
    console.log("Edit:", degree);
  };

  const handleDelete = (degree: string) => {
    console.log("Delete:", degree);
  };
  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-black dark:text-white shadow-[0_0_25px_#000000] hover:shadow-[0_0_40px_#000000] transition-shadow duration-500 ease-out">
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
        <div className="flex flex-col gap-6">
          {educations?.slice(0, 2)?.map((edu, i) => (
            <EducationPill
              key={i}
              degree={edu.degree}
              institution={edu.institution}
              startYear={edu.startYear}
              endYear={edu.endYear}
              description={edu.description}
              onEdit={() => handleEdit(edu.degree)}
              onDelete={() => handleDelete(edu.degree)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
