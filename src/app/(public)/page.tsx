import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Skills from "@/components/modules/homepage/Skills";
import Experience from "@/components/modules/homepage/Experience";
import Education from "@/components/modules/homepage/Education";
import Projects from "@/components/modules/homepage/Projects";
import Blogs from "@/components/modules/homepage/Blogs";

const HomePage = () => {
  return (
    <div className="text-white">
      <Banner />

      <div className="px-4 sm:px-6">
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Blogs />
      </div>
    </div>
  );
};

export default HomePage;
