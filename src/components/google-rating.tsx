import Image from "next/image";
import type { FC } from "react";

const GoogleRating: FC = ({}) => {
  return (
    <div className="w-[200px] h-[100px]   flex items-center justify-center">
      <Image
        width={200}
        height={100}
        alt="google rating "
        src={"/google rating.svg"}
      />
    </div>
  );
};

export default GoogleRating;
