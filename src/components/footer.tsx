import type { FC } from "react";
import MaxWidthWrapper from "./max-width-wrapper";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className=" h-[400px] w-full">
      <MaxWidthWrapper className="">
        <div className="w-full h-full md:h-[400px] "></div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
