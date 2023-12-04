import Image from "next/image";
import type { FC } from "react";
import FacebookRatingImage from "../../public/facebook.svg";

const FacebookRating: FC = ({}) => {
  return (
    <div className="w-[200px] h-[100px]    flex items-center justify-center">
      <Image
        width={200}
        height={100}
        alt="facebook rating "
        src={FacebookRatingImage}
      />
    </div>
  );
};

export default FacebookRating;
