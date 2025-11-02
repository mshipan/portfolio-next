import Stats from "@/components/dashboard/Stats";

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
    </div>
  );
};

export default DashboardAnalytics;
