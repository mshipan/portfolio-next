import AboutMe from "@/components/modules/homepage/AboutMe";
import Banner from "@/components/modules/homepage/Banner";
import Experience from "@/components/modules/homepage/Experience";

const HomePage = () => {
  return (
    <div className="text-white">
      <Banner />
      {/* <AboutMe /> */}
      <Experience />
    </div>
  );
};

export default HomePage;
