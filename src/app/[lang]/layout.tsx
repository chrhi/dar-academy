import "@/styles/globals.css";

// import Script from "next/script";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { constructMetadata } from "@/data/metadata";
import { Analytics } from "@vercel/analytics/react";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal, Poppins } from "next/font/google";

export const metadata = constructMetadata();

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      suppressHydrationWarning
      className="scroll-smooth"
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
    >
      <body className="selection:bg-blue-500 w-[100%] antialiased  selection:text-white">
        <Providers>
          <Header lang={lang} />
          <main className="mt-[70px] min-h-screen ">{children}</main>
          <Footer />
        </Providers>
        <Script
          async
          src="//code.tidio.co/f4ntqdkrkcmkov2pbgapiuevig4fhtbq.js"
        />
      </body>
    </html>
  );
}
