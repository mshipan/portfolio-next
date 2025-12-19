import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EducationCard from "@/components/modules/about-me-page/EducationCard";
import ExperienceCard from "@/components/modules/about-me-page/ExperienceCard";
import ProfileInfoCard from "@/components/modules/about-me-page/ProfileInfoCard";
import SkillsCard from "@/components/modules/about-me-page/SkillsCard";

const AboutMePage = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="About Me"
        subTitle="A glimpse into my journey, passion, and the experiences that define me."
      />

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
