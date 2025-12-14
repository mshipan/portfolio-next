import { AppSidebar } from "@/components/AppSidebar";
import ModeToggler from "@/components/shared/navbar/ModeToggler";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="relative flex flex-col w-full">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-gray-300 dark:border-gray-800 bg-background/80 backdrop-blur-sm px-4 pr-6 shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-black hover:text-white dark:text-white hover:bg-[#47cfeb] cursor-pointer" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>

          <ModeToggler />
        </header>

        <main className="flex-1 text-white px-4 lg:px-20 py-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
