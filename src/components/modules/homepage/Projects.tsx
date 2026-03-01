import HeaderSection from "@/components/shared/HeaderSection";
import ProjectCard from "../cards/project/ProjectCard";
import { Project } from "@/redux/rtkTypes/project.type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const featuredProjects = projects?.slice(0, 6);

  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-36"
    >
      <HeaderSection
        titleFirstPart="featured"
        titleSecondPart="projects"
        subTitle="A selection of projects that showcase my skills and expertise"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {featuredProjects?.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </div>

      {projects?.length > 6 && (
        <div className="mt-8">
          <Button
            asChild
            className="bg-[#9767e4] hover:bg-[#8354d1] text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#9767e45e]"
          >
            <Link href="/projects" className="flex items-center gap-2">
              Show More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
