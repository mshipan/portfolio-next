import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
}

const ShowMoreBtn = ({ href }: Props) => {
  return (
    <div className="mt-8">
      <Button
        asChild
        className="btn-gradient text-white px-8 py-3 rounded-full text-sm font-semibold"
      >
        <Link href={href} className="flex items-center gap-2">
          Show More
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
};

export default ShowMoreBtn;
