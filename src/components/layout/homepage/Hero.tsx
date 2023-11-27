import FacebookRating from "@/components/facebook-rating";
import GoogleRating from "@/components/google-rating";
import Image from "next/image";
import { type FC } from "react";

interface HeroAbdullahProps {}

const Hero: FC = ({}) => {
  return (
    <section
      id="hero section"
      className="w-full h-full relative flex flex-col md:flex-row items-center justify-between "
    >
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-56 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div> */}

      <div className="  p-4 md:p-0   w-full lg:w-[50%] h-full md:min-h-[600px] flex flex-col  justify-center">
        <h1 className=" text-5xl md:text-6xl mt-14  text-center md:text-start font-bold tracking-wider text-black">
          Dar Academy
          <br />
          Institus de formations
        </h1>
        <p className="text-lg text-gray-500 text-start my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto at
          debitis optio cum laborum beatae maxime, voluptas pariatur? Vitae
          ratione odit commodi, doloribus esse deleniti harum itaque accusamus
          voluptatem ducimus?
        </p>
        <div className="w-full mt-6 h-[50px] flex items-center justify-start gap-x-4">
          <GoogleRating />
          <FacebookRating />
        </div>
      </div>

      <div className="absolute  hidden lg:block top-[100px] right-[0] w-[500px] h-[500px] bg-blue-500 rounded-[50%] "></div>

      <div className="absolute hidden lg:flex   items-center justify-center top-[50px] p-4 right-[30px] overflow-hidden w-[500px] h-[500px] bg-blue-500 rounded-[50%] ">
        <div className="w-[450px] h-[450px] relative rounded-[50%] overflow-hidden bg-black ">
          <Image
            src="/student.webp"
            alt="student image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* <div className="absolute  top-[50px] p-4 right-[30px] overflow-hidden w-[500px] h-[500px] bg-blue-500 rounded-[50%] ">
        <Image
          src="/student.webp"
          alt="student image"
          width={200}
          height={200}
          className="object-cover"
        />
      </div> */}

      {/* <div className="absolute  bottom-[-200px] p-4 left-[400px] w-[200px] h-[200px] rounded-[50%] ">
        <Image
          src="/5801917.png"
          alt="student image"
          fill
          className="object-cover"
        />
      </div> */}
      {/* <div className="absolute top-[70px] p-4 right-0 w-[100px] h-[100px] rounded-[50%] ">
        <Image
          src="/1546998.png"
          alt="student image"
          fill
          className="object-cover"
        />
      </div> */}
    </section>
  );
};

export default Hero;
