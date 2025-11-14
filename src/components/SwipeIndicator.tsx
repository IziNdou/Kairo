import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function SwipeIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.3, 1, 0.3]);

  useEffect(() => {
    // Hide after a few seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="glass-dark px-8 py-4 rounded-2xl"
        style={{ opacity }}
        animate={{
          x: [0, -20, 20, 0],
          scale: [1, 1.05, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-6">
          <motion.div
            animate={{ x: [-10, 0, -10] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#7b20b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span className="text-sm text-black/60 whitespace-nowrap">Swipe to navigate</span>
          <motion.div
            animate={{ x: [10, 0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#7b20b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
