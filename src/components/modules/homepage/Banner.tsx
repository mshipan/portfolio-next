"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mouse } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const connectLinks = [
    { path: "https://github.com", icon: Github },
    { path: "https://linkedin.com", icon: Linkedin },
    { path: "mailto:shipanmallik95@gmail.com", icon: Mail },
  ];

  const texts = [
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer",
  ];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [index, texts.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 h-dvh">
      <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-128px)]">
        <h4 className="capitalize text-xl leading-7 font-normal">
          hi, i&apos;m{" "}
          <span className="text-site-gradient font-semibold">
            shipan mallik
          </span>
        </h4>

        <div className="h-36 md:h-52 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={texts[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="text-site-gradient text-5xl md:text-8xl md:leading-24 font-black capitalize text-center max-w-3xl"
            >
              {texts[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-xl leading-7 font-normal text-ring max-w-2xl text-center">
          Crafting beautiful, performant, and scalable web applications with
          modern technologies. Passionate about clean code and exceptional user
          experiences.
        </p>

        <div className="flex items-center gap-6">
          <Button className="py-6 text-[14px] font-semibold leading-5 bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer">
            <span className="capitalize">get in touch</span>
            <ArrowRight />
          </Button>
          <Button className="py-6 text-[14px] font-semibold leading-5 capitalize bg-[#0b111e] hover:bg-[#47cfeb] duration-300 border-[0.5px] border-gray-800 cursor-pointer">
            view projects
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {connectLinks?.map((link) => (
            <div
              key={link.path}
              className="rounded-full flex items-center justify-center cursor-pointer text-white hover:text-[#9767e4] transition-all duration-300"
            >
              <Link href={link.path}>
                <link.icon className="text-2xl" />
              </Link>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-0"
        >
          <Mouse className="w-10 h-14 text-ring" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
