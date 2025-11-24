import ManageBlogTable from "@/components/modules/cards/blog/ManageBlogTable";
import AddBlogPostModal from "@/components/shared/modals/AddBlogPostModal";

const ManageBlogPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-white pb-2">
            Manage Blog Posts
          </h1>
          <p className="text-base leading-5 text-ring">
            Write and publish articles
          </p>
        </div>

        <AddBlogPostModal />
      </div>

      <div>
        <ManageBlogTable />
      </div>
    </div>
  );
};

export default ManageBlogPage;
