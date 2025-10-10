import Link from "next/link";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { NavLink } from "@/types";

const Navbar = () => {
  const navLinks: NavLink[] = [
    { to: "#about", label: "about" },
    { to: "#skills", label: "skills" },
    { to: "#experience", label: "experience" },
    { to: "#projects", label: "projects" },
    { to: "#blog", label: "blog" },
    { to: "#contact", label: "contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/">
          <Logo />
        </Link>
        <NavMenu className="hidden md:block" navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
