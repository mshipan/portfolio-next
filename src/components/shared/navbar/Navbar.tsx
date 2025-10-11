"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { NavLink } from "@/types";
import MobileNav from "./MobileNav";
import ModeToggler from "./ModeToggler";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks: NavLink[] = [
    { to: "#about", label: "about" },
    { to: "#skills", label: "skills" },
    { to: "#experience", label: "experience" },
    { to: "#projects", label: "projects" },
    { to: "#blog", label: "blog" },
    { to: "#contact", label: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 shadow-md bg-background/10 backdrop-blur-xs">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/">
          <Logo />
        </Link>
        <NavMenu className="hidden md:block" navLinks={navLinks} />
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggler />
          <ToggleButton setOpen={setOpen} open={open} />
        </div>
      </div>
      <MobileNav navLinks={navLinks} open={open} />
    </nav>
  );
};

export default Navbar;
