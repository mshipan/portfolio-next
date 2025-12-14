import { Button } from "@/components/ui/button";

const Opportunity = () => {
  const opportunityData = {
    desc: "I'm currently open to freelance projects and full-time positions. Let's build something amazing together!",
    resume: "",
  };
  return (
    <div className="bg-linear-to-br from-[#ecf1f8] to-[#ecf0f8] dark:from-[#18293f] dark:to-[#1d223f] space-y-8 p-8 rounded-xl border border-gray-300 dark:border-gray-700 h-fit">
      <h1 className="text-2xl leading-8 font-bold text-black dark:text-white">
        Available for Opportunities
      </h1>
      <p className="text-base leading-6 font-normal text-ring">
        {opportunityData.desc}
      </p>
      <Button
        type="submit"
        className="cursor-pointer w-full bg-white dark:bg-black hover:bg-[#47cfeb] hover:dark:bg-[#47cfeb] text-black dark:text-white"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default Opportunity;
