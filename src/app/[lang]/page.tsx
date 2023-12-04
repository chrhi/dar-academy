import FacebookRating from "@/components/facebook-rating";
import GoogleRating from "@/components/google-rating";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import TestimonialCard from "@/components/testimonial-card";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Balancer } from "react-wrap-balancer";

//md:h-[600px]
export default async function Pape({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { landing } = await getDictionary(lang);
  return (
    <MaxWidthWrapper>
      <main>
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className=" relative mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pt-12  text-center md:pt-32"
        >
          <Balancer
            as="h1"
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-blue-500">{landing.name}</span> <br />
            ecol de formation
          </Balancer>
          <Balancer className="max-w-[42rem] font-semibold leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {landing.description}
          </Balancer>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GoogleRating />
            <FacebookRating />
          </div>
        </section>

        <section id="our services" className=" min-w-full w-fit  h-fit">
          <h2 className="text-sm  font-semibold text-gray-700 text-center my-4 ">
            Our Services
          </h2>
          <div className="flex min-w-full w-fit mx-auto justify-center items-start gap-4  flex-wrap">
            <div className="w-[100px] h-[100px] bg-blue-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-md text-white font-semibold text-center">
                Les Course Pour Primaire
              </span>
            </div>
            <div className="w-[100px] h-[100px] bg-yellow-400 rounded-lg shadow flex items-center justify-center">
              <span className="text-md text-white font-semibold text-center">
                Les Course Pour Collège
              </span>
            </div>
            <div className="w-[100px] h-[100px] bg-sky-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-md text-white font-semibold text-center">
                Les Course Pour Lycée
              </span>
            </div>
            <div className="w-[100px] h-[100px] bg-violet-500 rounded-lg shadow flex items-center justify-center">
              <span className="text-md text-white font-semibold text-center">
                Les formation pratique
              </span>
            </div>
          </div>
        </section>

        <section>
          {/* 
          hadik taswiraa wa text tolatiya */}
        </section>

        <section id="tesimonials" className="w-full h-fit">
          <h2 className="text-4xl font-bold text-start md:text-center my-12 ">
            The reviews are in.
          </h2>
          <div className="flex w-full mx-auto max-w-[750px] justify-start items-start gap-6 flex-wrap">
            <TestimonialCard
              auther="abdellah chehri"
              position="studnet"
              comment="JS Mastery's Next.js course is amazing. The way Adrian structures the course by giving you active lessons that you build out on your own is perfect for learning. These active lessons have just the right amount of difficulty so you are never lost yet are always pushing yourself and learning more. Also, by the end of the course you will have an incredible project that would make any portfolio stand out."
            />
            <TestimonialCard
              auther="abdellah chehri"
              position="studnet"
              comment="This course is a game-changer for anyone serious about mastering Next.js 14. Adrian's teaching style is engaging, the curriculum is exhaustive, and the focus on active, hands-on learning is unparalleled. Building DevFlow, a real-world app, can not only solidified your understanding but also gave you a portfolio-worthy project. If you want to become a top 1% Next.js developer, this course is your roadmap."
            />
            <TestimonialCard
              auther="abdellah chehri"
              position="studnet"
              comment="JS Mastery's Next.js 14 course is a transformative journey for aspiring top-tier Next.js developers. Adrian's hands-on approach ties every concept to real-world projects, making the learning curve practical and manageable. Even with a good understanding of Next.js, I was lifted to new levels of skill and insight. The course delves deep, touching on advanced architectural decisions and patterns, going beyond the basics. Whether you're a newbie or already familiar with Next.js, this course is an investment in becoming a top 1% Next.js developer. Adrian's engaging teaching style makes complex topics digestible and fun, creating a rewarding learning experience."
            />
          </div>
        </section>

        <section>{/* here goes google map */}</section>
      </main>
    </MaxWidthWrapper>
  );
}
