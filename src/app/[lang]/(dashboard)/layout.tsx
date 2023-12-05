import "@/styles/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal, Poppins } from "next/font/google";

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
  return <div className="min-h-screen w-full bg-red-500">{children}</div>;
}
