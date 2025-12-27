import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div>
      <div className="grid min-h-screen place-content-center px-6 py-24 sm:px-6 lg:px-8 font-inter">
        <div className="text-center border border-gray-300 dark:border-gray-800 p-8 rounded-2xl hover:border-purple-600 transition-all duration-500 ease-in shadow-xl hover:shadow-purple-500/20 flex flex-col items-center">
          <div className="relative w-24 h-24">
            <Image
              src="/images/unprotected.png"
              alt="unauthorized icon"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-4xl md:text-5xl capitalize whitespace-nowrap">
            unauthorized access
          </h1>

          <p className="mt-6 text-sm font-medium text-pretty text-ring sm:text-base md:text-lg">
            You are not authorized to view this page.{" "}
            <br className="hidden sm:block" />
            Please login to continue.
          </p>

          <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="w-fit sm:w-auto text-base md:text-lg font-semibold text-primary bg-[#9767e4] hover:bg-[#8655d8] transition-colors capitalize px-4 md:px-8 md:py-6"
            >
              <Link href="/auth">login</Link>
            </Button>
            <Button
              asChild
              className="w-fit sm:w-auto text-base md:text-lg font-semibold text-primary bg-[#47cfeb] hover:bg-[#36b6d4] transition-colors capitalize px-4 md:px-8 md:py-6"
            >
              <Link href="/">go home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
