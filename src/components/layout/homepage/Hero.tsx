import { type FC } from "react";

interface HeroAbdullahProps {}

const Hero: FC = ({}) => {
  return (
    <section
      id="hero section"
      className="w-full relative flex flex-col md:flex-row items-center justify-between "
    >
      <div className=" p-4 md:p-0  md:pt-12 w-full md:w-[50%] h-full flex flex-col   ">
        <h1 className=" text-5xl md:text-6xl text-center md:text-start font-extrabold tracking-wider text-black">
          Bienvenue à Dar Academy
        </h1>
        <h2 className=" text-5xl md:text-6xl  text-center md:text-start font-extrabold tracking-wider text-black my-4">
          École privée où vous pouvez acquérir de nouvelles compétences
        </h2>
      </div>

      <div className="absolute   top-[100px] right-[100px] w-[500px] h-[500px] bg-yellow-500 rounded-[50%] "></div>

      <div className="absolute top-[50px] right-[50px] w-[500px] h-[500px] bg-blue-500 rounded-[50%] "></div>
    </section>
  );
};

export default Hero;
