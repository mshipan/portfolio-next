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

const ExperienceCard = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      startDate: "2020-01",
      endDate: "Present",
      description: "Leading development of enterprise applications",
    },
    {
      title: "Frontend Engineer",
      company: "Creative Studio",
      startDate: "2018-05",
      endDate: "2019-12",
      description:
        "Built interactive and accessible UIs using React and Next.js",
    },
  ];

  const handleEdit = (title: string) => {
    console.log("Edit:", title);
  };

  const handleDelete = (title: string) => {
    console.log("Delete:", title);
  };

  return (
    <Card className="w-full bg-[#0B111E] border border-gray-800 text-white">
      <CardHeader className="flex flex-col lg:flex-row justify-between pb-2">
        <div className="flex flex-col items-start">
          <CardTitle className="font-inter text-lg font-semibold text-white">
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
        <div className="flex flex-col gap-6">
          {experiences?.slice(0, 2)?.map((exp, i) => (
            <ExperiencePill
              key={i}
              title={exp.title}
              company={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              description={exp.description}
              onEdit={() => handleEdit(exp.title)}
              onDelete={() => handleDelete(exp.title)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
