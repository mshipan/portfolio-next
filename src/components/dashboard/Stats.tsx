"use client";

import { ElementType } from "react";
import CircleLight from "../shared/CircleLight";

interface StatDetail {
  value: number | string;
  label: string;
  icon: ElementType;
  iconColor?: string;
}

interface StatsProps {
  mainIcon: ElementType;
  mainIconColor?: string;
  title: string;
  total: number | string;
  details?: StatDetail[];
  backgroundIcon?: ElementType; // CircleLight
  className?: string;
  extraIcon?: ElementType; // optional icon on top-right like TrendingUp
  extraIconColor?: string;
}

const Stats = ({
  mainIcon: MainIcon,
  mainIconColor = "#9767e4",
  title,
  total,
  details = [],
  backgroundIcon: BackgroundIcon = CircleLight,
  className = "",
  extraIcon: ExtraIcon,
}: StatsProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-2xl w-full lg:w-1/5 ${className}`}
    >
      {BackgroundIcon && (
        <BackgroundIcon className="absolute -top-14 -left-12" />
      )}

      <div className="border border-gray-300 dark:border-gray-800 rounded-xl hover:border-[#9767E4] transition-all duration-500 ease-out p-6 space-y-4 w-full h-full min-h-[200px]">
        <div className="flex items-center justify-between">
          <MainIcon className="size-8" color={mainIconColor} />
          {ExtraIcon && <ExtraIcon className="text-ring" />}
        </div>

        <div className="space-y-2">
          <div>
            <h1 className="text-3xl font-bold leading-9 text-black dark:text-white">
              {total}
            </h1>
            <p className="text-base font-medium leading-4 capitalize text-ring">
              {title}
            </p>
          </div>

          {details.length > 0 && (
            <div className="flex items-center gap-2">
              {details.map((detail, idx) => {
                const DetailIcon = detail.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-800 rounded-full p-1 w-fit"
                  >
                    <DetailIcon color={detail.iconColor || "#9767e4"} />
                    <div className="flex flex-col pr-3">
                      <p className="text-base font-semibold leading-4 text-black dark:text-white">
                        {detail.value}
                      </p>
                      <p className="text-base font-normal leading-4 text-black dark:text-white">
                        {detail.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
