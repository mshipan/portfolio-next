import HeaderSection from "@/components/shared/HeaderSection";
import { Briefcase, SquareArrowRight } from "lucide-react";

const Experience = () => {
  return (
    <div className="my-28">
      <div className="flex flex-col items-center gap-8">
        <HeaderSection
          titleFirstPart="work"
          titleSecondPart="experience"
          subTitle="My professional journey in web development"
        />
        <div>
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-[#11192c] text-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-800 flex flex-row gap-4">
              <div className="shrink-0">
                <div className="p-3 bg-[#2c2951] rounded-full mr-4 flex-shrink-0 mt-1">
                  <Briefcase color="#9767e4" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h1 className="text-xl leading-7 font-bold">
                    Senior Full Stack Developer
                  </h1>
                  <span className="text-sm leading-5 font-normal text-ring">
                    2022 - Present
                  </span>
                </div>

                <p className="text-base leading-6 font-semibold text-[#9767e4]">
                  Tech Innovations Inc.
                </p>

                <p className="text-base leading-6 font-normal text-ring">
                  Leading development of enterprise web applications using{" "}
                  React, TypeScript, and Node.js. Mentoring junior developers
                  and architecting scalable solutions.
                </p>

                <ul className="space-y-3 text-ring">
                  <li className="flex items-center">
                    <SquareArrowRight className="w-4 h-4 text-[#9767e4] mr-3 flex-shrink-0" />
                    <span className="text-sm leading-5 font-normal">
                      Improved application performance by 40%
                    </span>
                  </li>

                  <li className="flex items-center">
                    <SquareArrowRight className="w-4 h-4 text-[#9767e4] mr-3 flex-shrink-0" />
                    <span className="text-sm leading-5 font-normal">
                      Led team of 5 developers
                    </span>
                  </li>

                  <li className="flex items-center">
                    <SquareArrowRight className="w-4 h-4 text-[#9767e4] mr-3 flex-shrink-0" />
                    <span className="text-sm leading-5 font-normal">
                      Implemented CI/CD pipeline
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
