import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Skills from "@/components/modules/homepage/Skills";
import Experience from "@/components/modules/homepage/Experience";

const HomePage = () => {
  return (
    <div className="text-white">
      <Banner />
      <AboutMe />
      <Skills />
      {/* <AboutMe /> */}
      <Experience />
    </div>
  );
};

export default HomePage;
