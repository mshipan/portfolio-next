import HeaderSection from "@/components/shared/HeaderSection";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "MSc in Computer Science & Engineering",
      startYear: "2019",
      endYear: "2021",
      university: "Tech University",
      desc: "Specialized in software engineering and web technologies. Graduated with honors.",
      tags: [
        {
          gpa: "3.9/4.0",
          award: "Dean's List",
          other: "Research in Web Performance",
        },
      ],
    },
    {
      degree: "BSc in Computer Science & Engineering",
      startYear: "2014",
      endYear: "2019",
      university: "DIU University",
      desc: "Specialized in software engineering and web technologies. Graduated with honors.",
      tags: [
        {
          gpa: "3.9/4.0",
          award: "Dean's List",
          other: "Research in Web Performance",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center gap-8 py-20 sm:py-28 md:py-36 bg-white dark:bg-[#131a2c]">
      <HeaderSection
        titleSecondPart="education"
        subTitle="Academic background and achievements"
      />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        {educationData?.map((education, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#11192c] text-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-300 dark:hover:border-[#9767e4] dark:border-gray-800 flex flex-row gap-4 hover:border-[#9767e4] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(151,103,228,0.5)]"
          >
            <div className="shrink-0">
              <div className="p-3 bg-[#9767e45e] dark:bg-[#2c2951] rounded-full mr-4 shrink-0 mt-1">
                <GraduationCap color="#9767e4" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h1 className="text-xl leading-7 font-bold text-black dark:text-white">
                  {education.degree}
                </h1>
                <span className="text-sm leading-5 font-normal text-ring">
                  {education.startYear} - {education.endYear}
                </span>
              </div>
              <p className="text-base leading-6 font-semibold text-[#9767e4]">
                {education.university}
              </p>

              <p className="text-base leading-6 font-normal text-ring">
                {education.desc}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {education?.tags?.map((tag, j) => (
                  <div
                    key={j}
                    className="flex flex-col md:flex-row md:items-center gap-4"
                  >
                    <div className="dark:bg-[#2b3b55] px-4 py-1 rounded-full border border-gray-300 dark:border-gray-800 w-fit">
                      <p className="text-xs leading-4 font-normal text-ring">
                        GPA: {tag.gpa}
                      </p>
                    </div>

                    <div className="dark:bg-[#2b3b55] px-4 py-1 rounded-full border border-gray-300 dark:border-gray-800 w-fit">
                      <p className="text-xs leading-4 font-normal text-ring">
                        {tag.award}
                      </p>
                    </div>

                    <div className="dark:bg-[#2b3b55] px-4 py-1 rounded-full border border-gray-300 dark:border-gray-800 w-fit">
                      <p className="text-xs leading-4 font-normal text-ring">
                        {tag.other}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
