import { BookOpen, Video, FileText, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ForCourseSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const products = [
    {
      icon: Video,
      title: "Courses",
      description: "Video tutorials and masterclasses",
      color: "#6C3FAF",
      gradient: "from-[#6C3FAF] to-[#8b5fbf]"
    },
    {
      icon: FileText,
      title: "Guides",
      description: "Step-by-step ebooks and PDFs",
      color: "#A67395",
      gradient: "from-[#A67395] to-[#b88ba5]"
    },
    {
      icon: Download,
      title: "Templates",
      description: "Ready-to-use design assets",
      color: "#8b5fbf",
      gradient: "from-[#8b5fbf] to-[#6C3FAF]"
    },
  ];

  return (
    <section ref={ref} className="bg-[#141424] py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A67395]/20 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 glass-purple rounded-full px-5 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 text-[#6C3FAF]" />
            <p className="text-sm text-[#F2F2F4]">For Course Sellers</p>
          </motion.div>

          <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight max-w-3xl mx-auto">
            Host and sell your courses with zero hassle.
          </h2>

          <p className="text-xl text-[#F2F2F4]/70 max-w-2xl mx-auto">
            From video courses to digital downloads — sell it all in one place.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 0 40px rgba(108, 63, 175, 0.4)"
              }}
              className="glass-strong rounded-[20px] p-8 relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient border effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 rounded-[20px]`}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <product.icon className="w-8 h-8 text-[#F2F2F4]" />
                </motion.div>

                <h3 className="text-2xl text-[#F2F2F4] mb-3">{product.title}</h3>
                <p className="text-[#F2F2F4]/70">{product.description}</p>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#6C3FAF]/20 to-[#A67395]/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(108, 63, 175, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Start Selling Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
