"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-screen place-content-center px-4 py-16 sm:px-6 lg:px-8 bg-background">
      <div className="p-px mx-auto max-w-lg w-full rounded-3xl bg-gradient-to-r from-[#9767e4] via-[#9767e4]  to-[#47cfeb]">
        <div className="bg-background p-8 rounded-[calc(1.5rem-1px)] border border-border text-center shadow-md">
          <h5 className="text-base font-bold text-site-gradient">Error !!!</h5>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl md:text-4xl lowercase">
            Something went wrong
          </h1>

          <p className="mt-4 text-sm text-ring sm:text-base md:text-lg">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          {error.digest && (
            <p className="mt-2 text-xs text-gray-500">
              Error ID: <span className="font-mono">{error.digest}</span>
            </p>
          )}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              onClick={() => reset()}
              className="w-full sm:w-auto text-sm font-semibold text-primary-foreground bg-[#9767e4] hover:bg-[#8655d8] transition-colors cursor-pointer"
            >
              Try Again
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto text-sm font-semibold text-primary bg-[#47cfeb] hover:bg-[#36b6d4] transition-colors"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
