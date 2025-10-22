import HeaderSection from "@/components/shared/HeaderSection";
import ProjectCard from "../cards/project/ProjectCard";
import { Project } from "@/types";

const cards: Project[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: "E-Commerce Platform",
  desc: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
  img: "/images/project1.jpeg",
  techs: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
}));

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-36">
      <HeaderSection
        titleFirstPart="featured"
        titleSecondPart="projects"
        subTitle="A selection of projects that showcase my skills and expertise"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {cards.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
