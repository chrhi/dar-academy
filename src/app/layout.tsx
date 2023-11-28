import "./globals.css";

// import Script from "next/script";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { constructMetadata } from "@/data/metadata";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <body className="selection:bg-blue-500 w-[100%]  selection:text-white">
        <Providers>
          <Header />
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
