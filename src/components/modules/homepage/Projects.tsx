import HeaderSection from "@/components/shared/HeaderSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <HeaderSection
        titleFirstPart="featured"
        titleSecondPart="projects"
        subTitle="A selection of projects that showcase my skills and expertise"
      />

      <div className="grid grid-cols-3 gap-6">
        <div>
          <Image
            src="/images/project1.jpeg"
            alt="Project number 1"
            width={64}
            height={64}
          />
          <div>
            <h4 className="text-white hover:text-[#9767e4] text-xl leading-7 font-bold">
              E-Commerce Platform
            </h4>
            <p className="text-sm leading-5 font-normal text-ring">
              A full-stack e-commerce solution with payment integration,
              inventory management, and real-time analytics.
            </p>

            <div className="text-[#11192c] flex items-center gap-2">
              <div className="bg-[#47cfeb] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-semibold">React</p>
              </div>
              <div className="bg-[#47cfeb] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-semibold">Node.js</p>
              </div>
              <div className="bg-[#47cfeb] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-semibold">PostgreSQL</p>
              </div>
              <div className="bg-[#47cfeb] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-semibold">Stripe</p>
              </div>
              <div className="bg-[#47cfeb] px-4 py-1 rounded-full">
                <p className="text-xs leading-4 font-semibold">Redis</p>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <Button className="flex items-center gap-3 text-sm leading-5 font-medium">
                <Github />
                <p>Code</p>
              </Button>
              <Button className="flex items-center gap-3 text-sm leading-5 font-medium">
                <ExternalLink />
                <p>Code</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
