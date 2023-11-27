import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0.001 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export default function Divider() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={ANIMATION_VARIANTS}
      className="my-16 flex items-center gap-2"
    >
      <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
      <Image src="/logo.png" alt="logo" width={24} height={24} />
      <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
    </motion.div>
  );
}
