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
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      toast.success("Logged out successfully.");

      setTimeout(() => {
        router.push("/auth");
      }, 500);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="text-white border-gray-300 dark:border-gray-800 shadow-lg"
    >
      <SidebarContent className="bg-background border-b border-b-gray-300 dark:border-b-gray-800">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <div>
          <div className="flex flex-col items-start gap-2">
            <Link href="/" className="w-full">
              <Button className="flex items-center justify-start gap-1 w-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#2b3b5580] cursor-pointer text-black dark:text-white">
                <House />
                <p>View Site</p>
              </Button>
            </Link>

            <Button
              onClick={handleLogout}
              className="flex items-center justify-start gap-1 w-full bg-transparent hover:bg-red-500/20 text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 cursor-pointer"
            >
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
