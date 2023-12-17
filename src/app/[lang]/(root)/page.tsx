import FacebookRating from "@/components/facebook-rating";
import GoogleRating from "@/components/google-rating";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import TestimonialCard from "@/components/testimonial-card";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

import FirstImage from "../../../../public/dar-academy/2022-07-12.jpg";
import SecondImage from "../../../../public/dar-academy/2022-07-13 (1).jpg";
import TheardImage from "../../../../public/dar-academy/2022-07-13 (2).jpg";
import Map from "@/components/layout/homepage/Map";
import Hero from "@/components/layout/hero";

// import { getBase64 } from "@/lib/plaiceholder";

//md:h-[600px]
export default async function Pape({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { landing, services, reviews, reviewsTitle, findus } =
    await getDictionary(lang);

  return (
    <MaxWidthWrapper>
      <main>
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className=" relative mx-auto flex w-full lg:hidden max-w-[64rem] flex-col items-center justify-center gap-4 pt-12  text-center md:pt-32"
        >
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-md font-semibold text-gray-700">{landing.sub}</p>
          </div>
          <Balancer
            as="h1"
            className="font-heading font-bold text-5xl md:text-6xl lg:text-8xl"
          >
            <span className="text-blue-500">{landing.name}</span> <br />
            {landing.follow}
          </Balancer>
          <Balancer className="max-w-[42rem] font-semibold leading-normal text-muted-foreground sm:text-2xl sm:leading-8">
            {landing.description}
          </Balancer>
          <div className="flex  items-center justify-center gap-2 lg:gap-4">
            <GoogleRating />
            <FacebookRating />
          </div>
        </section>

        <Hero lang={lang} />

        <section
          id="our services"
          className=" relative min-w-full w-fit  h-fit"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <h2 className="text-md  font-semibold text-gray-700 text-center my-4 ">
            {services["Our Services"]}
          </h2>
          <div className="flex min-w-full w-fit mx-auto justify-center items-start gap-4 mb-8  flex-wrap">
            <div className="w-[150px] h-[150px] bg-blue-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg text-white font-semibold text-center">
                {/* @ts-ignore */}
                {services["Primary School Courses"]}
              </span>
            </div>
            <div className="w-[150px] h-[150px] bg-yellow-400 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg text-white font-semibold text-center">
                {/* @ts-ignore */}
                {services["Middle School Courses"]}
              </span>
            </div>
            <div className="w-[150px] h-[150px] bg-sky-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg text-white font-semibold text-center">
                {/* @ts-ignore */}
                {services["High School Courses"]}
              </span>
            </div>
            <div className="w-[150px] h-[150px] bg-violet-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg text-white font-semibold text-center">
                {/* @ts-ignore */}
                {services["Practical Training Courses"]}
              </span>
            </div>
          </div>
        </section>

        <section className=" w-full md:w-[800px] mx-auto  p-4 h-fit my-8">
          <div className="w-full min-h-[500px] h-fit flex flex-col lg:flex-row items-center justify-center  md:gap-x-12 lg:gap-x-24">
            <div className="w-[400px] h-full flex p-6 lg:p-0 flex-col items-start justify-center gap-y-4">
              <h2 className="text-3xl font-bold ">
                {landing["who are we "].title}
              </h2>
              <p className="text-lg font-gray-700 ">
                {landing["who are we "].description}
              </p>
            </div>
            <div className="w-[400px] relative h-full  flex flex-col items-center justify-center gap-y-4">
              <Image
                src={FirstImage}
                alt="this is an image"
                width={235}
                height={300}
                className="object-cover border border-black"
              />
              <div className="h-[500px] w-[235px] top-[50px] z-[-20] absolute bg-sky-400  right-[50px] " />
            </div>
          </div>
          <div className="w-full min-h-[500px] h-fit flex items-center  flex-col-reverse lg:flex-row justify-center  md:gap-x-12 lg:gap-x-24">
            <div className="w-[400px] h-full  flex flex-col items-center justify-center gap-y-4 relative">
              <Image
                src={SecondImage}
                alt="this is an image"
                width={235}
                height={300}
                className="object-cover border border-black"
              />
              <div className="h-[100px] w-[235px] top-[20px] z-[-20] absolute bg-blue-500  right-[50px] " />
            </div>
            <div className="w-[400px] h-full flex flex-col p-6 lg:p-0 items-start justify-center gap-y-4">
              <h2 className="text-2xl font-bold ">
                {landing["our mession"].title}{" "}
              </h2>
              <p className="text-md font-gray-700 ">
                {landing["our mession"].description}
              </p>
            </div>
          </div>
          <div className="w-full min-h-[500px] h-fit flex items-center justify-center flex-col lg:flex-row  md:gap-x-12 lg:gap-x-24">
            <div className="w-[400px] h-full flex flex-col  p-6 lg:p-0 items-start justify-center gap-y-4">
              <h2 className="text-3xl font-bold ">
                {landing["why choose us"].title}
              </h2>
              <p className="text-lg font-gray-700 ">
                {landing["why choose us"].description}
              </p>
            </div>
            <div className="w-[400px] h-full  relative flex flex-col items-center justify-center gap-y-4">
              <Image
                src={TheardImage}
                alt="this is an image"
                width={235}
                height={300}
                className="object-cover border border-black relative"
              />

              <div className="h-[400px] w-[235px] top-[50px] z-[-20] absolute bg-yellow-400  right-[40px] " />
            </div>
          </div>
        </section>

        <section id="tesimonials" className="w-full h-fit p-4">
          <h2 className=" text-3xl lg:text-4xl font-bold text-start md:text-center my-12 ">
            {reviewsTitle}
          </h2>
          <div className="flex w-full mx-auto max-w-[750px] justify-start items-start gap-6 flex-wrap">
            {reviews.map((item, index) => {
              return (
                <TestimonialCard
                  key={item.auther.name + index}
                  auther={item.auther.name}
                  position="studnet"
                  comment={item.content}
                />
              );
            })}
          </div>
        </section>

        <section
          id="map"
          className="w-full h-fit flex flex-col items-start justify-center lg:items-center"
        >
          <h2 className=" text-2xl lg:text-4xl font-bold text-start md:text-center my-12 ">
            {findus}
          </h2>
          <Map />
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
