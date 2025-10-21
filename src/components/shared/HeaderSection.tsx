import { SectionHeader } from "@/types";

const HeaderSection = ({
  titleFirstPart,
  titleSecondPart,
  subTitle,
}: SectionHeader) => {
  return (
    <>
      <h1 className="capitalize text-3xl md:text-5xl font-black leading-12 text-center">
        {titleFirstPart}{" "}
        <span className="text-site-gradient">{titleSecondPart}</span>
      </h1>
      <p className="text-lg font-normal leading-7 text-ring max-w-3xl text-center">
        {subTitle}
      </p>
    </>
  );
};

export default HeaderSection;
