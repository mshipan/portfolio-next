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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
      <Swiper
        loop
        grabCursor
        slidesPerView={1}
        observer
        observeParents
        breakpointsBase="container"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 14 },
          768: { slidesPerView: 6, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 18 },
          1280: { slidesPerView: 6, spaceBetween: 22 },
        }}
        autoHeight
        centerInsufficientSlides
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="pb-8"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="bg-[#11192c] border border-gray-800 rounded-lg flex flex-col items-center justify-center p-3 sm:p-4 hover:scale-105 transition-transform duration-200">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={40}
                height={40}
                priority={index < 4}
              />
              <h5 className="text-[10px] sm:text-xs font-medium mt-2 capitalize text-center truncate">
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
