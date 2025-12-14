import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavMenuProps } from "@/types";
import Link from "next/link";

const QuickLinks = ({ navLinks, ...props }: NavMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="flex-col items-start gap-3">
        {navLinks?.map((link) => (
          <NavigationMenuItem key={link.to}>
            <NavigationMenuLink
              asChild
              className="hover:bg-transparent p-0 focus:outline-none focus:bg-transparent focus:text-white"
            >
              <Link
                href={link.to}
                className="text-ring hover:text-[#9767e4] dark:hover:text-white capitalize"
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default QuickLinks;
