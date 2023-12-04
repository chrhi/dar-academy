import { Locale } from "@/i18n.config";

//md:h-[600px]
export default function Pape({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <h1>this is the home page</h1>
    </main>
  );
}
