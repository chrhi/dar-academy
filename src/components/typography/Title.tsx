"use client";

import { type FC } from "react";
import { motion } from "framer-motion";

interface titleAbdullahProps {
  text: string;
}

const Title: FC<titleAbdullahProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h2 className="font-bold  text-4xl text-gray-950">{text}</h2>

      <motion.div
        whileInView={{
          x: [50, 0],
          opacity: [0, 1],
        }}
        className="w-[150px] h-[10px] rounded-full bg-blue-500"
      />
    </div>
  );
};

export default Title;
