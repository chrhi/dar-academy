import FacebookRating from "@/components/facebook-rating";
import GoogleRating from "@/components/google-rating";
import Image from "next/image";
import { type FC } from "react";

interface HeroAbdullahProps {}

const Hero: FC = ({}) => {
  return (
    <section
      id="hero section"
      className="w-full relative flex flex-col md:flex-row items-center justify-between "
    >
      <div className=" p-4 md:p-0  md:pt-12 w-full md:w-[50%] h-full flex flex-col   ">
        <h1 className=" text-5xl md:text-6xl italic text-center md:text-start font-extrabold tracking-wider text-black">
          Bienvenue à Dar Academy
          <br />
          École privée où vous pouvez acquérir de nouvelles compétences
        </h1>
        <div className="w-full mt-6 h-[50px] flex items-center justify-start gap-x-4">
          <GoogleRating />
          <FacebookRating />
        </div>
      </div>

      <div className="absolute   top-[100px] right-[0] w-[500px] h-[500px] bg-yellow-500 rounded-[50%] "></div>

      <div className="absolute  top-[50px] p-4 right-[30px] overflow-hidden w-[500px] h-[500px] bg-blue-500 rounded-[50%] ">
        <Image
          src="/student.webp"
          alt="student image"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute  bottom-[-200px] p-4 left-[400px] w-[200px] h-[200px] rounded-[50%] ">
        <Image
          src="/5801917.png"
          alt="student image"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[70px] p-4 right-0 w-[100px] h-[100px] rounded-[50%] ">
        <Image
          src="/1546998.png"
          alt="student image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
