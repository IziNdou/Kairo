import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Page } from "../App";

interface PageNavigatorProps {
  currentPage: Page;
  pageSequence: Page[];
  navigateTo: (page: Page) => void;
  direction: number;
}

export default function PageNavigator({ 
  currentPage, 
  pageSequence, 
  navigateTo,
  direction 
}: PageNavigatorProps) {
  const currentIndex = pageSequence.indexOf(currentPage);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < pageSequence.length - 1;

  const goToPrev = () => {
    if (hasPrev) {
      navigateTo(pageSequence[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigateTo(pageSequence[currentIndex + 1]);
    }
  };

  return (
    <>
      {/* Navigation Arrows - Hidden on mobile */}
      <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-40 hidden md:block">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          {hasPrev && (
            <motion.button
              onClick={goToPrev}
              className="pointer-events-auto glass-dark p-4 rounded-full shadow-xl hover:shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.1, 
                x: -5,
                background: "rgba(123, 32, 181, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ChevronLeft className="w-6 h-6 text-[#7b20b5]" />
            </motion.button>
          )}
          {hasNext && (
            <motion.button
              onClick={goToNext}
              className="pointer-events-auto glass-dark p-4 rounded-full shadow-xl hover:shadow-2xl ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.1, 
                x: 5,
                background: "rgba(123, 32, 181, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ChevronRight className="w-6 h-6 text-[#7b20b5]" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Page Indicators */}
      <motion.div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 glass-dark px-6 py-3 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {pageSequence.map((page, index) => (
          <motion.button
            key={page}
            onClick={() => navigateTo(page)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-[#7b20b5]" 
                : "w-2 bg-black/20 hover:bg-black/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
        ))}
      </motion.div>

      {/* Page Counter - Hidden on mobile */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 glass-dark px-4 py-2 rounded-full text-sm hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[#7b20b5]">{currentIndex + 1}</span>
        <span className="text-black/40 mx-1">/</span>
        <span className="text-black/60">{pageSequence.length}</span>
      </motion.div>
    </>
  );
}
