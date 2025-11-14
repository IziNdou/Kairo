import { Target, Zap, Shield } from "lucide-react";
import { motion } from "motion/react";
import { Page } from "../App";

interface AboutTheClimbProps {
  navigateTo?: (page: Page) => void;
}

export default function AboutTheClimb({ navigateTo }: AboutTheClimbProps) {
  const features = [
    {
      icon: Target,
      title: "Creator-First Platform",
      description: "Built specifically for South African content creators to monetize their skills and audience.",
    },
    {
      icon: Zap,
      title: "Multiple Revenue Streams",
      description: "Sell courses, collaborate with brands, or do both. You're in control.",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Fair 80/20 split. You keep more of what you earn.",
    },
  ];

  return (
    <section className="bg-[#1a1a2e] py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight max-w-3xl mx-auto">
            Everything you need to grow your creator business
          </h2>
          <p className="text-xl text-[#F2F2F4]/70 max-w-2xl mx-auto">
            Kairo brings together the tools, audience, and opportunities you need to succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 40px rgba(108, 63, 175, 0.3)"
              }}
              className="glass-strong rounded-[20px] p-8 text-center"
            >
              <motion.div 
                className="w-16 h-16 rounded-[20px] gradient-primary flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <feature.icon className="w-8 h-8 text-[#F2F2F4]" />
              </motion.div>
              <h3 className="text-2xl text-[#F2F2F4] mb-3">{feature.title}</h3>
              <p className="text-[#F2F2F4]/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
