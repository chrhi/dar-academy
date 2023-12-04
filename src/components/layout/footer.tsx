import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full lg:h-[300px] h-fit bg-background mt-8 border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="w-full h-full grid grid-cols-1 p-4 md:grid-cols-6 items-center justify-between">
          <div className="lg:col-span-2 h-full w-full flex items-center justify-start lg:justify-center">
            <Link href="/">
              <p className="text-2xl font-bold text-foreground ">Dar Academy</p>
            </Link>
          </div>

          <div className=" w-full h-full flex flex-col justify-center items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground ">Product</p>
            <Link href="/">
              <p className="text-md   text-foreground ">student managemnt</p>
            </Link>
            <Link href="/">
              <p className="text-md  text-foreground  ">trainers</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">trainning</p>
            </Link>
          </div>
          <div className=" w-full flex flex-col justify-center items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">Comunity</p>
            <Link href="/">
              <p className="text-md  text-foreground ">discord server</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">github</p>
            </Link>

            <Link href="/">
              <p className="text-md text-foreground ">support</p>
            </Link>
          </div>
          <div className=" w-full flex flex-col justify-center items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">Company</p>
            <Link href="/">
              <p className="text-md  text-foreground ">About</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">Careers</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">Blog</p>
            </Link>
          </div>

          <div className=" w-full flex flex-col justify-center items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">Ligal</p>
            <Link href="/">
              <p className="text-md  text-foreground ">term</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">privacy policy</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">cookies </p>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
