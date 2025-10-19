import HeaderSection from "@/components/shared/HeaderSection";
import { ChevronsLeftRight, Rocket, Users } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-16 sm:py-20 min-h-[60svh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-16 flex flex-col items-center justify-center gap-6">
        <HeaderSection
          titleFirstPart="about"
          titleSecondPart="me"
          subTitle=" I'm a passionate full-stack developer with 2+ years of experience
          building web applications that make a difference. I specialize in
          React, TypeScript, and Node.js, with a strong focus on creating
          performant, accessible, and beautiful user interfaces."
        />

        {/* was: md:grid-cols-2 → start 2-col earlier on small/larger phones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Card */}
          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <ChevronsLeftRight
              size={40}
              className="text-[#9767e4] mb-1 sm:size-12"
            />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              clean code
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Writing maintainable, scalable code following best practices
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <Rocket size={40} className="text-[#9767e4] mb-1 sm:size-12" />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              performance
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Optimizing applications for speed and efficiency
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <Users size={40} className="text-[#9767e4] mb-1 sm:size-12" />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              user-centric
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Creating intuitive experiences that users love
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <ChevronsLeftRight
              size={40}
              className="text-[#9767e4] mb-1 sm:size-12"
            />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              responsive design
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Building seamless experiences across all devices
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <Rocket size={40} className="text-[#9767e4] mb-1 sm:size-12" />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              modern technologies
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Leveraging cutting-edge tools and frameworks
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-5 sm:p-8 flex flex-col items-start gap-3">
            <Users size={40} className="text-[#9767e4] mb-1 sm:size-12" />
            <h3 className="capitalize text-lg sm:text-xl font-bold leading-7">
              collaboration
            </h3>
            <p className="text-sm sm:text-base font-normal leading-6 text-ring">
              Working effectively in agile team environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
