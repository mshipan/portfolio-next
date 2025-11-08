import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="grid min-h-screen place-content-center px-6 py-24 sm:px-6 lg:px-8">
      <div className="text-center border border-gray-800 p-8 rounded-2xl hover:border-purple-600 transition-all duration-500 ease-in shadow-xl hover:shadow-purple-500/20">
        <h5 className="text-base font-semibold text-site-gradient">404</h5>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-4xl md:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-md font-medium text-pretty text-ring sm:text-base md:text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It{" "}
          <br className="hidden sm:block" />
          might have been moved or deleted.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            className="w-full sm:w-auto text-sm font-semibold text-primary-foreground bg-[#9767e4] hover:bg-[#8655d8] transition-colors"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto text-sm font-semibold text-primary bg-[#47cfeb] hover:bg-[#36b6d4] transition-colors"
          >
            <Link href="/">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
