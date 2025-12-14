import HeaderSection from "@/components/shared/HeaderSection";
import { Briefcase, SquareArrowRight } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      title: "Senior Full Stack Developer",
      startYear: "2024",
      endYear: "Present",
      company: "Tech Innovations Inc.",
      desc: "Leading development of enterprise web applications using React, TypeScript, and Node.js. Mentoring junior developers and architecting scalable solutions.",
      points: [
        { text: "Improved application performance by 40%" },
        { text: "Led team of 5 developers" },
        { text: "Implemented CI/CD pipeline" },
      ],
    },
    {
      title: "Senior Full Stack Developer",
      startYear: "2022",
      endYear: "2024",
      company: "Tech Innovations Inc.",
      desc: "Leading development of enterprise web applications using React, TypeScript, and Node.js. Mentoring junior developers and architecting scalable solutions.",
      points: [
        { text: "Improved application performance by 40%" },
        { text: "Led team of 5 developers" },
        { text: "Implemented CI/CD pipeline" },
      ],
    },
  ];
  return (
    <div id="experience" className="my-28">
      <div className="flex flex-col items-center gap-8">
        <HeaderSection
          titleFirstPart="work"
          titleSecondPart="experience"
          subTitle="My professional journey in web development"
        />
        <div>
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
            {experienceData?.map((exper, i) => (
              <div
                key={i}
                className="bg-[#fafafa] dark:bg-[#11192c] text-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-300 dark:border-gray-800 flex flex-row gap-2 md:gap-4 hover:border-[#9767e4] dark:hover:border-[#9767e4] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(151,103,228,0.5)]"
              >
                <div className="shrink-0">
                  <div className="p-3 bg-[#9767e45e] dark:bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
                    <Briefcase color="#9767e4" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h1 className="text-xl leading-7 font-bold text-black dark:text-white">
                      {exper.title}
                    </h1>
                    <span className="text-sm leading-5 font-normal text-ring">
                      {exper.startYear} - {exper.endYear}
                    </span>
                  </div>

                  <p className="text-base leading-6 font-semibold text-[#9767e4]">
                    {exper.company}
                  </p>

                  <p className="text-base leading-6 font-normal text-ring">
                    {exper.desc}
                  </p>

                  <ul className="space-y-3 text-ring">
                    {exper.points?.map((point, j) => (
                      <li key={j} className="flex items-center">
                        <SquareArrowRight className="w-4 h-4 text-[#9767e4] mr-3 shrink-0" />
                        <span className="text-sm leading-5 font-normal">
                          {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
