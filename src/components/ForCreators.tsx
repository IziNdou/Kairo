import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Page } from "../App";

interface ForCreatorsProps {
  navigateTo?: (page: Page) => void;
  isAuthenticated?: boolean;
}

export default function ForCreators({ navigateTo, isAuthenticated }: ForCreatorsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="bg-[#141424] py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#A67395]/20 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div 
              className="glass-strong rounded-[20px] p-8 shadow-kairo-lg"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 40px rgba(108, 63, 175, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl text-[#F2F2F4]">Dashboard</h3>
                <span className="text-sm text-[#A67395]">This Month</span>
              </div>

              {/* Earnings Card */}
              <motion.div 
                className="gradient-primary rounded-[20px] p-6 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#F2F2F4]/70">Total Earnings</span>
                  <TrendingUp className="w-5 h-5 text-[#F2F2F4]" />
                </div>
                <motion.p 
                  className="text-4xl text-[#F2F2F4] mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  R45,230
                </motion.p>
                <span className="text-sm text-[#F2F2F4]/70">+23% from last month</span>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="glass rounded-[20px] p-4"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[#A67395]" />
                    <span className="text-sm text-[#F2F2F4]/70">Followers</span>
                  </div>
                  <p className="text-2xl text-[#F2F2F4]">28.5K</p>
                </motion.div>

                <motion.div 
                  className="glass rounded-[20px] p-4"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-[#A67395]" />
                    <span className="text-sm text-[#F2F2F4]/70">Engagement</span>
                  </div>
                  <p className="text-2xl text-[#F2F2F4]">8.2%</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 glass-purple rounded-full px-5 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <DollarSign className="w-4 h-4 text-[#6C3FAF]" />
              <p className="text-sm text-[#F2F2F4]">For Creators</p>
            </motion.div>

            <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight">
              Monetize your skills and audience.
            </h2>

            <p className="text-xl text-[#F2F2F4]/70 mb-8 leading-relaxed">
              Turn your creativity into income through authentic partnerships.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Connect with top South African brands",
                "Set your own rates and terms",
                "Track earnings in real-time",
                "Get paid securely and on time"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-[#F2F2F4]/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-[#F2F2F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={() => navigateTo?.(isAuthenticated ? "dashboard" : "signup")}
              className="px-8 py-4 gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(108, 63, 175, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Start Earning Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
