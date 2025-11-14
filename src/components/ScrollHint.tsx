import { motion } from "motion/react";
import { ChevronDown, MousePointer2 } from "lucide-react";

export default function ScrollHint() {
  return (
    <motion.div
      className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MousePointer2 className="w-4 h-4 text-[#7b20b5]" />
        <span className="text-black/60">Swipe or use arrow keys</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-[#7b20b5]" />
      </motion.div>
    </motion.div>
  );
}
