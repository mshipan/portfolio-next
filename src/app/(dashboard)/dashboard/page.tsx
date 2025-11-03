import { BlogGrowthChart } from "@/components/dashboard/BlogGrowthChart";
import Stats from "@/components/dashboard/Stats";
import { TechStackChart } from "@/components/dashboard/TechStackChart";

const DashboardAnalytics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold leading-9 text-site-gradient">
          Dashboard Overview
        </h1>
        <p className="text-base leading-5 text-ring">
          Complete snapshot of my portfolio&apos;s key metrics
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Stats />
        <Stats />
        <Stats />
        <Stats />
        <Stats />
      </div>

      <div className="flex items-center gap-4 w-full h-fit">
        <BlogGrowthChart />
        <TechStackChart />
      </div>
    </div>
  );
};

export default DashboardAnalytics;
