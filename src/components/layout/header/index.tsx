import type { FC } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Logo from "@/components/logo";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobil-nav";

const Header: FC = ({}) => {
  return (
    <div className="w-full z-[999] bg-transparent bg-white fixed top-0 h-[70px] flex items-center ">
      <MaxWidthWrapper>
        <div className="w-full h-full   items-center justify-between  flex ">
          <Logo />

          <div className="min-w-[700px] w-fit h-[70px]  items-center gap-x-4 justify-end lg:flex hidden">
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "font-semibold"
              )}
              href="/"
            >
              Accueil
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "font-semibold"
              )}
              href="/"
            >
              À propos de nous
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "font-semibold"
              )}
              href="/"
            >
              Les Formations
            </Link>

            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "font-semibold"
              )}
              href="/"
            >
              Contactez-nous
            </Link>
            <Button
              variant={"default"}
              className={cn("bg-blue-500 text-white font-bold")}
            >
              +1 (410) 457-9993
            </Button>
          </div>
          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
