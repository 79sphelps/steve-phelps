export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,

    scale: 0.96,
  },

  show: {
    opacity: 1,

    scale: 1,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
