import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Logo from "../logo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className=" border-t h-[400px] w-full">
      <MaxWidthWrapper className="">
        <div className="w-full h-full md:h-[400px] grid grid-cols-6">
          <div className="col-span-2 flex py-4 flex-col justify-center items-start pr-4 ">
            <Logo />
            <p className="text-gray-700 text-xl">
              this is a bref description about what we de{" "}
            </p>
            <div>
              <Link
                href={"/"}
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                facebook
              </Link>
              <Link
                href={"/"}
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                instagrame
              </Link>
              <Link
                href={"/"}
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                linked in
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center gap-y-4">
            <h4 className="text-xl font-semibold">Something</h4>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center gap-y-4">
            <h4 className="text-xl font-semibold">Something</h4>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-y-4">
            <h4 className="text-xl font-semibold">Something</h4>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
          </div>
          <div className="col-span-1 flex flex-col items-end justify-center gap-y-4">
            <h4 className="text-xl font-semibold">Something</h4>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
            <p className="text-gray-800 text-lg">mana3raf</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
