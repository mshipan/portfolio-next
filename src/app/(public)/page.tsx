import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Skills from "@/components/modules/homepage/Skills";
import Experience from "@/components/modules/homepage/Experience";
import Education from "@/components/modules/homepage/Education";
import Projects from "@/components/modules/homepage/Projects";
import Blogs from "@/components/modules/homepage/Blogs";
import GetInTouch from "@/components/modules/homepage/GetInTouch";
import {
  getAbout,
  getEducations,
  getExperiences,
  getSkills,
} from "@/services/about.service";
import { getProjects } from "@/services/project.service";
import { getBlogs } from "@/services/blog.service";

const HomePage = async () => {
  const aboutResponse = await getAbout();
  const about = aboutResponse.data;

  const skillResponse = await getSkills();
  const skills = skillResponse.data;

  const experienceResponse = await getExperiences();
  const experiences = experienceResponse.data;

  const educationResponse = await getEducations();
  const educations = educationResponse.data;

  const projectResponse = await getProjects();
  const projects = projectResponse.data;
  const publishedProjects = projects?.filter((project) => project.published);

  const blogResponse = await getBlogs();
  const blogs = blogResponse.data;
  const publishedBlogs = blogs?.filter((blog) => blog.published);

  return (
    <div className="text-white">
      <Banner aboutMe={about} />

      <div>
        <AboutMe aboutMe={about} />
        <Skills skills={skills} />
        {experiences?.length > 0 && <Experience experiences={experiences} />}
        {educations?.length > 0 && <Education educations={educations} />}
        {publishedProjects?.length > 0 && (
          <Projects projects={publishedProjects} />
        )}
        {publishedBlogs?.length > 0 && <Blogs blogs={publishedBlogs} />}
        <GetInTouch aboutMe={about} />
      </div>
    </div>
  );
};

export default HomePage;
