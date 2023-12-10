import type { FC } from "react";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardAbdullahProps {
  auther: string;
  position: string;
  comment: string;
}

//line-clamp-2 this one will turnckat after a line number

const TestimonialCard: FC<TestimonialCardAbdullahProps> = ({
  auther,
  comment,
  position,
}) => {
  return (
    <div className="w-[90%] max-w-[346px] overflow-hidden  min-h-[200px] bg-gray-100  h-fit p-4 rounded-lg mx-auto lg:mx-0 ">
      <div className="w-full h-[50px] flex items-center justify-start  gap-x-1 ">
        <Icons.star className="w-4 h-4 text-blue-500" />
        <Icons.star className="w-4 h-4 text-blue-500" />
        <Icons.star className="w-4 h-4 text-blue-500" />
        <Icons.star className="w-4 h-4 text-blue-500" />
        <Icons.star className="w-4 h-4 text-blue-500" />
      </div>
      <p className="font-semibold  text-start tracking-normal text-base">
        {comment}
      </p>
      <div className="w-full h-[80px] gap-x-4 flex items-center justify-start">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col h-full justify-center gap-y-1">
          <p className="font-bold text-md">{auther}</p>
          <p className="text-gray-700 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
