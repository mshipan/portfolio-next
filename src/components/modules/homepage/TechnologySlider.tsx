"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { ISkill } from "@/redux/rtkTypes/skill.type";

interface Props {
  skills: ISkill[];
}

const TechnologySlider = ({ skills }: Props) => {
  if (!skills.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white dark:bg-[#11192c] border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 py-16 text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            No skills added yet
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Skills will appear here once they are added from the dashboard.
          </p>
        </div>
      </div>
    );
  }

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
        {skills?.map((tech, index) => (
          <SwiperSlide key={index} className="h-auto!">
            <div className="bg-white dark:bg-[#11192c] border border-gray-300 dark:border-gray-800 rounded-lg flex flex-col items-center justify-center p-3 sm:p-4 transition-transform duration-200">
              <Image
                src={tech.photo as string}
                alt={`${tech.name} logo`}
                width={40}
                height={40}
                priority={index < 4}
                className="hover:scale-105"
              />
              <h5 className="text-[10px] sm:text-xs font-medium mt-2 capitalize text-center truncate text-black dark:text-white">
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
