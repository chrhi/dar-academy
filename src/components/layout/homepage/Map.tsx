import { type FC } from "react";

interface GoogleReviewsAbdullahProps {}

const Map: FC = ({}) => {
  return (
    <div className="w-full relative h-fit">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.5060018488352!2d3.1501940097462486!3d36.66233317534621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e53a9c818015d%3A0xf23dd52c112912f!2sDar%20Academy!5e0!3m2!1sen!2sdz!4v1701117591716!5m2!1sen!2sdz"
        width="400"
        height="300"
        loading="lazy"
        className="lg:w-full w-[90%] mx-auto h-[550px] border  border-black  my-4"
      ></iframe>
      <div className="h-[550px] w-[90%] top-[25px] z-[-20] absolute bg-blue-500 right-[0] lg:right-[-10px] " />
    </div>
  );
};

export default Map;
