"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";
import { FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <MaxWidthWrapper>
      <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-white dark:bg-gray-900">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-500 dark:text-blue-500">
            there was a problem
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 ">
            {error.message || "Something Went Wrong"}
          </h1>

          <p className="text-zinc-600 text-base leading-6 dark:text-zinc-300  ">
            Please try later or contact the support if the problem persists{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6  ">
            <Button onClick={reset}> Try again</Button>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              <Button variant={"secondary"}>Go back home</Button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Error;
