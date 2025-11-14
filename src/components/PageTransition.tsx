import { motion } from "motion/react";

interface PageTransitionProps {
  direction: number;
}

export default function PageTransition({ direction }: PageTransitionProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#7b20b5]/10 to-[#FFD700]/10"
        initial={{ x: direction > 0 ? "100%" : "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: direction > 0 ? "-100%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </motion.div>
  );
}
