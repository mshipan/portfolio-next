"use client";
import { BlogGrowthChart } from "@/components/dashboard/BlogGrowthChart";
import LatestBlogTable from "@/components/dashboard/LatestBlogTable";
import LatestProjectsTable from "@/components/dashboard/LatestProjectsTable";
import Stats from "@/components/dashboard/Stats";
import { TechStackChart } from "@/components/dashboard/TechStackChart";
import ExperienceTimeline from "@/components/dashboard/ExperienceTimeline";
import {
  Briefcase,
  ChevronsLeftRight,
  CircleCheck,
  Clock3,
  FileText,
  FolderKanban,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import MonthlyBlogSummary from "@/components/dashboard/MonthlyBlogSummary";

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

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <Stats
          mainIcon={FileText}
          mainIconColor="#9767e4"
          title="Total Blogs"
          total={45}
          extraIcon={TrendingUp}
          details={[
            {
              value: 38,
              label: "Published",
              icon: CircleCheck,
              iconColor: "#9767e4",
            },
            { value: 7, label: "Drafts", icon: Clock3, iconColor: "#9767e4" },
          ]}
        />
        <Stats
          mainIcon={FolderKanban}
          mainIconColor="#47cfeb"
          title="Total Projects"
          total={24}
          extraIcon={TrendingUp}
          details={[
            {
              value: 8,
              label: "Featured",
              icon: CircleCheck,
              iconColor: "#9767e4",
            },
          ]}
        />
        <Stats
          mainIcon={ChevronsLeftRight}
          mainIconColor="#47cfeb"
          title="Skills"
          total={32}
          extraIcon={TrendingUp}
        />
        <Stats
          mainIcon={Briefcase}
          mainIconColor="#9767e4"
          title="Experiences"
          total={5}
          extraIcon={TrendingUp}
        />
        <Stats
          mainIcon={GraduationCap}
          mainIconColor="#47cfeb"
          title="Educations"
          total={3}
          extraIcon={TrendingUp}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full h-fit">
        <BlogGrowthChart />
        <TechStackChart />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 w-full h-fit">
        <LatestProjectsTable />
        <LatestBlogTable />
      </div>

      <div>
        <ExperienceTimeline />
      </div>

      <div>
        <MonthlyBlogSummary />
      </div>
    </div>
  );
};

export default DashboardAnalytics;
