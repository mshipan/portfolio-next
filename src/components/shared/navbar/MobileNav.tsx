import { NavLink } from "@/types";
import Link from "next/link";
import { motion } from "motion/react";

interface MobileNavProps {
  navLinks: NavLink[];
  open: boolean;
}
const MobileNav = ({ navLinks, open }: MobileNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`md:hidden fixed top-16 left-0 w-full bg-background/90 backdrop-blur-3xl shadow-2xl ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ zIndex: 50 }}
    >
      <ul className="flex flex-col gap-6 px-4 py-4">
        {navLinks?.map((link) => (
          <li key={link.to}>
            <Link
              href={link.to}
              className="text-ring hover:text-white capitalize"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
