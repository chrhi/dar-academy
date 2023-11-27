import AboutUsBanner from "@/components/aboutus-banner";
import Banner from "@/components/banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { type FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <>
      <AboutUsBanner />
      <MaxWidthWrapper>
        <div>here gores all of our formations</div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
