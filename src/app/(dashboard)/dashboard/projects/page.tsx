import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ManageProjectTable from "@/components/modules/cards/project/ManageProjectTable";
import AddProjectModal from "@/components/shared/modals/AddProjectModal";

const ProjectPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row lg:items-end justify-between gap-6">
        <DashboardHeader
          title="Manage Projects"
          subTitle="Create and edit my portfolio projects"
        />

        <AddProjectModal />
      </div>

      <div>
        <ManageProjectTable />
      </div>
    </div>
  );
};

export default ProjectPage;
