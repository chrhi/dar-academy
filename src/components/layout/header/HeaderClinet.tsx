"use client";

import { useState, type FC, useEffect } from "react";
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
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain threshold (e.g., 20 pixels)
      const scrolled = window.scrollY > 64;

      // Update the state based on the scroll position
      setHasShadow(scrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only once, when the component mounts

  return (
    <header
      className={`h-16 z-50  sticky top-0  bg-white   w-full ${
        hasShadow ? "border-b-2 border-black shadow-sm" : ""
      } `}
    >
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
