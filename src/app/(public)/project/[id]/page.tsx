import ProjectCard from "@/components/modules/cards/project/ProjectCard";
import BackLink from "@/components/shared/BackLink";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import {
  Check,
  ExternalLink,
  Facebook,
  Github,
  Link2,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const SingleProjectPage = () => {
  const cards: Project[] = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    img: "/images/project1.jpeg",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-6 sm:py-8 lg:py-12 flex flex-col gap-10 sm:gap-12">
      <div className="flex flex-col gap-4 sm:gap-6">
        <BackLink targetId="projects" label="back to projects" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-black dark:text-white">
          E-Commerce Platform
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-ring">
          A full-stack e-commerce solution with payment integration, inventory
          management, and real-time analytics.
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {["react", "next", "typescript", "node", "express"]?.map((t) => (
            <span
              key={t}
              className="bg-[#47cfeb] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[#11192c] text-xs sm:text-sm font-semibold capitalize"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button className="flex-1 sm:flex-none sm:w-auto flex items-center justify-center gap-2 text-sm font-medium bg-linear-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer text-white">
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </Button>
          <Button className="flex-1 sm:flex-none sm:w-auto flex items-center justify-center gap-2 text-sm font-medium bg-white dark:bg-black hover:bg-[#47cfeb] dark:hover:bg-[#47cfeb] cursor-pointer text-black dark:text-white border border-gray-300 dark:border-gray-800">
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </Button>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/images/project1.jpeg"
          alt="project image"
          width={1600}
          height={900}
          priority
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>

      <section className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white">
          About This Project
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-ring">
          This comprehensive e-commerce platform provides a complete solution
          for online retail businesses. Built with modern technologies, it
          features a responsive user interface, secure payment processing
          through Stripe, real-time inventory management, and detailed analytics
          dashboards. The platform supports multiple payment methods, automatic
          tax calculations, and integrates with major shipping providers. The
          admin panel offers powerful tools for managing products, orders, and
          customer relationships.
        </p>
      </section>

      <section className="flex flex-col gap-4 sm:gap-5">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-[#fcfcfc] dark:bg-[#11192c] flex items-center gap-3 text-ring p-4 rounded-xl border border-gray-300 dark:border-gray-800"
            >
              <Check className="text-[#9767e4]" />
              <p className="text-sm sm:text-base leading-6">
                Secure user authentication and authorization
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 dark:border-gray-800" />

      <section className="flex flex-col items-start gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white">
          Share this project
        </h2>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {[
            { Icon: Facebook, label: "Share on Facebook" },
            { Icon: Twitter, label: "Share on X/Twitter" },
            { Icon: Linkedin, label: "Share on LinkedIn" },
            { Icon: Link2, label: "Copy link" },
          ].map(({ Icon, label }, idx) => (
            <button
              key={idx}
              aria-label={label}
              className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg cursor-pointer hover:bg-[#47cfeb] text-black dark:text-white hover:text-white dark:hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#47cfeb]"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 sm:gap-5">
        <h2 className="text-2xl sm:text-3xl font-bold capitalize leading-tight text-black dark:text-white">
          Recent projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <ProjectCard card={card} key={card.id} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 sm:gap-5">
        <h2 className="text-2xl sm:text-3xl font-bold capitalize leading-tight text-black dark:text-white">
          Featured projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <ProjectCard card={card} key={card.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProjectPage;
