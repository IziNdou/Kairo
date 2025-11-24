import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Zap, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    { icon: Users, label: "Creators", value: "Zero Followers Needed", color: "#6C3FAF" },
    { icon: DollarSign, label: "Earn Per", value: "1,000 Views", color: "#A67395" },
    { icon: Target, label: "For Businesses", value: "Affordable Campaigns", color: "#6C3FAF" },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#141424] via-[#1a1a2e] to-[#141424] py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#6C3FAF]/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#A67395]/20 rounded-full blur-3xl"
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#6C3FAF] rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header with animated icon */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-block mb-6"
            >
              <motion.div
                style={{ rotate, scale }}
                className="w-20 h-20 rounded-[20px] bg-gradient-to-br from-[#6C3FAF] via-[#8b5fbf] to-[#A67395] flex items-center justify-center shadow-glow-purple relative"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Orbiting mini icons */}
                {[Zap, TrendingUp].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-[#A67395] rounded-full flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2,
                    }}
                    style={{
                      offsetPath: "path('M 0,40 a 40,40 0 1,1 0,-80 a 40,40 0 1,1 0,80')",
                    }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="text-6xl mb-8 text-white leading-tight"
            >
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-[#6C3FAF] to-[#A67395] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Us
              </motion.span>
            </motion.h2>
          </div>

          {/* Interactive Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${stat.color}40`,
                }}
                className="glass-strong rounded-[20px] p-6 text-center border border-white/10 cursor-pointer group relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${stat.color}10, ${stat.color}05)` }}
                />
                
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div 
                    className="w-14 h-14 rounded-[16px] flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>
                </motion.div>
                
                <div className="relative z-10">
                  <p className="text-sm text-white/70 mb-1">{stat.label}</p>
                  <p className="text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Card with interactive elements */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="glass-strong rounded-[32px] p-12 border border-white/10 relative overflow-hidden group"
          >
            {/* Animated gradient border effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, #6C3FAF20, #A6739520, #6C3FAF20)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Floating accent elements */}
            <motion.div
              className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-[#6C3FAF]/20 to-[#A67395]/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-xl text-white leading-relaxed"
              >
                <motion.span
                  whileHover={{ color: "#6C3FAF", scale: 1.05 }}
                  className="inline-block transition-colors"
                >
                  Kairo
                </motion.span>{" "}
                is a platform that helps{" "}
                <motion.span
                  className="text-[#A67395] inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  South African creators
                </motion.span>{" "}
                get paid for their views, and helps businesses run{" "}
                <motion.span
                  className="text-[#6C3FAF] inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  affordable, high-impact campaigns
                </motion.span>
                . Creators earn money for every{" "}
                <motion.span
                  className="text-[#A67395] inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  1,000 views
                </motion.span>{" "}
                they get, even if they have{" "}
                <motion.span
                  className="text-[#6C3FAF] inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  zero followers
                </motion.span>
                . Businesses simply upload their campaign, set their budget, and creators start sharing content that brings them real views and results. Kairo makes it{" "}
                <motion.span
                  className="text-[#A67395] inline-block"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  easy
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-[#6C3FAF] inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  fair
                </motion.span>
                , and{" "}
                <motion.span
                  className="text-[#A67395] inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  accessible
                </motion.span>{" "}
                for everyone.
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative animated accent line */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="h-1 w-20 bg-gradient-to-r from-transparent via-[#6C3FAF] to-[#A67395] rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-3 h-3 bg-gradient-to-br from-[#6C3FAF] to-[#A67395] rounded-full"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="h-1 w-20 bg-gradient-to-r from-[#A67395] via-[#6C3FAF] to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}