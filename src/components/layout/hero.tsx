import type { FC } from "react";
import Balancer from "react-wrap-balancer";
import GoogleRating from "../google-rating";
import FacebookRating from "../facebook-rating";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface heroAbdullahProps {
  lang: Locale;
}

const Hero: FC<heroAbdullahProps> = async ({ lang }) => {
  const { landing } = await getDictionary(lang);
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className=" relative mx-auto flex w-full  items-center justify-center  gap-4  pt-24  text-center "
    >
      <div className="w-[50%] h-full flex flex-col items-start justify-center  gap-y-4">
        <div className=" flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white  shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-md font-semibold text-gray-700 ">{landing.sub}</p>
        </div>
        <Balancer
          as="h1"
          className="font-heading font-bold text-5xl md:text-6xl text-start"
        >
          <span className="text-blue-500">{landing.name}</span> <br />
          {landing.follow}
        </Balancer>
        <Balancer className=" font-semibold leading-normal text-muted-foreground sm:text-2xl text-start sm:leading-8">
          {landing.description}
        </Balancer>
        <div className="flex  items-center justify-start gap-2 lg:gap-4">
          <GoogleRating />
          <FacebookRating />
        </div>
      </div>
      <div className="w-[50%] h-[500px] relative ">
        <div className="w-[400px] h-[400px] rounded-lg bg-gray-50 absolute top-10 -right-5"></div>
        <div className="w-[300px] h-[250px] rounded-lg bg-blue-500 absolute top-44 bottom-20 left-[20]"></div>
        <div className="w-[450px] h-[350px] rounded-lg bg-violet-500 absolute top-30  right-36"></div>
      </div>
    </section>
  );
};

export default Hero;
