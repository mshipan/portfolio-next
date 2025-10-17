import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Skills from "@/components/modules/homepage/Skills";
import Experience from "@/components/modules/homepage/Experience";
import Education from "@/components/modules/homepage/Education";
import Projects from "@/components/modules/homepage/Projects";

const HomePage = () => {
  return (
    <div className="text-white">
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
};

export default HomePage;
