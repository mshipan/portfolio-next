import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const ConnectLinks = () => {
  const connectLinks = [
    { path: "https://github.com", icon: Github },
    { path: "https://linkedin.com", icon: Linkedin },
    { path: "mailto:shipanmallik95@gmail.com", icon: Mail },
  ];

  return (
    <div className="flex items-center gap-4">
      {connectLinks?.map((link) => (
        <div
          key={link.path}
          className="w-10 h-10 bg-muted-foreground hover:bg-[#9767e4] rounded-full flex items-center justify-center cursor-pointer"
        >
          <Link href={link.path}>
            <link.icon className="text-white w-5 h-5" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ConnectLinks;
