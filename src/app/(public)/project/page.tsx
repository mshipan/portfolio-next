import BackLink from "@/components/shared/BackLink";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const SingleProjectPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-white py-4">
      <BackLink targetId="projects" label="back to projects" />

      <h1 className="text-5xl leading-12 font-black">E-Commerce Platform</h1>
      <p className="text-xl leading-7 font-normal text-ring">
        A full-stack e-commerce solution with payment integration, inventory
        management, and real-time analytics.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {["react", "next", "typescript", "node", "express"]?.map((t) => (
          <span
            key={t}
            className="bg-[#47cfeb] px-3 py-1 rounded-full text-[#11192c] text-xs font-semibold capitalize"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <Button className="flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#47cfeb] cursor-pointer">
          <Github className="w-4 h-4" />
          <span>Code</span>
        </Button>
        <Button className="flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer">
          <ExternalLink className="w-4 h-4" />
          <span>Demo</span>
        </Button>
      </div>
    </div>
  );
};

export default SingleProjectPage;
