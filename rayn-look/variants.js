export const fadeIn = (direction = "up", duration = 0.5, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction = "left", duration = 0.5, delay = 0) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (scale = 0.5, duration = 0.5, delay = 0) => {
  return {
    hidden: {
      scale: scale,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};
