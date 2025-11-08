"use client";

import {
  Briefcase,
  Code,
  FileText,
  FolderKanban,
  GraduationCap,
  House,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";

import { NavMain } from "@/components/NavMain";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "./ui/button";
import { ComponentProps } from "react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      title: "About Me",
      url: "/dashboard/about-me",
      icon: User,
    },
    {
      title: "Experience",
      url: "/dashboard/experience",
      icon: Briefcase,
    },
    {
      title: "Education",
      url: "/dashboard/education",
      icon: GraduationCap,
    },
    {
      title: "Skills",
      url: "/dashboard/skills",
      icon: Code,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: FolderKanban,
    },
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: FileText,
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="text-white border-gray-800 dark:border-gray-800"
    >
      <SidebarContent className="bg-background border-b border-b-gray-800 dark:border-b-gray-800">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <div>
          <div className="flex flex-col items-start gap-2">
            <Link href="/" className="w-full">
              <Button className="flex items-center justify-start gap-1 w-full bg-transparent hover:bg-[#2b3b5580] cursor-pointer">
                <House />
                <p>View Site</p>
              </Button>
            </Link>

            <Button className="flex items-center justify-start gap-1 w-full bg-transparent hover:bg-red-500/20 hover:text-red-300 cursor-pointer">
              <LogOut />
              <p>Logout</p>
            </Button>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
