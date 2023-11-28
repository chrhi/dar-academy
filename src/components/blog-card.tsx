import type { FC } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

interface TestimonialCardAbdullahProps {}

const BlogCard: FC = ({}) => {
  return (
    <Card className="w-full h-full">
      <CardTitle>
        <div className="w-full p-4 h-[30px] flex items-center justify-start gap-x-4">
          <p className="text-lg  text-black">we are doing something</p>
        </div>
      </CardTitle>
      <CardContent className="p-4 text-md text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam
        dolore facere at rem quia laudantium qui, consequuntur autem fugit
        minima, id incidunt itaque eum? Qui maxime totam nisi ipsam.
      </CardContent>
    </Card>
  );
};

export default BlogCard;
