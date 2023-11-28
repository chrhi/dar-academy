"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./config";
import Title from "../typography/Title";
import { Button } from "../ui/button";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 3]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="w-full h-[500px] overflow-hidden">
      <div className="w-full my-4 h-[70px] flex items-center justify-between">
        <Title text="see our latest news" />
        <div className="ml-auto  w-[50%] flex justify-end gap-x-6 items-center">
          <Button
            size="lg"
            className="bg-black rounded-[50%] w-[70px] h-[70px]"
            onClick={() => paginate(1)}
          >
            {"‣"}
          </Button>
          <Button
            size="lg"
            className="bg-black rounded-[50%] w-[70px] h-[70px] "
            onClick={() => paginate(-1)}
          >
            {"‣"}
          </Button>
        </div>
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          layout
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="w-full h-full flex items-center justify-center gap-x-4"
        >
          {[1, 2, 3].map((item) => (
            <motion.img
              key={item}
              className="w-[400px]"
              src={images[imageIndex]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
