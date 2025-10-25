import BackLink from "@/components/shared/BackLink";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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

      <Image
        src="/images/project1.jpeg"
        alt="project image"
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
      <h1 className="text-3xl leading-9 font-bold">About This Project</h1>
      <p className="text-base leading-6 font-normal text-ring">
        This comprehensive e-commerce platform provides a complete solution for
        online retail businesses. Built with modern technologies, it features a
        responsive user interface, secure payment processing through Stripe,
        real-time inventory management, and detailed analytics dashboards. The
        platform supports multiple payment methods, automatic tax calculations,
        and integrates with major shipping providers. The admin panel offers
        powerful tools for managing products, orders, and customer
        relationships.
      </p>
      <h1 className="text-3xl leading-9 font-bold">Key Features</h1>
      <div className="grid grid-cols-2 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7]?.map((feature, i) => (
          <div
            key={i}
            className="bg-[#11192c] flex items-center gap-3 text-ring p-4 rounded-xl border border-gray-800"
          >
            <Check className="text-[#9767e4] rotate-y-45" />
            <p className="text-base leading-6 font-normal text-right">
              Secure user authentication and authorization
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProjectPage;
