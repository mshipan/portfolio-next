import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ComponentProps } from "react";

export interface NavLink {
  to: string;
  label: string;
}

export interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  navLinks: NavLink[];
}

export interface SectionHeader {
  titleFirstPart?: string;
  titleSecondPart?: string;
  subTitle?: string;
}

export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  techs: string[];
}

export interface Blog {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  published?: boolean;
  coverUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
