import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface footerAbdullahProps {
  lang: Locale;
}

const Footer: FC<footerAbdullahProps> = async ({ lang }) => {
  const { footer, landing } = await getDictionary(lang);
  return (
    <div className="w-full lg:h-[300px] h-fit bg-background mt-8 border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="w-full h-full grid grid-cols-1 p-4 md:grid-cols-6 items-center justify-between">
          <div className="lg:col-span-2 h-full w-full gap-y-4 flex flex-col items-start justify-center ">
            <Link href="/">
              <p className="text-2xl text-blue-500 font-bold text-start">
                {landing.name}
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
              {footer["social-media"].title}
            </p>
            {footer["social-media"].linkes.map((item) => (
              <Link href={item.url} key={item.name}>
                <p className="text-md   text-foreground ">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className=" w-full h-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">
              {footer.Links.title}
            </p>
            {footer.Links.linkes.map((item) => (
              <Link href={item.url} key={item.name}>
                <p className="text-md  text-foreground ">{item.name}</p>
              </Link>
            ))}
          </div>

          <div className=" w-full h-full flex flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-lg font-semibold text-foreground  ">
              {footer.Ligal.title}
            </p>
            {footer.Ligal.linkes.map((item) => (
              <Link href={item.url} key={item.name}>
                <p className="text-md  text-foreground ">{item.name}</p>
              </Link>
            ))}
          </div>

          <div className=" w-full flex h-full flex-col justify-start items-start gap-y-2 pt-8 ">
            <p className="text-md font-semibold text-foreground  ">
              {footer.workHoures.title}
            </p>
            {footer.workHoures.linkes.map((item) => (
              <Link href="/" key={item}>
                <p className="text-sm  text-foreground ">{item}</p>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
