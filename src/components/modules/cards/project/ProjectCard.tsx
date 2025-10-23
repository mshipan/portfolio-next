import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  card: Project;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="bg-[#11192c] rounded-2xl overflow-hidden flex flex-col border border-gray-800 hover:border-[#9767e4] transition-all ease-in-out duration-500">
      <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-full aspect-[16/9]">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover transition duration-300 ease-in-out hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={card.id < 1}
        />
      </div>

      <div className="p-6 sm:p-7 flex flex-col gap-3 sm:gap-6 h-full">
        <Link href="/project">
          <h4 className="text-white hover:text-[#9767e4] text-lg sm:text-xl leading-7 font-bold">
            {card.title}
          </h4>
        </Link>

        <p className="text-sm leading-6 font-normal text-ring">{card.desc}</p>

        <div className="flex flex-wrap items-center gap-2">
          {card?.techs?.map((t) => (
            <span
              key={t}
              className="bg-[#47cfeb] px-3 py-1 rounded-full text-[#11192c] text-xs font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex w-full gap-4">
          <Button className="flex items-center justify-center gap-2 w-1/2 text-sm font-medium hover:bg-[#47cfeb] cursor-pointer">
            <Github className="w-4 h-4" />
            <span>Code</span>
          </Button>
          <Button className="flex items-center justify-center gap-2 w-1/2 text-sm font-medium bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer">
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
