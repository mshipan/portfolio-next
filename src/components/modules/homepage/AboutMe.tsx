import HeaderSection from "@/components/shared/HeaderSection";
import { ChevronsLeftRight, Rocket, Users } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  const aboutMeData = [
    {
      icon: ChevronsLeftRight,
      title: "clean code",
      desc: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "performance",
      desc: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "user-centric",
      desc: "Creating intuitive experiences that users love",
    },
    {
      icon: ChevronsLeftRight,
      title: "responsive design",
      desc: "Building seamless experiences across all devices",
    },
    {
      icon: Rocket,
      title: "modern technologies",
      desc: "Leveraging cutting-edge tools and frameworks",
    },
    {
      icon: Users,
      title: "collaboration",
      desc: "Working effectively in agile team environments",
    },
  ];

  return (
    <section id="about" className="pb-8 sm:py-20 min-h-[60svh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-16 flex flex-col items-center justify-center gap-6">
        <div className="relative w-40 h-40 rounded-full border-4 border-[#9767e4] transition-shadow duration-300 shadow-[0_0_45px_rgba(151,103,228,0.5)] hover:shadow-[0_0_60px_#9767e4]">
          <Image
            src="/images/user.png"
            alt="user image"
            fill
            className="absolute top-0 object-cover"
          />
        </div>
        <HeaderSection
          titleFirstPart="about"
          titleSecondPart="me"
          subTitle=" I'm a passionate full-stack developer with 2+ years of experience
          building web applications that make a difference. I specialize in
          React, TypeScript, and Node.js, with a strong focus on creating
          performant, accessible, and beautiful user interfaces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {aboutMeData?.map((about, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#11192c] border border-gray-300 dark:border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3 hover:border-[#9767e4] dark:hover:border-[#9767e4] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(151,103,228,0.5)]"
            >
              <about.icon
                size={40}
                className="text-[#9767e4] mb-1 sm:size-12"
              />
              <h3 className="capitalize text-lg sm:text-xl font-bold leading-7 text-black dark:text-white">
                {about.title}
              </h3>
              <p className="text-sm sm:text-base font-normal leading-6 text-ring">
                {about.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
