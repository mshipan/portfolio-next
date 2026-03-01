"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mouse } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { scrollToSection } from "@/lib/scrollTo";
import { IGetAbout } from "@/redux/rtkTypes/about.type";

gsap.registerPlugin(ScrollToPlugin);

interface Props {
  aboutMe?: IGetAbout;
}

const Banner = ({ aboutMe }: Props) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  const connectLinks = [
    { path: aboutMe?.github, icon: Github },
    { path: aboutMe?.linkedIn, icon: Linkedin },
    { path: `mailto:${aboutMe?.email}`, icon: Mail },
  ];

  const texts = [
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!textRef.current) return;

      gsap.to(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % texts.length);

          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.3 },
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    if (!mouseRef.current) return;

    gsap.to(mouseRef.current, {
      y: -30,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  const handleScrollToProjects = () => {
    scrollToSection("projects");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 min-h-svh">
      <div className="relative flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-128px)]">
        <h4 className="capitalize text-xl leading-7 font-normal text-[#6b7280] dark:text-white">
          hi, i&apos;m{" "}
          <span className="text-site-gradient font-semibold">
            {aboutMe?.name}
          </span>
        </h4>

        <div className="h-36 md:h-52 flex items-center justify-center overflow-hidden">
          <div
            ref={textRef}
            className="text-site-gradient text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black capitalize text-center max-w-3xl"
          >
            {texts[index]}
          </div>
        </div>

        <p className="text-xl leading-7 font-normal text-[#6b7280] dark:text-white max-w-2xl text-center">
          Crafting beautiful, performant, and scalable web applications with
          modern technologies. Passionate about clean code and exceptional user
          experiences.
        </p>

        <div className="flex items-center gap-6">
          <Button
            onClick={handleScrollToContact}
            className="py-6 text-[14px] font-semibold leading-5 bg-linear-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer"
          >
            <span className="capitalize">get in touch</span>
            <ArrowRight />
          </Button>
          <Button
            onClick={handleScrollToProjects}
            className="py-6 text-[14px] font-semibold leading-5 capitalize bg-[#0b111e] hover:bg-[#47cfeb] duration-300 border-[0.5px] hover:border-[#47cfeb] dark:border-gray-800 cursor-pointer dark:text-white"
          >
            view projects
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {connectLinks?.map((link) => (
            <div
              key={link.path}
              className="rounded-full flex items-center justify-center cursor-pointer text-[#6b7280] dark:text-white hover:text-[#9767e4] transition-all duration-300"
            >
              <Link
                href={link.path as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="text-2xl" />
              </Link>
            </div>
          ))}
        </div>
        <div ref={mouseRef} className="absolute bottom-0">
          <Mouse className="w-10 h-14 text-[#6b7280] dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
