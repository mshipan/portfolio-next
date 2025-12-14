import { SectionHeader } from "@/types";

const HeaderSection = ({
  titleFirstPart,
  titleSecondPart,
  subTitle,
}: SectionHeader) => {
  return (
    <>
      <h1 className="capitalize text-3xl md:text-5xl font-black leading-12 text-center text-black dark:text-white">
        {titleFirstPart}{" "}
        <span className="text-site-gradient">{titleSecondPart}</span>
      </h1>
      <p className="text-lg font-normal leading-7 max-w-3xl text-center text-[#6b7280] dark:text-[#94a3b8]">
        {subTitle}
      </p>
    </>
  );
};

export default HeaderSection;
