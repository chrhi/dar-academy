import type { FC } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Logo from "@/components/logo";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: FC = ({}) => {
  return (
    <div className="w-full z-[999] bg-white fixed top-0 h-[70px] flex items-center ">
      <MaxWidthWrapper>
        <div className="w-full h-full  flex items-center justify-between">
          <Logo />

          <div className="min-w-[700px] w-fit h-[70px] flex items-center gap-x-4 justify-end">
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Home
            </Link>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              About us
            </Link>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Services
            </Link>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Services area
            </Link>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Our work
            </Link>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Contact
            </Link>
            <Button
              variant={"default"}
              className={cn("bg-blue-800 text-white font-bold")}
            >
              +1 (410) 457-9993
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
