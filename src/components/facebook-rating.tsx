import Image from "next/image";
import type { FC } from "react";

const FacebookRating: FC = ({}) => {
  return (
    <div className="w-[200px] h-[100px]    flex items-center justify-center">
      <Image
        width={200}
        height={100}
        alt="google rating "
        src={"/facebook rating.svg"}
      />
    </div>
  );
};

export default FacebookRating;