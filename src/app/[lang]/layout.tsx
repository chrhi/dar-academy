import "@/styles/globals.css";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/data/metadata";
import { Analytics } from "@vercel/analytics/react";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal, Poppins } from "next/font/google";

export const metadata = constructMetadata();

const tajawal = Tajawal({ subsets: ["arabic"], weight: "500" });

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

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
      className={`${lang === "ar" ? tajawal.className : poppins.className}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
    >
      <head>
        <meta
          content="Level up your typescript skills with interactive exercises"
          name="description"
        />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="selection:bg-blue-500 w-[100%] antialiased  selection:text-white scrollbar-thumb-blue scrollbar-track-blue-lighter scrollbar-w-2">
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
