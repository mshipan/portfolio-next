"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { NavLink } from "@/types";
import MobileNav from "./MobileNav";
import ModeToggler from "./ModeToggler";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { useTheme } from "next-themes";
import { scrollToSection } from "@/lib/scrollTo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const navLinks: NavLink[] = [
    { to: "#about", label: "about" },
    { to: "#skills", label: "skills" },
    { to: "#experience", label: "experience" },
    { to: "#projects", label: "projects" },
    { to: "#blog", label: "blog" },
    { to: "#contact", label: "contact" },
    { to: "/dashboard", label: "dashboard" },
  ];

  const handleLinkClick = (to: string) => {
    if (to.startsWith("#")) {
      const id = to.replace("#", "");
      scrollToSection(id, { offset: 20, smooth: true });
    } else {
      window.location.href = to;
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-4 shadow-md bg-background/10 backdrop-blur-xs">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/">
          <Logo />
        </Link>
        <NavMenu
          className="hidden md:block"
          navLinks={navLinks}
          onLinkClick={handleLinkClick}
        />
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggler />
          <ToggleButton
            setOpen={setOpen}
            open={open}
            color={theme === "light" ? "gray" : "white"}
          />
        </div>
      </div>
      <MobileNav
        navLinks={navLinks}
        open={open}
        onLinkClick={(to) => {
          handleLinkClick(to);
          setOpen(false);
        }}
      />
    </nav>
  );
};

export default Navbar;
