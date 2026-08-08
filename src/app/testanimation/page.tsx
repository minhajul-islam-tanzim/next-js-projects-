"use client";

import { motion } from "motion/react";

motion;
const page = () => {
  const varients = {
    varient1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },

    varient2: {
      x: 100,
      y: -300,
      rotate: 90,
    },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded "
        initial={{ x: -100 }}
        animate={varients.varient2}
        transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
};

export default page;
