import "@/styles/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal, Poppins } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <Header lang={lang} />
      <main className="mt-[70px] min-h-screen ">{children}</main>
      <Footer />
    </>
  );
}
