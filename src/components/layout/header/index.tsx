"use client";

import type { FC } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Logo from "@/components/logo";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobil-nav";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header: FC = ({}) => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="w-full z-[999] bg-transparent bg-white fixed top-0 h-[70px] flex items-center ">
      <MaxWidthWrapper>
        <div className="w-full h-full   items-center justify-between  flex ">
          <Logo />

          <div className=" transition-all duration-300 min-w-[700px] w-fit h-[70px]  items-center gap-x-4 justify-end lg:flex hidden">
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-semibold relative group hover:bg-white"
              )}
              href="/"
            >
              Accueil
              {pathname === "/" ? (
                <div className="w-[60px] h-[5px] absolute bottom-0 left-0  rounded-full bg-blue-500 group-hover:bg-yellow-400 group-hover:w-full transition-all duration-300" />
              ) : (
                <div className="w-0 h-[5px] absolute bottom-0 left-0  rounded-full bg-red-500  group-hover:w-[60px] transition-all duration-300" />
              )}
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-semibold relative group hover:bg-white"
              )}
              href="/about-us"
            >
              À propos de nous
              {pathname === "/about-us" ? (
                <div className="w-[60px] h-[5px] absolute bottom-0 left-0  rounded-full bg-blue-500 group-hover:bg-yellow-400 group-hover:w-full transition-all duration-300" />
              ) : (
                <div className="w-0 h-[5px] absolute bottom-0 left-0  rounded-full bg-red-500  group-hover:w-[60px] transition-all duration-300" />
              )}
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-semibold relative group hover:bg-white"
              )}
              href="/formations"
            >
              Les Formations
              {pathname === "/formations" ? (
                <div className="w-[60px] h-[5px] absolute bottom-0 left-0  rounded-full bg-blue-500 group-hover:bg-yellow-400 group-hover:w-full transition-all duration-300 " />
              ) : (
                <div className="w-0 h-[5px] absolute bottom-0 left-0  rounded-full bg-red-500  group-hover:w-[60px] transition-all duration-300" />
              )}
            </Link>

            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-semibold relative group hover:bg-white "
              )}
              href="/contact-us"
            >
              Contactez-nous
              {pathname === "/contact-us" ? (
                <div className="w-[60px] h-[5px] absolute bottom-0 left-0  rounded-full bg-blue-500 group-hover:bg-yellow-400 group-hover:w-full transition-all duration-300 " />
              ) : (
                <div className="w-0 h-[5px] absolute bottom-0 left-0  rounded-full bg-red-500  group-hover:w-[60px] transition-all duration-300" />
              )}
            </Link>
            <Button
              variant={"default"}
              className={cn("bg-blue-500 text-white font-bold rounded-full ")}
            >
              +213 0540261833
            </Button>
          </div>
          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
