import { useState } from "react";
import { ArrowLeft, Filter, Search, TrendingUp, Clock, DollarSign, Video, Users, MapPin } from "lucide-react";
import { Page } from "../App";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface UGCCampaignsProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

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

const categories = ["All", "Food & Beverage", "Fashion & Lifestyle", "Technology", "Media & Entertainment"];
const budgets = ["All Budgets", "R5K - R15K", "R15K - R30K", "R30K+"];

export default function UGCCampaigns({ navigateTo, isAuthenticated }: UGCCampaignsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <div className="min-h-screen bg-[#f8f8fa]">
      {/* Header */}
      <div className="bg-white border-b border-black/10">
        <div className="container mx-auto px-6 py-8">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 text-[rgba(26,26,26,0.7)] hover:text-[#1a1a1a] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7b20b5]/10 to-[#FFD700]/10 rounded-full px-5 py-2 mb-4 border border-[#7b20b5]/20">
                <Video className="w-4 h-4 text-[#7b20b5]" />
                <span className="text-[#7b20b5]">UGC Creator Campaigns</span>
              </div>
              <h1 className="text-5xl mb-4 tracking-tight">Find Your Next Campaign</h1>
              <p className="text-lg text-[rgba(26,26,26,0.7)] max-w-2xl">
                Browse active campaigns from top South African brands. Create authentic content, earn money, and build your portfolio.
              </p>
            </div>
            {!isAuthenticated && (
              <Button
                onClick={() => navigateTo("signup")}
                className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white px-6 py-3 rounded-xl"
              >
                Sign Up to Apply
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-[#7b20b5]/5 to-[#7b20b5]/10 rounded-xl p-4 border border-[#7b20b5]/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">{campaigns.length}</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Active Campaigns</p>
            </div>
            <div className="bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 rounded-xl p-4 border border-[#FFD700]/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">R150K+</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Total Budget</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">36</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Open Spots</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">314</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Total Applicants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white border-b border-black/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(26,26,26,0.4)]" />
              <Input
                type="text"
                placeholder="Search campaigns, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-black/10 focus:border-[#7b20b5]"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 rounded-xl border-black/10 hover:border-[#7b20b5]">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[#7b20b5] text-white"
                    : "bg-white border border-black/10 text-[rgba(26,26,26,0.7)] hover:border-[#7b20b5]/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[rgba(26,26,26,0.6)]">
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </p>
          <select className="px-4 py-2 rounded-xl border border-black/10 bg-white text-sm focus:border-[#7b20b5] focus:outline-none">
            <option>Sort: Latest</option>
            <option>Sort: Highest Budget</option>
            <option>Sort: Most Spots</option>
            <option>Sort: Ending Soon</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredCampaigns.map((campaign) => {
            const colors = getColorClasses(campaign.color);
            return (
              <div
                key={campaign.id}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} hover:shadow-xl transition-all cursor-pointer group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
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
                      Apply Now
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

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="mt-16 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Ready to Start Creating?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join South Africa's premier creator marketplace. Sign up now to apply for campaigns and start earning.
            </p>
            <div className="flex items-center gap-4 justify-center">
              <Button
                onClick={() => navigateTo("signup")}
                className="bg-white text-[#7b20b5] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl"
              >
                Create Free Account
              </Button>
              <Button
                onClick={() => navigateTo("howItWorks")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
