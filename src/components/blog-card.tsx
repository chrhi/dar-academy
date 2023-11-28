import type { FC } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

interface TestimonialCardAbdullahProps {}

const BlogCard: FC = ({}) => {
  return (
    <Card className="w-[400px] h-[300px] p-4  mx-4">
      <CardTitle>
        <div className="w-full  h-[30px] flex items-center justify-start gap-x-4">
          <p className="text-xl font-bold  text-black">
            we are doing something
          </p>
        </div>
      </CardTitle>
      <CardContent className=" text-md text-start mt-4 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam
        dolore facere at rem quia laudantium qui, consequuntur autem fugit
        minima, id incidunt itaque eum? Qui maxime totam nisi ipsam.
      </CardContent>
    </Card>
  );
};

export default BlogCard;
