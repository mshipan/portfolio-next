import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavMenuProps } from "@/types";
import ModeToggler from "./ModeToggler";

const NavMenu = ({ navLinks, onLinkClick, ...props }: NavMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6">
        {navLinks?.map((link) => (
          <NavigationMenuItem key={link.to}>
            <NavigationMenuLink
              asChild
              className="hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-black dark:focus:text-white cursor-pointer"
            >
              <button
                onClick={() => onLinkClick?.(link.to)}
                className="text-ring dark:hover:text-white capitalize font-semibold"
              >
                {link.label}
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ModeToggler />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
