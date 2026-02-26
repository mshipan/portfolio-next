"use client";

import { NavLink } from "@/types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface MobileNavProps {
  navLinks: NavLink[];
  open: boolean;
  onLinkClick?: (to: string) => void;
}
const MobileNav = ({ navLinks, open, onLinkClick }: MobileNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    if (open) {
      gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        pointerEvents: "auto",
        ease: "power2.out",
      });
    } else {
      gsap.to(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        pointerEvents: "none",
        ease: "power2.in",
      });
    }
  }, [open]);
  return (
    <div
      ref={navRef}
      className={`md:hidden fixed top-16 left-0 w-full bg-background/90 backdrop-blur-3xl shadow-2xl ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        zIndex: 50,
        opacity: 0,
        transform: "translateY(-20px)",
        pointerEvents: "none",
      }}
    >
      <ul className="flex flex-col gap-6 px-4 py-4">
        {navLinks?.map((link) => (
          <li key={link.to}>
            <button
              onClick={() => onLinkClick?.(link.to)}
              className="text-ring hover:text-white font-semibold capitalize w-full text-left"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
