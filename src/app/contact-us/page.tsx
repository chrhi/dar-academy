import ContactUsForm from "@/components/forms/contact-us-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { type FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <ContactUsForm />
    </MaxWidthWrapper>
  );
};

export default page;
