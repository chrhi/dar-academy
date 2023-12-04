import React from "react";
import logo from "../../../../public/dar-academy/logo.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import HeaderClinet from "./HeaderClinet";

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
      originalLink: "/trainnings",
    },
    {
      id: links.blog,
      label: navigation.blog,
      originalLink: "/blog",
    },
    {
      id: links.contact,
      label: navigation.contact,
      originalLink: "/contact",
    },
  ];

  return (
    <HeaderClinet logo={logo} lang={lang} navigation={navigation} Tabs={Tabs} />
  );
};

export default Header;
