import Hero from "@/components/layout/homepage/Hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <>
      <div className="absolute  top-0 left-0 right-0    h-screen md:h-[600px] z-[-5] bg-black " />

      <MaxWidthWrapper>
        <Hero />

        <section className="w-full  my-8 h-fit md:h-[550px] "></section>

        {/* our services */}
      </MaxWidthWrapper>
    </>
  );
}
