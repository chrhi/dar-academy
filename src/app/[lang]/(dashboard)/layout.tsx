import "@/styles/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal, Poppins } from "next/font/google";
import AdminPanel from "./_components/AdminPanel";
import { Toaster } from "sonner";

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
    <div className="flex w-full min-h-screen">
      <AdminPanel className="block w-[250px] fixed left-0  top-0 bottom-0 " />

      <main className="w-[calc(100%-250px)] ml-[250px] bg-gray-50 ">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
