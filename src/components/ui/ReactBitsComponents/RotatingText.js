import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { AnimatePresence, motion } from "motion/react";

const RotatingText = forwardRef(
  (
    {
      texts = [],
      rotationInterval = 5000,
      loop = true,
      auto = true,

      initial = { y: 30, opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: -30, opacity: 0 },

      transition = {
        type: "spring",
        damping: 30,
        stiffness: 400,
      },

      mainClassName = "",

      onNext,
    },
    ref
  ) => {
    const [index, setIndex] = useState(0);

    const next = () => {
      setIndex((current) => {
        const nextIndex =
          current >= texts.length - 1
            ? loop
              ? 0
              : current
            : current + 1;

        if (onNext) {
          onNext(nextIndex);
        }

        return nextIndex;
      });
    };

    const previous = () => {
      setIndex((current) =>
        current <= 0
          ? loop
            ? texts.length - 1
            : 0
          : current - 1
      );
    };

    const jumpTo = (value) => {
      if (value >= 0 && value < texts.length) {
        setIndex(value);
      }
    };

    const reset = () => setIndex(0);

    useImperativeHandle(ref, () => ({
      next,
      previous,
      jumpTo,
      reset,
    }));

    useEffect(() => {
      if (!auto || texts.length <= 1) return;

      const timer = setInterval(next, rotationInterval);

      return () => clearInterval(timer);
    }, [auto, rotationInterval, texts.length]);

    return (
      <div className={mainClassName}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {texts[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

RotatingText.displayName = "RotatingText";

export default RotatingText;