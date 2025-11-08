"use client";

import { usePathname } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
        Dashboard
      </SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`flex items-center gap-2 w-full rounded-md px-3 py-2 transition-colors duration-200 
                ${
                  isActive
                    ? "bg-[#2B2A4C]/60 text-white font-medium"
                    : "text-gray-300 hover:text-white hover:bg-[#2b3b5580]"
                }`}
              >
                <a href={item.url} className="flex items-center gap-2 w-full">
                  {item.icon && (
                    <item.icon
                      size={18}
                      className={`${
                        isActive ? "text-[#9767E4]" : "text-[#47cfeb]"
                      } transition-colors duration-200`}
                    />
                  )}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
