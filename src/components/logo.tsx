import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface logoAbdullahProps {}

const Logo: FC = ({}) => {
  return (
    <Link
      href={"/"}
      className="w-[70px] h-[70px] flex items-center justify-start"
    >
      <Image src="/logo.jpg" alt="logo" width={70} height={70} />
    </Link>
  );
};

export default Logo;
