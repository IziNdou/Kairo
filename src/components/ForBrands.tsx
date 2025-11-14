import { Search, Target, Heart, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ForBrands() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const creators = [
    {
      name: "Sarah M",
      avatar: "SM",
      category: "Lifestyle",
      followers: "45K",
      color: "#6C3FAF"
    },
    {
      name: "Mike T",
      avatar: "MT",
      category: "Tech",
      followers: "82K",
      color: "#A67395"
    },
    {
      name: "Lisa K",
      avatar: "LK",
      category: "Fashion",
      followers: "120K",
      color: "#8b5fbf"
    },
  ];

  return (
    <section ref={ref} className="bg-[#1a1a2e] py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-[#6C3FAF]/20 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 glass-accent rounded-full px-5 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-4 h-4 text-[#A67395]" />
              <p className="text-sm text-[#F2F2F4]">For Brands</p>
            </motion.div>

            <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight">
              Find local creators who match your audience.
            </h2>

            <p className="text-xl text-[#F2F2F4]/70 mb-8 leading-relaxed">
              Collaborate with authentic voices that connect with your target market.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Access verified South African creators",
                "Filter by niche, reach, and engagement",
                "Track campaign performance in real-time",
                "Secure payments and contracts"
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
                    <CheckCircle2 className="w-4 h-4 text-[#F2F2F4]" />
                  </motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="px-8 py-4 gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(166, 115, 149, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Find Creators
            </motion.button>
          </motion.div>

          {/* Right: Creators Grid Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative"
          >
            <div className="flex gap-4 overflow-hidden">
              {/* Scrolling creators grid */}
              <motion.div 
                className="flex flex-col gap-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {creators.map((creator, index) => (
                  <motion.div
                    key={index}
                    className="glass-strong rounded-[20px] p-6 min-w-[280px]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(166, 115, 149, 0.3)"
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-[#F2F2F4]"
                        style={{ background: creator.color }}
                      >
                        {creator.avatar}
                      </div>
                      <div>
                        <p className="text-[#F2F2F4]">{creator.name}</p>
                        <p className="text-sm text-[#F2F2F4]/60">{creator.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-[#A67395]" />
                        <span className="text-sm text-[#F2F2F4]/70">{creator.followers} followers</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col gap-4"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              >
                {creators.slice().reverse().map((creator, index) => (
                  <motion.div
                    key={index}
                    className="glass-strong rounded-[20px] p-6 min-w-[280px]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(108, 63, 175, 0.3)"
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-[#F2F2F4]"
                        style={{ background: creator.color }}
                      >
                        {creator.avatar}
                      </div>
                      <div>
                        <p className="text-[#F2F2F4]">{creator.name}</p>
                        <p className="text-sm text-[#F2F2F4]/60">{creator.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-[#6C3FAF]" />
                        <span className="text-sm text-[#F2F2F4]/70">{creator.followers} followers</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
