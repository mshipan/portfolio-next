import React from "react";
import TechnologySlider from "./TechnologySlider";

const Skills = () => {
  return (
    <div className="bg-[#131a2c] py-36 sm:py-28">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="capitalize text-3xl sm:text-4xl md:text-5xl font-black">
          skills & <span className="text-site-gradient">technologies</span>
        </h1>
        <p className="text-base sm:text-lg leading-7 font-normal text-ring max-w-2xl">
          A comprehensive toolkit for building modern web applications
        </p>
        <TechnologySlider />
      </div>
    </div>
  );
};

export default Skills;
