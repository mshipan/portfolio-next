import EducationCard from "@/components/modules/about-me-page/EducationCard";
import ExperienceCard from "@/components/modules/about-me-page/ExperienceCard";
import ProfileInfoCard from "@/components/modules/about-me-page/ProfileInfoCard";
import SkillsCard from "@/components/modules/about-me-page/SkillsCard";

const AboutMePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold leading-9 text-white pb-2">
          About Me
        </h1>
        <p className="text-base leading-5 text-ring">
          A glimpse into my journey, passion, and the experiences that define
          me.
        </p>
      </div>

      <div className="space-y-8">
        <ProfileInfoCard />
        <SkillsCard />
        <ExperienceCard />
        <EducationCard />
      </div>
    </div>
  );
};

export default AboutMePage;
