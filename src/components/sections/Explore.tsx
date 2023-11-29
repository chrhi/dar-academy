"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { exploreWorlds } from "@/data";
import { staggerContainer } from "@/animations/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import ExploreCard from "@/components/ExploreCard";
const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          //@ts-ignore
          title={
            <>
              choisissez le meilleur cours <br className="md:block hidden" />{" "}
              qui correspond à votre intérêt
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
