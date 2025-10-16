import HeaderSection from "@/components/shared/HeaderSection";
import { ChevronsLeftRight, Rocket, Users } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="h-dvh">
      <div className="max-w-7xl mx-auto md:px-16 flex flex-col items-center justify-center h-full gap-6">
        <HeaderSection
          titleFirstPart="about"
          titleSecondPart="me"
          subTitle=" I'm a passionate full-stack developer with 2+ years of experience
          building web applications that make a difference. I specialize in
          React, TypeScript, and Node.js, with a strong focus on creating
          performant, accessible, and beautiful user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <ChevronsLeftRight size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              clean code
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Writing maintainable, scalable code following best practices
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <Rocket size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              performance
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Optimizing applications for speed and efficiency
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <Users size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              user-centric
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Creating intuitive experiences that users love
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <ChevronsLeftRight size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              responsive design
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Building seamless experiences across all devices
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <Rocket size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              modern technologies
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Leveraging cutting-edge tools and frameworks
            </p>
          </div>

          <div className="bg-[#11192c] border border-gray-800 rounded-md p-8 flex flex-col items-start gap-3">
            <Users size={48} className="text-[#9767e4] mb-1" />
            <h3 className="capitalize text-xl font-bold leading-7">
              collaboration
            </h3>
            <p className="text-base font-normal leading-6 text-ring">
              Working effectively in agile team environments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
