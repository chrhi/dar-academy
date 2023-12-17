import type { FC } from "react";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";

interface TrainningCardAbdullahProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TrainningCard: FC<TrainningCardAbdullahProps> = ({
  description,
  image,
  title,
}) => {
  return (
    <div className="w-[350px] h-[450px] rounded-lg  border shadow">
      <div className="w-full h-[200px] relative bg-black rounded-t-lg">
        <Image
          src={image}
          alt={title + "image"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start p-4 pl-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="line-clamp-5 text-gray-700">{description}</p>
      </div>
      <div className="w-full h-[50px] flex justify-end items-center p-4 ">
        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default TrainningCard;
