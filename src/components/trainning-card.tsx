import type { FC } from "react";
import { Button } from "./ui/button";

interface TrainningCardAbdullahProps {}

const TrainningCard: FC = ({}) => {
  return (
    <div className="w-[350px] h-[450px] rounded-lg  border shadow">
      <div className="w-full h-[200px] bg-black rounded-t-lg"></div>
      <div className="flex flex-col items-start p-4 pl-2">
        <h2 className="text-xl font-semibold">Andaroid development</h2>
        <p className="line-clamp-5 text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
          incidunt sunt obcaecati natus neque consectetur corrupti nemo eos
          alias facilis unde perferendis iure aut cumque. Voluptatum,
          doloremque. Necessitatibus, dicta debitis?
        </p>
      </div>
      <div className="w-full h-[50px] flex justify-end items-center p-4 ">
        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default TrainningCard;
