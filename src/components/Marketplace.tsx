import { useState } from "react";
import { Search, TrendingUp, Briefcase, Video, Scissors, Building2, Filter, Clock, DollarSign, Users, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import ExampleCompanies from "./ExampleCompanies";
import FeaturedCreators from "./FeaturedCreators";
import { Page } from "../App";

interface MarketplaceProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

// UGC Campaigns Data
const campaigns = [
  {
    id: 1,
    brand: "Nando's SA",
    logo: "🍗",
    title: "Peri-Peri Product Unboxing",
    description: "Create authentic unboxing videos featuring our new Peri-Peri sauce range. Show the product in real-life settings.",
    budget: "R15,000 - R25,000",
    deadline: "30 Nov 2025",
    category: "Food & Beverage",
    color: "orange",
    requirements: ["HD video (1080p min)", "60-90 seconds", "Natural lighting"],
    spots: 5,
    applicants: 23,
    location: "Nationwide"
  },
  {
    id: 2,
    brand: "Woolworths SA",
    logo: "🛍️",
    title: "Premium Fashion Haul",
    description: "Showcase our new autumn collection with a styling video. Focus on versatility and quality of pieces.",
    budget: "R20,000 - R40,000",
    deadline: "25 Nov 2025",
    category: "Fashion & Lifestyle",
    color: "green",
    requirements: ["Professional editing", "Multiple outfit changes", "Voice-over narration"],
    spots: 3,
    applicants: 45,
    location: "Cape Town, Johannesburg"
  },
  {
    id: 3,
    brand: "Takealot",
    logo: "🛒",
    title: "Tech Product Reviews",
    description: "Review latest tech products from our electronics range. Honest, detailed reviews focusing on value for money.",
    budget: "R10,000 - R20,000",
    deadline: "5 Dec 2025",
    category: "Technology",
    color: "blue",
    requirements: ["Detailed specs discussion", "Real-world testing", "Comparison shots"],
    spots: 8,
    applicants: 67,
    location: "Nationwide"
  },
  {
    id: 4,
    brand: "Podcast and Chill",
    logo: "🎙️",
    title: "Behind-the-Scenes Content",
    description: "Create engaging BTS content from our latest episodes. Capture the authentic vibe and energy of our recordings.",
    budget: "R8,000 - R15,000",
    deadline: "20 Nov 2025",
    category: "Media & Entertainment",
    color: "red",
    requirements: ["Mobile-friendly format", "Short-form (30-60s)", "Trending audio"],
    spots: 6,
    applicants: 34,
    location: "Johannesburg"
  },
  {
    id: 5,
    brand: "Checkers",
    logo: "🥬",
    title: "Grocery Shopping & Meal Prep",
    description: "Weekly grocery haul and meal prep videos. Show budget-friendly shopping and creative recipes.",
    budget: "R5,000 - R12,000",
    deadline: "28 Nov 2025",
    category: "Food & Lifestyle",
    color: "green",
    requirements: ["Recipe sharing", "Cost breakdown", "Family-friendly"],
    spots: 10,
    applicants: 89,
    location: "Nationwide"
  },
  {
    id: 6,
    brand: "Mr Price",
    logo: "👕",
    title: "Affordable Fashion Styling",
    description: "Create styling videos showing how to create multiple looks with our affordable pieces. Target Gen-Z audience.",
    budget: "R12,000 - R22,000",
    deadline: "2 Dec 2025",
    category: "Fashion",
    color: "purple",
    requirements: ["TikTok-style editing", "Trending music", "5-7 outfits"],
    spots: 4,
    applicants: 56,
    location: "Durban, Cape Town"
  },
];

const categories = ["All Campaigns", "Food & Beverage", "Fashion & Lifestyle", "Technology", "Media & Entertainment"];

export default function Marketplace({ navigateTo, isAuthenticated }: MarketplaceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Campaigns");
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Campaigns" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedCampaigns = showAllCampaigns ? filteredCampaigns : filteredCampaigns.slice(0, 4);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; badge: string; text: string }> = {
      orange: {
        bg: "from-orange-500/5 to-orange-600/10",
        border: "border-orange-500/20",
        badge: "bg-orange-500/20 text-orange-700",
        text: "text-orange-500"
      },
      green: {
        bg: "from-green-500/5 to-green-600/10",
        border: "border-green-500/20",
        badge: "bg-green-500/20 text-green-700",
        text: "text-green-500"
      },
      blue: {
        bg: "from-blue-500/5 to-blue-600/10",
        border: "border-blue-500/20",
        badge: "bg-blue-500/20 text-blue-700",
        text: "text-blue-500"
      },
      red: {
        bg: "from-red-500/5 to-red-600/10",
        border: "border-red-500/20",
        badge: "bg-red-500/20 text-red-700",
        text: "text-red-500"
      },
      purple: {
        bg: "from-purple-500/5 to-purple-600/10",
        border: "border-purple-500/20",
        badge: "bg-purple-500/20 text-purple-700",
        text: "text-purple-500"
      }
    };
    return colors[color] || colors.purple;
  };

  const quickActions = [
    {
      icon: Video,
      title: "All UGC Campaigns",
      description: "Browse all video creation opportunities",
      budgetRange: "R4K - R150K",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      action: () => navigateTo("ugcCampaigns"),
    },
    {
      icon: Scissors,
      title: "Clipper Campaigns",
      description: "Video editing & clipping jobs",
      budgetRange: "R4K - R50K",
      color: "bg-gradient-to-br from-amber-500 to-amber-700",
      action: () => navigateTo("clipperCampaigns"),
    },
    {
      icon: Building2,
      title: "Creator Hubs",
      description: "Explore creator companies",
      badge: "Featured",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      action: () => {
        document.getElementById("companies-section")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: TrendingUp,
      title: "Top Creators",
      description: "Browse trending talent",
      badge: "Verified",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      action: () => {
        document.getElementById("creators-section")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <div className="bg-[#f8f8fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#f8f8fa] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7b20b5]/10 to-[#FFD700]/10 px-5 py-2.5 rounded-full mb-6 border border-[#7b20b5]/20">
              <Briefcase className="w-4 h-4 text-[#7b20b5]" />
              <span className="text-sm text-[#7b20b5]">Kairo Marketplace</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">
              Find Your Next <span className="bg-gradient-to-r from-[#7b20b5] to-[#FFD700] bg-clip-text text-transparent">Paid Campaign</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Browse active campaigns from top South African brands. Create content, earn money, and build your creator business.
            </p>

            {/* CTA Buttons */}
            {!isAuthenticated && (
              <div className="flex items-center gap-4 justify-center mb-8">
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -2, 2, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15,
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Button
                    onClick={() => navigateTo("signup")}
                    size="lg"
                    className="bg-gradient-to-r from-[#7b20b5] to-[#9333ea] text-white px-8 py-6 rounded-2xl shadow-lg shadow-[#7b20b5]/30"
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                    </motion.div>
                    Sign Up to Apply
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, 2, -2, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15,
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Button
                    onClick={() => navigateTo("howItWorks")}
                    size="lg"
                    variant="outline"
                    className="glass-purple px-8 py-6 rounded-2xl shadow-md"
                  >
                    How It Works
                  </Button>
                </motion.div>
              </div>
            )}

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search campaigns, brands, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#7b20b5] transition-colors"
              />
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={index}
                  onClick={action.action}
                  className="group relative glass-dark bg-white/90 rounded-2xl p-6 text-left shadow-md cursor-pointer"
                  whileHover={{ 
                    y: -10,
                    rotate: [0, -1, 1, 0],
                    boxShadow: "0 20px 40px rgba(123, 32, 181, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15,
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div 
                    className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                  {action.budgetRange && (
                    <div className="text-sm text-[#7b20b5]">{action.budgetRange}</div>
                  )}
                  {action.badge && (
                    <motion.div 
                      className="absolute top-4 right-4"
                      animate={{ 
                        y: [0, -3, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <span className="bg-[#FFD700] text-gray-900 text-xs px-3 py-1 rounded-full shadow-lg">
                        {action.badge}
                      </span>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl mb-2">Active UGC Campaigns</h2>
              <p className="text-gray-600">Apply now and start creating content for top SA brands</p>
            </div>
            <div className="flex items-center gap-3">
              {!isAuthenticated && (
                <Button
                  onClick={() => navigateTo("signup")}
                  className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white px-6 py-3 rounded-xl"
                >
                  Sign Up to Apply
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[#7b20b5] text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#7b20b5]/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Campaigns Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {displayedCampaigns.map((campaign) => {
              const colors = getColorClasses(campaign.color);
              return (
                <div
                  key={campaign.id}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} hover:shadow-xl transition-all cursor-pointer group`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                        {campaign.logo}
                      </div>
                      <div>
                        <h3 className="text-[#1a1a1a] mb-1">{campaign.brand}</h3>
                        <Badge className={colors.badge}>{campaign.category}</Badge>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-lg ${colors.badge} text-xs`}>
                      {campaign.spots} spots left
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl text-[#1a1a1a] mb-3 group-hover:text-[#7b20b5] transition-colors">
                    {campaign.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[rgba(26,26,26,0.7)] mb-4 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-4">
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-2">Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {campaign.requirements.map((req, idx) => (
                        <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded-lg">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-[rgba(26,26,26,0.5)]" />
                        <span className="text-[rgba(26,26,26,0.7)]">{campaign.budget}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[rgba(26,26,26,0.5)]" />
                        <span className="text-[rgba(26,26,26,0.7)]">{campaign.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs text-[rgba(26,26,26,0.5)]">
                        <Users className="w-3 h-3" />
                        {campaign.applicants}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isAuthenticated) {
                            navigateTo("signup");
                          }
                        }}
                      >
                        {isAuthenticated ? "Apply Now" : "Sign Up"}
                      </Button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-[rgba(26,26,26,0.5)]">
                    <MapPin className="w-3 h-3" />
                    {campaign.location}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          {filteredCampaigns.length > 4 && (
            <div className="text-center">
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, 2, -2, 0]
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 15,
                  rotate: {
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <Button
                  onClick={() => {
                    if (showAllCampaigns) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    setShowAllCampaigns(!showAllCampaigns);
                  }}
                  variant="outline"
                  className="glass-purple px-8 py-4 rounded-2xl shadow-md"
                >
                  {showAllCampaigns ? "Show Less" : `View All ${filteredCampaigns.length} Campaigns`}
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-[#f8f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7b20b5]">150+</div>
              <div className="text-gray-600">Active Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7b20b5]">2,500+</div>
              <div className="text-gray-600">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7b20b5]">R12M+</div>
              <div className="text-gray-600">Paid to Creators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7b20b5]">500+</div>
              <div className="text-gray-600">SA Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <div id="companies-section">
        <ExampleCompanies navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
      </div>

      {/* Creators Section */}
      <div id="creators-section">
        <FeaturedCreators />
      </div>

      {/* Sign Up CTA - Only for non-authenticated users */}
      {!isAuthenticated && (
        <section className="py-20 px-4 bg-gradient-to-br from-[#7b20b5] to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Join Kairo Today</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Creating?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of South African creators earning from their content. Sign up now and start applying to campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigateTo("signup")}
                size="lg"
                className="bg-white text-[#7b20b5] hover:bg-gray-100 px-8 py-6 rounded-xl shadow-xl"
              >
                Create Free Account
              </Button>
              <Button
                onClick={() => navigateTo("howItWorks")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl"
              >
                Learn How It Works
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl mb-1">⭐️ 4.8</div>
                  <div className="text-sm text-purple-100">Creator Rating</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">🚀 24h</div>
                  <div className="text-sm text-purple-100">Avg. Response Time</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">💰 R50K</div>
                  <div className="text-sm text-purple-100">Avg. Monthly Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section for authenticated users */}
      {isAuthenticated && (
        <section className="py-20 px-4 bg-gradient-to-br from-[#7b20b5] to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6">Start Applying to Campaigns</h2>
            <p className="text-xl mb-8 text-purple-100">
              You're all set! Browse campaigns and start creating content for top SA brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigateTo("dashboard")}
                size="lg"
                className="bg-white text-[#7b20b5] hover:bg-gray-100 px-8 py-6 rounded-xl"
              >
                Go to Dashboard
              </Button>
              <Button
                onClick={() => navigateTo("ugcCampaigns")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl"
              >
                View All Campaigns
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
