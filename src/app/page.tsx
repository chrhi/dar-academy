import Hero from "@/components/layout/homepage/Hero";
import Testimonials from "@/components/layout/homepage/Testimonials";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Title from "@/components/typography/Title";
import Image from "next/image";

//md:h-[600px]
export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />

      <section className="w-full my-4 flex flex-col justify-start items-start gap-y-4 h-fit md:h-[550px] ">
        <Title text="Make Education Acceable" />
        <div className=" px-4 lg:px-0 w-full h-[200px] lg:h-[400px] flex items-center justify-between gap-x-8">
          {[
            {
              color: "bg-yellow-400",
              text: "Primere",
            },

            {
              color: "bg-blue-500",
              text: "syam",
            },

            {
              color: "bg-green-500",
              text: "licee",
            },
          ].map((item) => {
            return (
              <div
                className={` w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] rounded-xl shadow ${item?.color} flex items-center justify-center `}
                key={item?.text}
              >
                <p className="text-white text-xl font-bold"> {item?.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full my-4 flex flex-col justify-start items-start gap-y-4 h-fit md:h-[550px] ">
        <Title text="Our Mession" />
        <div className="w-full h-fit lg:h-[400px] flex items-center justify-center flex-col-reverse lg:flex-row gap-x-8">
          <div className=" w-full lg:w-[50%] lg:h-full h-[300px]   relative p-4">
            <div className="absolute top-10  left-24 w-[400px] h-[250px] rounded-lg  ">
              <Image
                src="/dar-academy/2022-07-13 (1).jpg"
                alt="dar academy"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute shadow top-24 left-0 w-[450px] h-[300px] rounded-lg ">
              <Image
                src="/dar-academy/2022-07-13 (1).jpg"
                alt="dar academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className=" w-full lg:w-[50%] lg:h-full h-[400px]">
            <h2 className="text-2xl font-semibold ">this is the title</h2>
            <p className="text-xl text-start text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              placeat asperiores consequuntur quis doloribus odit sed sequi
              ducimus rem tempora quod necessitatibus ea nam, sapiente sunt
              dolores! Molestias, recusandae ea.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full my-4 flex flex-col justify-start items-start gap-y-4 h-fit md:h-[550px] ">
        <Title text="See Our Latest News" />
        <div className="w-full h-[400px] bg-pink-600 flex items-center justify-center gap-x-8"></div>
      </section>

      <section className="w-full my-4 flex flex-col justify-start items-start gap-y-4 h-fit ">
        <Title text="What Our Students Are Saying" />
        <Testimonials />
      </section>

      {/* our services */}
    </MaxWidthWrapper>
  );
}
