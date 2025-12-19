"use client";
import { Card, CardContent } from "@/components/ui/card";
import TechPill from "../../about-me-page/TechPill";

const ManageTechCard = () => {
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
  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out text-white">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {techs.map((tech, i) => (
            <TechPill
              key={i}
              name={tech.name}
              image={tech.image}
              onEdit={() => console.log("Edit", tech.name)}
              onDelete={() => console.log("Delete", tech.name)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ManageTechCard;
