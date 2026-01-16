/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { AppSidebar } from "@/components/AppSidebar";
import ModeToggler from "@/components/shared/navbar/ModeToggler";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const { data, isLoading, isError, isFetching } = useGetMeQuery();

  useEffect(() => {
    if (!isLoading && isError) {
      router.replace("/unauthorized");
    }
  }, [isLoading, isError, router]);

  if (isLoading || isFetching)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
        <Loader className="h-10 w-10 animate-spin text-[#47cfeb]" />
        <p className="text-lg font-medium animate-pulse text-black dark:text-white">
          Loading...
        </p>
      </div>
    );

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="relative flex flex-col w-full overflow-hidden">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-gray-300 dark:border-gray-800 bg-background/80 backdrop-blur-sm px-4 pr-6 shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-black hover:text-white dark:text-white hover:bg-[#47cfeb] cursor-pointer" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-site-gradient text-2xl capitalize font-bold pb-0! font-inter">
              dashboard
            </h1>
          </div>

          <ModeToggler />
        </header>

        <main className="flex-1 text-white px-4 lg:px-20 py-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
