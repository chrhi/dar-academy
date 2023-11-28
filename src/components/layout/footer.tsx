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
        <div className="w-full h-full md:h-[400px] grid grid-col-2 lg:grid-cols-6 p-4 lg:p-0 lg:pt-12 gap-4 mb-4">
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
                f
              </Link>
              <Link
                href={"/"}
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                i
              </Link>
              <Link
                href={"/"}
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                l
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-y-4">
            <h4 className="text-xl font-semibold text-start ">PRODUCTS</h4>
            <p className="text-gray-800 text-lg text-start">Pricing</p>
            <p className="text-gray-800 text-lg text-start ">Try For Free</p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-y-4">
            <h4 className="text-xl font-semibold text-start">SOLUTIONS</h4>
            <p className="text-gray-800 text-lg text-start">Task Management</p>
            <p className="text-gray-800 text-lg text-start">
              Client Communication
            </p>
            <p className="text-gray-800 text-lg text-start">
              Team Communication
            </p>
            <p className="text-gray-800 text-lg text-start">Client Billing</p>
          </div>
          <div className="col-span-1 flex flex-col items-start  justify-start  gap-y-4">
            <h4 className="text-xl font-semibold text-start">School</h4>

            <p className="text-gray-800 text-lg text-start">Careers</p>
            <p className="text-gray-800 text-lg text-start">Privacy Policy</p>
            <p className="text-gray-800 text-lg text-start ">
              Terms & Conditions
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start  gap-y-4">
            <h4 className="text-xl font-semibold text-start ">COMMUNITY</h4>
            <p className="text-gray-800 text-lg text-start">Help Center</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
