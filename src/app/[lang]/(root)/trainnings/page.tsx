import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <main className="w-full h-fit ">
      <MaxWidthWrapper>
        <section className="w-full h-[400px] bg-blue-500 border-2 border-black ralative flex items-center justify-center ">
          <h1 className="text-3xl font-bold text-center text-white">
            FIND ALL OF OUT TRAINNINGS
          </h1>
        </section>

        <section className="my-4 w-full h-fit">
          <h2 className="text-2xl  lg:text-4xl  text-black font-bold text-start">
            {" "}
            Most Popular Resources
          </h2>
        </section>
        <section className="my-4 w-full h-fit">
          <h2 className="text-2xl  lg:text-4xl  text-black font-bold text-start">
            {" "}
            Helpful Cheatsheets
          </h2>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default page;