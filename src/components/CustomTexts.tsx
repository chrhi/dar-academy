"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/animations/motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles?: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-gray-700 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
