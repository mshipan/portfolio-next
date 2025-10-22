import { Button } from "@/components/ui/button";

const Opportunity = () => {
  return (
    <div className="bg-gradient-to-br from-[#18293f] to-[#1d223f] space-y-8 p-8 rounded-xl border border-gray-700 h-fit">
      <h1 className="text-2xl leading-8 font-bold">
        Available for Opportunities
      </h1>
      <p className="text-base leading-6 font-normal text-ring">
        I'm currently open to freelance projects and full-time positions. Let's
        build something amazing together!
      </p>
      <Button type="submit" className="cursor-pointer w-full">
        Download Resume
      </Button>
    </div>
  );
};

export default Opportunity;
