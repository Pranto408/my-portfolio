"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 z-[60] origin-left"
      style={{ scaleX }}
    />
  );
}
