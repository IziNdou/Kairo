import { Briefcase, Video, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Brand Collaborations",
      description: "Partner with top South African brands for authentic sponsored content",
      color: "#6C3FAF"
    },
    {
      icon: Video,
      title: "UGC & Clipping",
      description: "Create user-generated content or edit clips for brands and creators",
      color: "#A67395"
    },
    {
      icon: GraduationCap,
      title: "Course Sales",
      description: "Host and sell your own digital products, courses, and educational content",
      color: "#8b5fbf"
    },
  ];

  return (
    <section className="bg-[#141424] py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight">
            What You Can Do on Kairo
          </h2>
          <p className="text-xl text-[#F2F2F4]/70 max-w-2xl mx-auto">
            Multiple ways to monetize your creativity and build your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
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
              className="glass-strong rounded-[20px] p-8 text-center cursor-pointer group"
            >
              <motion.div 
                className="w-16 h-16 rounded-[20px] flex items-center justify-center mx-auto mb-6"
                style={{ background: service.color }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <service.icon className="w-8 h-8 text-[#F2F2F4]" />
              </motion.div>
              <h3 className="text-2xl text-[#F2F2F4] mb-3">{service.title}</h3>
              <p className="text-[#F2F2F4]/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
