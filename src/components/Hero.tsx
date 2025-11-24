import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Page } from "../App";

interface HeroProps {
  navigateTo?: (page: Page) => void;
  isAuthenticated?: boolean;
}

export default function Hero({ navigateTo, isAuthenticated }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 gradient-primary"
        style={{ opacity }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A67395]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6C3FAF]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-6 text-center z-10"
        style={{ y }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-8xl tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1] text-[#F2F2F4]"
          >
            Where South African Brands Meet Creators.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#F2F2F4]/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Collaborate with brands and earn from your audience — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
          >
            <motion.button 
              onClick={() => navigateTo?.(isAuthenticated ? "createCompany" : "signup")}
              className="group px-8 py-4 bg-[#F2F2F4] text-[#6C3FAF] rounded-[20px] shadow-kairo-lg relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(242, 242, 244, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button 
              onClick={() => navigateTo?.("marketplace")}
              className="group px-8 py-4 glass-strong text-[#F2F2F4] rounded-[20px] shadow-kairo border-[#F2F2F4]/20"
              whileHover={{ 
                scale: 1.05,
                background: "rgba(242, 242, 244, 0.12)",
                borderColor: "rgba(242, 242, 244, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className="inline-flex items-center gap-2">
                Explore Creators
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[#F2F2F4]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#F2F2F4]/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}