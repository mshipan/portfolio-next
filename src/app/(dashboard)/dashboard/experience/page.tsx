import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ExTimeLine from "@/components/modules/experience-page/ExTimeLine";
import AddExperienceModal from "@/components/shared/modals/AddExperienceModal";

const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row lg:items-end justify-between gap-6">
        <DashboardHeader
          title="Experience"
          subTitle="The milestones that shaped my journey as a web developer."
        />

        <AddExperienceModal />
      </div>

      <div>
        <ExTimeLine />
      </div>
    </div>
  );
};

export default ExperiencePage;
