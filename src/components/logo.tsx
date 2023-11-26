import Image from "next/image";
import type { FC } from "react";

interface logoAbdullahProps {}

const Logo: FC = ({}) => {
  return (
    <div className="w-[55px] h-[55px] flex items-center justify-start">
      <Image src="/logo.jpg" alt="logo" width={55} height={55} />
    </div>
  );
};

export default Logo;
