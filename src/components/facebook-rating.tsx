import Image from "next/image";
import type { FC } from "react";

const FacebookRating: FC = ({}) => {
  return (
    <div className="w-[170px] h-[50px] bg-white shadow rounded-lg flex items-center justify-center">
      <Image
        width={150}
        height={65}
        alt="google rating "
        src={"/facebook rating.svg"}
      />
    </div>
  );
};

export default FacebookRating;
