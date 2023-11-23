import { type FC } from "react";

interface HeroAbdullahProps {}

const Hero: FC = ({}) => {
  return (
    <section
      id="hero section"
      className="w-full flex flex-col md:flex-row items-center justify-between "
    >
      <div className=" p-4 md:p-0 md:pt-8 w-full md:w-[50%] h-full flex flex-col   ">
        <h1 className=" text-5xl md:text-6xl text-center md:text-start font-extrabold tracking-wider text-white">
          DAR ACADEMY FORMATION
        </h1>
        <h2 className=" text-5xl md:text-6xl  text-center md:text-start font-extrabold tracking-wider text-white my-4">
          École privée où vous pouvez acquérir de nouvelles compétences
        </h2>
      </div>
    </section>
  );
};

export default Hero;
