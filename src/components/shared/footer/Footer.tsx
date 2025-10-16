import { NavLink } from "@/types";
import Logo from "../navbar/Logo";
import QuickLinks from "./QuickLinks";
import ConnectLinks from "./ConnectLinks";

const Footer = () => {
  const navLinks: NavLink[] = [
    { to: "#about", label: "about" },
    { to: "#skills", label: "skills" },
    { to: "#projects", label: "projects" },
    { to: "#blog", label: "blog" },
    { to: "#contact", label: "contact" },
  ];
  return (
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col gap-4 items-start">
            <Logo />
            <h1 className="text-ring md:max-w-lg">
              Building exceptional digital experiences with modern web
              technologies.
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-start md:col-span-2">
            <h1 className="capitalize text-white font-semibold">quick Links</h1>
            <QuickLinks navLinks={navLinks} />
          </div>

          <div className="flex flex-col gap-4 items-start">
            <h1 className="capitalize text-white font-semibold">connect</h1>
            <ConnectLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 flex items-center justify-center py-7">
          <h1 className="text-ring">© 2025 Shipan Mallik.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
