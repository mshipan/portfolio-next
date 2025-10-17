import HeaderSection from "@/components/shared/HeaderSection";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-40 bg-[#131a2c]">
      <HeaderSection
        titleSecondPart="education"
        subTitle="Academic background and achievements"
      />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <div className="bg-[#11192c] text-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-800 flex flex-row gap-4">
          <div className="shrink-0">
            <div className="p-3 bg-[#2c2951] rounded-full mr-4 shrink-0 mt-1">
              <GraduationCap color="#9767e4" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h1 className="text-xl leading-7 font-bold">
                Master of Science in Computer Science
              </h1>
              <span className="text-sm leading-5 font-normal text-ring">
                2017 - 2019
              </span>
            </div>
            <p className="text-base leading-6 font-semibold text-[#9767e4]">
              Tech University
            </p>

            <p className="text-base leading-6 font-normal text-ring">
              Specialized in software engineering and web technologies.
              Graduated with honors.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  GPA: 3.9/4.0
                </p>
              </div>
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  Dean&apos;s List
                </p>
              </div>
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  Research in Web Performance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#11192c] text-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-800 flex flex-row gap-4">
          <div className="shrink-0">
            <div className="p-3 bg-[#2c2951] rounded-full mr-4 shrink-0 mt-1">
              <GraduationCap color="#9767e4" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h1 className="text-xl leading-7 font-bold">
                Master of Science in Computer Science
              </h1>
              <span className="text-sm leading-5 font-normal text-ring">
                2017 - 2019
              </span>
            </div>
            <p className="text-base leading-6 font-semibold text-[#9767e4]">
              Tech University
            </p>

            <p className="text-base leading-6 font-normal text-ring">
              Specialized in software engineering and web technologies.
              Graduated with honors.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  GPA: 3.9/4.0
                </p>
              </div>
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  Dean&apos;s List
                </p>
              </div>
              <div className="bg-[#2b3b55] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-normal text-ring">
                  Research in Web Performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
