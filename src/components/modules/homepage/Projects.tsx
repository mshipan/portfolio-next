import HeaderSection from "@/components/shared/HeaderSection";
import ProjectCard from "../cards/project/ProjectCard";
import { Project } from "@/redux/rtkTypes/project.type";
import ShowMoreBtn from "@/components/shared/ShowMoreBtn";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const featuredProjects = projects
    ?.filter((project) => project.featured)
    ?.slice(0, 6);

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

      {projects?.length > 6 && <ShowMoreBtn href="/projects" />}
    </div>
  );
};

export default Projects;
