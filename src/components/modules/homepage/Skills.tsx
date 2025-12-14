import React from "react";
import TechnologySlider from "./TechnologySlider";
import HeaderSection from "@/components/shared/HeaderSection";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-white dark:bg-[#131a2c] py-20 sm:py-28 md:py-36"
    >
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <HeaderSection
          titleFirstPart="skills &"
          titleSecondPart="technologies"
          subTitle=" A comprehensive toolkit for building modern web applications"
        />
        <TechnologySlider />
      </div>
    </div>
  );
};

export default Skills;
