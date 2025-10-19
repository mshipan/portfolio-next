import HeaderSection from "@/components/shared/HeaderSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const techs = ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"];

const cards = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: "E-Commerce Platform",
  desc: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
  img: "/images/project1.jpeg",
}));

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 py-36 sm:py-28">
      <HeaderSection
        titleFirstPart="featured"
        titleSecondPart="projects"
        subTitle="A selection of projects that showcase my skills and expertise"
      />

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#11192c] rounded-2xl overflow-hidden flex flex-col border border-gray-900 hover:border-[#9767e4] transition-all ease-in-out duration-500"
          >
            {/* Responsive image with safe cropping */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-full aspect-[16/9]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition duration-300 ease-in-out hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={card.id < 1}
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col gap-3 sm:gap-6 h-full">
              <Link href="/">
                <h4 className="text-white hover:text-[#9767e4] text-lg sm:text-xl leading-7 font-bold">
                  {card.title}
                </h4>
              </Link>

              <p className="text-sm leading-6 font-normal text-ring">
                {card.desc}
              </p>

              {/* Tech tags wrap on small screens */}
              <div className="flex flex-wrap items-center gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="bg-[#47cfeb] px-3 py-1 rounded-full text-[#11192c] text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 50/50 buttons, full width of card */}
              <div className="flex w-full gap-4">
                <Button className="flex items-center justify-center gap-2 w-1/2 text-sm font-medium hover:bg-[#47cfeb] cursor-pointer">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </Button>
                <Button className="flex items-center justify-center gap-2 w-1/2 text-sm font-medium bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
