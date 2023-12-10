import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimatedTabs from "./layout/header/AnimatedTabs";
import logo from "../../public/dar-academy/logo.jpg";
import LocaleSwitcher from "./layout/header/LocaleSwitcher";
import CustomLink from "./layout/header/Link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SideBar from "./layout/header/SideBar";
import MaxWidthWrapper from "./max-width-wrapper";

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation, links } = await getDictionary(lang);
  const Tabs = [
    {
      id: links.home,
      label: navigation.home,
      originalLink: "/",
    },
    {
      id: links.projects,
      label: navigation.projects,
      originalLink: "/projects",
    },

    {
      id: links.contact,
      label: navigation.contact,
      originalLink: "/contact",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default Header;
