"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PremiumLogo from "./PremiumLogo";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 400); return 100; }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center glow">
              <span className="font-display text-3xl font-bold text-white">P</span>
            </div> */}
            <PremiumLogo/>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-lg text-muted-foreground mb-8 tracking-widest uppercase"
          >
            Pranto Dutta
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full loader-bar rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 font-mono text-xs text-muted-foreground"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
