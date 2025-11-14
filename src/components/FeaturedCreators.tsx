import { motion } from "motion/react";
import { Star, Users, TrendingUp } from "lucide-react";

export default function FeaturedCreators() {
  const creators = [
    {
      name: "Sarah Mitchell",
      avatar: "SM",
      followers: "125K",
      category: "Lifestyle & Fashion",
      engagement: "8.5%",
      color: "#6C3FAF",
      verified: true,
    },
    {
      name: "Mike Thompson",
      avatar: "MT",
      followers: "89K",
      category: "Tech & Reviews",
      engagement: "12.3%",
      color: "#A67395",
      verified: true,
    },
    {
      name: "Lisa Kruger",
      avatar: "LK",
      followers: "156K",
      category: "Food & Travel",
      engagement: "9.8%",
      color: "#8b5fbf",
      verified: true,
    },
    {
      name: "David Nkosi",
      avatar: "DN",
      followers: "203K",
      category: "Fitness & Wellness",
      engagement: "11.2%",
      color: "#b88ba5",
      verified: true,
    },
    {
      name: "Emma van Dijk",
      avatar: "EV",
      followers: "94K",
      category: "Beauty & Skincare",
      engagement: "10.5%",
      color: "#6C3FAF",
      verified: true,
    },
    {
      name: "John Matibe",
      avatar: "JM",
      followers: "178K",
      category: "Business & Finance",
      engagement: "7.9%",
      color: "#A67395",
      verified: true,
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
          <motion.div 
            className="inline-flex items-center gap-2 glass-strong rounded-full px-5 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#A67395]" />
            <p className="text-sm text-[#F2F2F4]">Top Creators</p>
          </motion.div>

          <h2 className="text-5xl mb-6 text-[#F2F2F4] leading-tight">
            Featured Creators
          </h2>

          <p className="text-xl text-[#F2F2F4]/70 max-w-2xl mx-auto">
            Connect with South Africa's most engaging content creators
          </p>
        </motion.div>

        {/* Carousel - Horizontal scroll */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <motion.div 
              className="flex gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {creators.map((creator, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    y: {
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }
                  }}
                  className="glass-strong rounded-[20px] p-6 min-w-[320px] cursor-pointer group relative overflow-hidden"
                >
                  {/* Gradient glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#6C3FAF]/20 to-[#A67395]/20 rounded-[20px] opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl text-[#F2F2F4]"
                        style={{ background: creator.color }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {creator.avatar}
                      </motion.div>
                      {creator.verified && (
                        <motion.div
                          className="w-6 h-6 rounded-full bg-[#6C3FAF] flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <svg className="w-4 h-4 text-[#F2F2F4]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Name & Category */}
                    <h3 className="text-xl text-[#F2F2F4] mb-1">{creator.name}</h3>
                    <p className="text-sm text-[#F2F2F4]/60 mb-4">{creator.category}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#A67395]" />
                        <span className="text-sm text-[#F2F2F4]/80">{creator.followers}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#6C3FAF]" />
                        <span className="text-sm text-[#F2F2F4]/80">{creator.engagement}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fade on sides */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#1a1a2e] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#1a1a2e] to-transparent pointer-events-none" />
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 glass-strong text-[#F2F2F4] rounded-[20px] shadow-kairo border border-[#F2F2F4]/10"
            whileHover={{ 
              scale: 1.05,
              background: "rgba(108, 63, 175, 0.15)",
              borderColor: "rgba(108, 63, 175, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            View All Creators
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
