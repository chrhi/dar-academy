"use client";

import type { FC } from "react";
import CustomLink from "./Link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image, { StaticImageData } from "next/image";
import AnimatedTabs from "./AnimatedTabs";
import LocaleSwitcher from "./LocaleSwitcher";
import SideBar from "./SideBar";
import { Locale } from "@/i18n.config";

interface HeaderClinetAbdullahProps {
  lang: Locale;
  navigation: {
    home: string;
    projects: string;
    blog: string;
    contact: string;
  };
  Tabs: {
    id: string;
    label: string;
    originalLink: string;
  }[];
  logo: StaticImageData;
}

const HeaderClinet: FC<HeaderClinetAbdullahProps> = ({
  Tabs,
  lang,
  navigation,
  logo,
}) => {
  return (
    <header className={`h-16 z-50  sticky top-0  bg-white   w-full `}>
      <MaxWidthWrapper className="flex justify-between items-center w-full h-full mx-auto">
        <CustomLink
          lang={lang}
          href="/"
          className="hover:bg-primary-900 rounded-full duration-75 transition-colors"
        >
          <Image
            src={logo}
            alt="Moncef Aissaoui Letter"
            width={40}
            height={40}
          />
        </CustomLink>

        <section className="flex items-center justify-center gap-3 ">
          <AnimatedTabs lang={lang} tabs={Tabs} />
          <LocaleSwitcher lang={lang} />
          <SideBar lang={lang} navigation={navigation} />
        </section>
      </MaxWidthWrapper>
    </header>
  );
};

export default HeaderClinet;
