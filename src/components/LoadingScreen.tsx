import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#141424] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle background glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(108, 63, 175, 0.15), transparent 70%)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo container with light reveal effect */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Dark base layer - logo starts invisible */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="./src/assets/logo.jpeg"
            alt="Kairo"
            className="w-24 h-24 opacity-10"
          />
        </div>

        {/* Revealed logo with light sweep mask */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)",
            maskSize: "200% 100%",
            WebkitMaskSize: "200% 100%",
          }}
          animate={{
            maskPosition: ["0% 0%", "100% 0%"],
            WebkitMaskPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        >
          <img
            src="./src/assets/logo.jpeg"
            alt="Kairo"
            className="w-24 h-24 drop-shadow-[0_0_20px_rgba(108,63,175,0.8)]"
          />
        </motion.div>

        {/* Spotlight effect that follows the reveal */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80px 120px at 50% 50%, rgba(166, 115, 149, 0.3), transparent 70%)",
          }}
          animate={{
            x: [-100, 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        />

        {/* Shimmering light rays */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(166,115,149,0.2) 30%, rgba(108,63,175,0.3) 50%, rgba(166,115,149,0.2) 70%, transparent 100%)",
          }}
          animate={{
            x: [-200, 200],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        />

        {/* Radial glow pulse */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(circle at center, rgba(108, 63, 175, 0.4), transparent 60%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Loading dots */}
      <motion.div
        className="absolute bottom-1/3 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #6C3FAF, #A67395)",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
