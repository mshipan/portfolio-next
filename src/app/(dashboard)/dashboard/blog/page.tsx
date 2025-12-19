import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ManageBlogTable from "@/components/modules/cards/blog/ManageBlogTable";
import AddBlogPostModal from "@/components/shared/modals/AddBlogPostModal";

const ManageBlogPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row lg:items-end justify-between gap-6">
        <DashboardHeader
          title="Manage Blog Posts"
          subTitle=" Write and publish articles"
        />

        <AddBlogPostModal />
      </div>

      <div>
        <ManageBlogTable />
      </div>
    </div>
  );
};

export default ManageBlogPage;
