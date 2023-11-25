import Hero from "@/components/layout/homepage/Hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";

//md:h-[600px]
export default function Home() {
  return (
    <>
      <div className="absolute  top-0 left-0 right-0    h-screen  z-[-5] bg-blue-50 " />

      <MaxWidthWrapper>
        <Hero />

        <section className="w-full  my-8 h-fit md:h-[550px] "></section>

        {/* our services */}
      </MaxWidthWrapper>
    </>
  );
}
