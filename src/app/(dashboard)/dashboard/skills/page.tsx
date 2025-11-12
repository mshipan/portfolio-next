import ManageTechCard from "@/components/modules/cards/skill/ManageTechCard";

const SkillsPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-white pb-2">
            Manage Skills
          </h1>
          <p className="text-base leading-5 text-ring">My technical skills</p>
        </div>

        {/* <AddExperienceModal /> */}
      </div>

      <div>
        <ManageTechCard />
      </div>
    </div>
  );
};

export default SkillsPage;
