import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ScrollOptions {
  duration?: number;
  offset?: number;
  ease?: string;
  smooth?: boolean;
}

export const scrollToSection = (id: string, options?: ScrollOptions) => {
  const section = document.getElementById(id);
  if (!section) return;

  const {
    duration = 1.2,
    offset = 0,
    ease = "power2.inOut",
    smooth = true,
  } = options || {};

  if (smooth && "scrollBehavior" in document.documentElement.style) {
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    return;
  }

  gsap.to(window, {
    duration,
    scrollTo: { y: section, offsetY: offset, autoKill: true },
    ease,
  });
};
