import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Skills from "@/components/modules/homepage/Skills";

const HomePage = () => {
  return (
    <div className="text-white">
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default HomePage;
