import ContactUsForm from "@/components/forms/contact-us-form";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <main className="w-full h-fit">
      <ContactUsForm />
    </main>
  );
};

export default page;
