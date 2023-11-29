"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { startingFeatures } from "@/data";
import { TitleText, TypingText } from "@/components/CustomTexts";
import StartSteps from "../StartSteps";
import { staggerContainer, fadeIn, planetVariants } from "@/animations/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/dar-academy/2022-07-13.jpg"
          alt="get-started"
          className="w-[90%] h-[90%]  object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText
          //@ts-ignore
          title="| How Metaversus Works"
        />

        <TitleText
          //@ts-ignore
          title={<>Pourquoi nous choisir</>}
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              //@ts-ignore
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
