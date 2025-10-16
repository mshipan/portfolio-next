"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const TechnologySlider = () => {
  const technologies = [
    { name: "React", src: "/images/react.svg" },
    { name: "Next.js", src: "/images/nextjs.svg" },
    { name: "TypeScript", src: "/images/typescript.svg" },
    { name: "Node.js", src: "/images/react.svg" },
    { name: "Express", src: "/images/nextjs.svg" },
    { name: "Tailwind", src: "/images/typescript.svg" },
    { name: "MongoDB", src: "/images/react.svg" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
      <Swiper
        loop={true}
        grabCursor={true}
        // Added slidesPerView={2} as a default for mobile view
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // **FIX 2: Tweaked breakpoints for better spacing on mobile**
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, // Mobile S/M: show 3 items
          480: { slidesPerView: 4, spaceBetween: 12 }, // Mobile L: show 4 items
          640: { slidesPerView: 5, spaceBetween: 16 }, // sm: show 5 items
          768: { slidesPerView: 6, spaceBetween: 20 }, // md: show 6 items
          1024: { slidesPerView: 7, spaceBetween: 24 }, // lg: show 7 items
          1280: { slidesPerView: 8, spaceBetween: 28 }, // xl: show 8 items
        }}
        className="pb-8" // Added bottom padding to make sure the navigation dots are visible
      >
        {/* Duplicating array for 'loop' mode */}
        {technologies.concat(technologies).map((tech, index) => (
          <SwiperSlide key={index}>
            {/* **FIX 3: Reduced Padding and Image Size Significantly**
                This allows 3-4 items to fit on a small mobile screen (320px).
            */}
            <div className="bg-[#11192c] border border-gray-800 rounded-lg flex flex-col items-center justify-center p-3 sm:p-4 w-full h-full hover:scale-105 transition-transform duration-200">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                // Reduced size for better fit
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12" // Ensure a fixed size on the image element
              />
              <h5 className="text-[10px] sm:text-xs font-medium mt-2 capitalize text-center">
                {tech.name}
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologySlider;
