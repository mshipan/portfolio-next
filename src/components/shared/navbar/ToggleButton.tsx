"use client";

import gsap from "gsap";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface ToggleButtonProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  color?: string;
}

const ToggleButton = ({
  open,
  setOpen,
  color = "white",
}: ToggleButtonProps) => {
  const topRef = useRef<SVGPathElement>(null);
  const middleRef = useRef<SVGPathElement>(null);
  const bottomRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!topRef.current || !middleRef.current || !bottomRef.current) return;

    if (open) {
      gsap.to(topRef.current, {
        y: 7,
        rotate: 45,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(middleRef.current, {
        opacity: 0,
        duration: 0.2,
      });

      gsap.to(bottomRef.current, {
        y: -7,
        rotate: -45,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(topRef.current, {
        y: 0,
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(middleRef.current, {
        opacity: 1,
        duration: 0.2,
      });

      gsap.to(bottomRef.current, {
        y: 0,
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [open]);

  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path
          ref={topRef}
          d="M 2 4 L 20 4"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
        />

        <path
          ref={middleRef}
          d="M 2 11 L 20 11"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
        />

        <path
          ref={bottomRef}
          d="M 2 18 L 20 18"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
