import AddProjectModal from "@/components/shared/modals/AddProjectModal";

const ProjectPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-white pb-2">
            Manage Projects
          </h1>
          <p className="text-base leading-5 text-ring">
            Create and edit my portfolio projects
          </p>
        </div>

        <AddProjectModal />
      </div>

      <div>{/* <ManageTechCard /> */}</div>
    </div>
  );
};

export default ProjectPage;
