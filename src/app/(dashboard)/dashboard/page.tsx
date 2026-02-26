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
import { useGetDashboardOverviewQuery } from "@/redux/features/dashboard/dashboard.api";

const DashboardAnalytics = () => {
  const { data, isLoading, isError } = useGetDashboardOverviewQuery();

  const dashboard = data?.data;
  const stats = dashboard?.stats;
  const blogs = stats?.blogs;
  const projects = stats?.projects;
  const about = stats?.about;

  const latestProjects = dashboard?.latestProjects;
  const latestBlogs = dashboard?.latestBlogs;
  const experienceTimeline = dashboard?.experienceTimeline;
  const blogGrowth = stats?.blogs?.blogGrowth;

  if (isLoading) {
    return <div className="p-10">Loading dashboard...</div>;
  }

  if (isError || !dashboard) {
    return (
      <div className="p-10 text-red-500">Failed to load dashboard data.</div>
    );
  }

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
          total={blogs?.total ?? 0}
          extraIcon={TrendingUp}
          details={[
            {
              value: blogs?.published ?? 0,
              label: "Published",
              icon: CircleCheck,
              iconColor: "#9767e4",
            },
            {
              value: blogs?.drafts ?? 0,
              label: "Drafts",
              icon: Clock3,
              iconColor: "#9767e4",
            },
          ]}
        />
        <Stats
          mainIcon={FolderKanban}
          mainIconColor="#47cfeb"
          title="Total Projects"
          total={projects?.total ?? 0}
          extraIcon={TrendingUp}
          details={[
            {
              value: projects?.featured ?? 0,
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
          total={about?.totalSkills ?? 0}
          extraIcon={TrendingUp}
        />
        <Stats
          mainIcon={Briefcase}
          mainIconColor="#9767e4"
          title="Experiences"
          total={about?.totalExperiences ?? 0}
          extraIcon={TrendingUp}
        />
        <Stats
          mainIcon={GraduationCap}
          mainIconColor="#47cfeb"
          title="Educations"
          total={about?.totalEducations ?? 0}
          extraIcon={TrendingUp}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full h-fit">
        <BlogGrowthChart data={blogs?.blogGrowth ?? []} />
        <TechStackChart data={projects?.techStackCount ?? []} />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 w-full h-fit">
        <LatestProjectsTable data={latestProjects ?? []} />
        <LatestBlogTable data={latestBlogs ?? []} />
      </div>

      <div>
        <ExperienceTimeline data={experienceTimeline} />
      </div>

      <div>
        <MonthlyBlogSummary data={blogGrowth ?? []} />
      </div>
    </div>
  );
};

export default DashboardAnalytics;
