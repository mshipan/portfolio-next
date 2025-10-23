"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface BackLinkProps {
  targetId: string;
  label?: string;
}

const BackLink = ({ targetId, label = "Back" }: BackLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={`/#${targetId}`}
      onClick={handleClick}
      className="text-base leading-6 font-normal text-ring flex items-center gap-2 hover:underline capitalize"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
};

export default BackLink;
