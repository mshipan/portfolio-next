import ExTimeLine from "@/components/modules/experience-page/ExTimeLine";
import AddExperienceModal from "@/components/shared/modals/AddExperienceModal";

const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-white pb-2">
            Experience
          </h1>
          <p className="text-base leading-5 text-ring">
            The milestones that shaped my journey as a web developer.
          </p>
        </div>

        <AddExperienceModal />
      </div>

      <div>
        <ExTimeLine />
      </div>
    </div>
  );
};

export default ExperiencePage;
