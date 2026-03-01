import HeaderSection from "@/components/shared/HeaderSection";
import { IEducation } from "@/redux/rtkTypes/education.type";
import { GraduationCap } from "lucide-react";

interface Props {
  educations: IEducation[];
}

const Education = ({ educations }: Props) => {
  return (
    <div className="flex flex-col items-center gap-8 py-20 sm:py-28 md:py-36 bg-white dark:bg-[#131a2c]">
      <HeaderSection
        titleSecondPart="education"
        subTitle="Academic background and achievements"
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {educations?.slice(0, 2)?.map((education, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-[#11192c] rounded-xl shadow-2xl p-6 md:p-8 border border-gray-300 dark:border-gray-800 flex flex-row items-start gap-6 transition-all duration-300 hover:border-[#9767e4] hover:shadow-[0_0_45px_rgba(151,103,228,0.2)]"
          >
            <div className="shrink-0">
              <div className="p-4 bg-[#9767e41a] dark:bg-[#2c2951] rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#9767e4]" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {education.startYear?.split("-")[0]} -{" "}
                  {education.endYear
                    ? education.endYear.split("-")[0]
                    : "Present"}
                </span>
              </div>

              <p className="text-lg font-semibold text-[#9767e4] mb-3">
                {education.institution}
              </p>

              <p className="text-base leading-6 font-normal text-ring whitespace-pre-wrap wrap-break-word">
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
