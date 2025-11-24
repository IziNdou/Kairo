import { UserPlus, Upload, DollarSign, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Page } from "../App";

interface HowItWorksProps {
  navigateTo?: (page: Page) => void;
}

export default function HowItWorks({ navigateTo }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up for free and set up your creator profile to showcase your work.",
    },
    {
      number: "02",
      title: "Apply to Brand Campaigns",
      description: "Browse and apply to brand collaborations that match your style and audience.",
    },
    {
      number: "03",
      title: "Get Paid",
      description: "Complete campaigns, get paid directly, and grow your creator business.",
    },
  ];

  return (
    <section className="bg-[#141424] py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C3FAF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
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
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 glass-purple rounded-full px-5 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#6C3FAF]" />
            <p className="text-sm text-[#F2F2F4]">How It Works</p>
          </motion.div>

          <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-[#F2F2F4]/70 max-w-2xl mx-auto">
            Join thousands of South African creators already earning on Kairo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 0 40px rgba(108, 63, 175, 0.4)"
              }}
              className="glass-strong rounded-[20px] p-8 relative overflow-hidden group"
            >
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-6xl opacity-5 text-[#F2F2F4]">
                {step.number}
              </div>

              <motion.div 
                className="w-16 h-16 rounded-[20px] gradient-primary flex items-center justify-center mb-6 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <UserPlus className="w-8 h-8 text-[#F2F2F4]" />
              </motion.div>

              <h3 className="text-2xl text-[#F2F2F4] mb-3 relative z-10">{step.title}</h3>
              <p className="text-[#F2F2F4]/70 leading-relaxed relative z-10">{step.description}</p>

              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#6C3FAF] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigateTo?.("signup")}
            className="px-8 py-4 gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(108, 63, 175, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}