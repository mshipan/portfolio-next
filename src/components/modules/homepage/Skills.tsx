import React from "react";
import TechnologySlider from "./TechnologySlider";
import HeaderSection from "@/components/shared/HeaderSection";

const Skills = () => {
  return (
    <div className="bg-[#131a2c] py-36 sm:py-28">
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
