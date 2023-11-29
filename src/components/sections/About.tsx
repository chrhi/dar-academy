"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components/CustomTexts";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/animations/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="our mession" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        À <span className="font-extrabold text-black">Dar Academy</span> , notre
        mission est de cultiver une expérience éducative transformatrice qui
        permet aux étudiants d&apos;exceller sur les plans académique, éthique
        et social. Nichés au cœur de{" "}
        <span className="font-extrabold text-black"> l&apos;Algérie </span>,
        nous nous engageons à nourrir les esprits curieux, à favoriser un
        sentiment de{" "}
        <span className="font-extrabold text-black"> communauté </span> et à
        inculquer des valeurs qui s&apos;étendent au-delà de la salle de classe.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
