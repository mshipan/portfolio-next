import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ManageTechCard from "@/components/modules/cards/skill/ManageTechCard";
import AddSkillModal from "@/components/shared/modals/AddSkillModal";

const SkillsPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row lg:items-end justify-between gap-6">
        <DashboardHeader title="Manage Skills" subTitle="My technical skills" />

        <AddSkillModal />
      </div>

      <div>
        <ManageTechCard />
      </div>
    </div>
  );
};

export default SkillsPage;
