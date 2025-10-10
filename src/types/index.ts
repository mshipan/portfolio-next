import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ComponentProps } from "react";

export interface NavLink {
  to: string;
  label: string;
}

export interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  navLinks: NavLink[];
}
