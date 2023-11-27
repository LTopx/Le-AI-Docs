import type { Variants } from "framer-motion";

interface GetVariantsProps {
  duration?: number;
  delay?: number;
}

export const getVariants = (params?: GetVariantsProps) => {
  const duration = params?.duration || 0.6;
  const delay = params?.delay || 0;

  const ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0.001, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration, delay } },
  };

  return ANIMATION_VARIANTS;
};

export const getSlideVariants = (params?: GetVariantsProps) => {
  const duration = params?.duration || 0.6;
  const delay = params?.delay || 0;

  const MULTIDIRECTION_SLIDE_VARIANTS: Variants = {
    hidden: { opacity: 0, x: "-5vw" },
    visible: { opacity: 1, x: 0, transition: { duration, delay } },
    right: { opacity: 0, x: "5vw" },
  };

  return MULTIDIRECTION_SLIDE_VARIANTS;
};
