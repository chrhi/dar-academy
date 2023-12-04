import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full lg:h-[300px] h-fit bg-background mt-8 border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="w-full h-full grid grid-cols-1 p-4 md:grid-cols-6 items-center justify-between">
          <div className="lg:col-span-2 h-full w-full gap-y-4 flex flex-col items-start justify-center ">
            <Link href="/">
              <p className="text-2xl text-blue-500 font-bold text-start">
                Dar Academy
              </p>
            </Link>
            <Link href="/">
              <p className="text-md   text-foreground ">
                mahdi.chahri55@gmail.com
              </p>
            </Link>
          </div>

          <div className=" w-full h-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground ">
              Social media
            </p>
            <Link href="/">
              <p className="text-md   text-foreground ">facebok</p>
            </Link>
            <Link href="/">
              <p className="text-md  text-foreground  ">instagrame</p>
            </Link>
          </div>
          <div className=" w-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">Links</p>
            <Link href="/">
              <p className="text-md  text-foreground ">formations</p>
            </Link>
            <Link href="/">
              <p className="text-md text-foreground ">blog</p>
            </Link>

            <Link href="/">
              <p className="text-md text-foreground ">contact</p>
            </Link>
          </div>

          <div className=" w-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
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

          <div className=" w-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">
              work times
            </p>
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
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
