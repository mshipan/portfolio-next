"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code } from "lucide-react";
import TechPill from "./TechPill";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddSkillModal from "@/components/shared/modals/AddSkillModal";

const SkillsCard = () => {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(5);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(8);
      } else {
        setVisibleCount(10);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const techs = [
    { name: "Next.js", image: "/images/nextjs.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "Next.js", image: "/images/nextjs.svg" },
    { name: "Typescript", image: "/images/typescript.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "Typescript", image: "/images/typescript.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "React", image: "/images/react.svg" },
  ];

  const visibleTechs = techs.slice(0, visibleCount);
  const remainingCount = techs.length - visibleTechs.length;

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-white hover:shadow-xl transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-row justify-between pb-2">
        <div className="flex flex-col items-start">
          <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
            <h1 className="inline-flex gap-2 items-center">
              <Code /> Skills
            </h1>
          </CardTitle>
          <CardDescription className="text-sm text-gray-400 text-left">
            My technical skills and expertise
          </CardDescription>
        </div>
        <AddSkillModal />
      </CardHeader>

      <CardContent className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {visibleTechs.map((tech, i) => (
            <TechPill
              key={i}
              name={tech.name}
              image={tech.image}
              onEdit={() => console.log("Edit", tech.name)}
              onDelete={() => console.log("Delete", tech.name)}
            />
          ))}

          {remainingCount > 0 && (
            <div
              onClick={() => router.push("/dashboard/skills")}
              className="
                flex items-center justify-center bg-[#f7f1f1] dark:bg-[#0D121A] text-black dark:text-white 
                cursor-pointer rounded-full px-5 py-3 w-fit
                hover:bg-[#47cfeb] border border-[#47cfeb] hover:text-black transition-all duration-300 whitespace-nowrap
              "
            >
              <h1 className="text-sm font-medium">{remainingCount} more →</h1>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
