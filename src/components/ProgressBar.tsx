import { motion } from "motion/react";
import { Page } from "../App";

interface ProgressBarProps {
  currentPage: Page;
  pageSequence: Page[];
}

export default function ProgressBar({ currentPage, pageSequence }: ProgressBarProps) {
  const currentIndex = pageSequence.indexOf(currentPage);
  const progress = ((currentIndex + 1) / pageSequence.length) * 100;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#7b20b5] via-[#9333ea] to-[#FFD700]"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </motion.div>
  );
}
