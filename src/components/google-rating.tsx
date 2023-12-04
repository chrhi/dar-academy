import Image from "next/image";
import type { FC } from "react";
import GoogleRatingImage from "../../public/google.svg";

const GoogleRating: FC = ({}) => {
  return (
    <div className="w-[200px] h-[100px]   flex items-center justify-center">
      <Image
        width={200}
        height={100}
        alt="google rating "
        src={GoogleRatingImage}
      />
    </div>
  );
};

export default GoogleRating;
