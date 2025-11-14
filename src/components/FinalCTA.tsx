import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Page } from "../App";

interface FinalCTAProps {
  navigateTo?: (page: Page) => void;
  isAuthenticated?: boolean;
}

export default function FinalCTA({ navigateTo, isAuthenticated }: FinalCTAProps) {
  return (
    <section className="bg-[#1a1a2e] py-32 relative overflow-hidden">
      {/* Gradient background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C3FAF]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A67395]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 glass-strong rounded-full px-5 py-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#A67395]" />
            <p className="text-sm text-[#F2F2F4]">Join 10,000+ Creators</p>
          </motion.div>

          {/* Heading */}
          <h2 className="text-6xl md:text-7xl mb-8 text-[#F2F2F4] leading-tight">
            Ready to turn your passion into profit?
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#F2F2F4]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join South Africa's fastest-growing creator marketplace and start earning today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              onClick={() => navigateTo?.(isAuthenticated ? "createCompany" : "signup")}
              className="group px-10 py-5 gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo-lg relative overflow-hidden text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 50px rgba(108, 63, 175, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                Get Started Free
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button 
              onClick={() => navigateTo?.("marketplace")}
              className="px-10 py-5 glass-strong text-[#F2F2F4] rounded-[20px] shadow-kairo border border-[#F2F2F4]/20 text-lg"
              whileHover={{ 
                scale: 1.05,
                background: "rgba(242, 242, 244, 0.12)",
                borderColor: "rgba(242, 242, 244, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Explore Marketplace
            </motion.button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[#F2F2F4]/60"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6C3FAF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6C3FAF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6C3FAF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure payments</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
