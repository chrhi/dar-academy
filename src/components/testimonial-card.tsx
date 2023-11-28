import type { FC } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardAbdullahProps {
  name: string;
  review: string;
  image: string;
}

const TestimonialCard: FC<TestimonialCardAbdullahProps> = ({
  image,
  name,
  review,
}) => {
  return (
    <Card className="  w-[90%] mx-auto lg:w-[350px] h-fit min-h-[250px] p-4 ">
      <CardTitle>
        <div className="w-full  h-[40px] flex items-center justify-start gap-x-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className="text-lg  text-black">{name}</p>
        </div>
      </CardTitle>
      <CardContent className=" text-xl text-gray-700 mt-4 ">
        {review}
      </CardContent>
      <CardFooter className="flex mt-auto  items-center justify-start gap-x-2">
        {["one", "two", "tree", "four", "five"].map((item) => (
          <Star key={item} className="w-4 h-4  text-yellow-400" />
        ))}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
