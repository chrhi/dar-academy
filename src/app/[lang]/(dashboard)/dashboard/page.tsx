import { Locale } from "@/i18n.config";
import type { FC } from "react";

interface pageAbdullahProps {
  params: { lang: Locale };
}

const page: FC<pageAbdullahProps> = ({ params: { lang } }) => {
  return <div>this is the dashboard</div>;
};

export default page;
