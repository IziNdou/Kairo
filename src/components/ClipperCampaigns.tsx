import { useState } from "react";
import { ArrowLeft, Filter, Search, Clock, DollarSign, Scissors, Users, MapPin, Play, TrendingUp, Sparkles, CheckCircle2, Zap, Award, Video } from "lucide-react";
import { Page } from "../App";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface ClipperCampaignsProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

const campaigns = [
  {
    id: 1,
    brand: "Podcast and Chill",
    logo: "🎙️",
    title: "Weekly Episode Highlights",
    description: "Clip the best moments from our weekly episodes. Focus on viral-worthy content, funny moments, and insightful discussions.",
    budget: "R8,000 - R15,000",
    deadline: "15 Nov 2025",
    category: "Podcast",
    color: "red",
    requirements: ["15-60 second clips", "Subtitles required", "Viral-focused"],
    videoLength: "2-3 hours per episode",
    clipsNeeded: "10-15 clips",
    frequency: "Weekly",
    spots: 3,
    applicants: 18,
    location: "Remote"
  },
  {
    id: 2,
    brand: "Mac G Media",
    logo: "🎬",
    title: "Interview Segment Clipping",
    description: "Create engaging short-form content from long-form interviews. Extract the most shareable moments for social media.",
    budget: "R10,000 - R20,000",
    deadline: "20 Nov 2025",
    category: "Interview",
    color: "purple",
    requirements: ["Professional editing", "Multi-platform formatting", "Quick turnaround"],
    videoLength: "1-2 hours per interview",
    clipsNeeded: "8-12 clips",
    frequency: "Bi-weekly",
    spots: 2,
    applicants: 25,
    location: "Remote"
  },
  {
    id: 3,
    brand: "SowetoBae",
    logo: "📱",
    title: "Lifestyle Content Clipping",
    description: "Clip lifestyle vlogs into TikTok and Instagram Reels. Focus on trends, fashion moments, and daily life highlights.",
    budget: "R5,000 - R10,000",
    deadline: "25 Nov 2025",
    category: "Lifestyle",
    color: "orange",
    requirements: ["TikTok-style editing", "Trending sounds", "Fast-paced"],
    videoLength: "15-30 min per vlog",
    clipsNeeded: "5-8 clips",
    frequency: "3x per week",
    spots: 4,
    applicants: 42,
    location: "Remote"
  },
  {
    id: 4,
    brand: "SA Hip Hop Mag",
    logo: "🎵",
    title: "Music Video & Interview Clips",
    description: "Create highlight reels from music interviews and BTS content. Capture energy and key moments for promotion.",
    budget: "R7,000 - R12,000",
    deadline: "18 Nov 2025",
    category: "Music",
    color: "blue",
    requirements: ["Music rights knowledge", "Color grading", "Brand consistency"],
    videoLength: "30-60 min per session",
    clipsNeeded: "6-10 clips",
    frequency: "Weekly",
    spots: 3,
    applicants: 31,
    location: "Johannesburg preferred"
  },
  {
    id: 5,
    brand: "The Hustlers Corner",
    logo: "💼",
    title: "Business Podcast Clipping",
    description: "Extract actionable business advice and entrepreneur stories from podcast episodes for LinkedIn and YouTube Shorts.",
    budget: "R6,000 - R11,000",
    deadline: "30 Nov 2025",
    category: "Business",
    color: "green",
    requirements: ["Professional tone", "Clear captions", "LinkedIn-optimized"],
    videoLength: "45-90 min per episode",
    clipsNeeded: "7-10 clips",
    frequency: "Weekly",
    spots: 5,
    applicants: 29,
    location: "Remote"
  },
  {
    id: 6,
    brand: "Gaming ZA",
    logo: "🎮",
    title: "Gaming Stream Highlights",
    description: "Clip best moments from gaming streams. Focus on epic plays, funny fails, and viewer interactions.",
    budget: "R4,000 - R8,000",
    deadline: "22 Nov 2025",
    category: "Gaming",
    color: "purple",
    requirements: ["Gaming knowledge", "Reaction highlights", "Fast delivery"],
    videoLength: "3-5 hours per stream",
    clipsNeeded: "12-20 clips",
    frequency: "Daily",
    spots: 6,
    applicants: 56,
    location: "Remote"
  },
  {
    id: 7,
    brand: "Durban Gen",
    logo: "📺",
    title: "TV Show Recap Clips",
    description: "Create weekly recap clips and promo content from TV episodes. Tease upcoming storylines without spoilers.",
    budget: "R12,000 - R18,000",
    deadline: "10 Nov 2025",
    category: "TV & Entertainment",
    color: "red",
    requirements: ["Spoiler-free", "Cinematic editing", "Episode knowledge"],
    videoLength: "30 min per episode",
    clipsNeeded: "5-7 clips",
    frequency: "Weekly",
    spots: 2,
    applicants: 38,
    location: "Durban preferred"
  },
  {
    id: 8,
    brand: "Fitness with Thando",
    logo: "💪",
    title: "Workout Tutorial Clipping",
    description: "Break down long workout videos into specific exercise tutorials and motivational clips for Instagram and TikTok.",
    budget: "R5,500 - R9,000",
    deadline: "28 Nov 2025",
    category: "Fitness",
    color: "green",
    requirements: ["Form focus", "Motivational editing", "Text overlays"],
    videoLength: "30-45 min per workout",
    clipsNeeded: "8-12 clips",
    frequency: "3x per week",
    spots: 4,
    applicants: 45,
    location: "Remote"
  },
];

const categories = ["All", "Podcast", "Interview", "Lifestyle", "Music", "Business", "Gaming", "TV & Entertainment", "Fitness"];

export default function ClipperCampaigns({ navigateTo, isAuthenticated }: ClipperCampaignsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const totalBudget = campaigns.reduce((sum, c) => {
    const max = parseInt(c.budget.split(" - ")[1].replace(/[R,]/g, ""));
    return sum + max;
  }, 0);

  const totalSpots = campaigns.reduce((sum, c) => sum + c.spots, 0);
  const totalApplicants = campaigns.reduce((sum, c) => sum + c.applicants, 0);

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
                <Scissors className="w-4 h-4 text-[#7b20b5]" />
                <span className="text-[#7b20b5]">Clipper Campaigns</span>
              </div>
              <h1 className="text-5xl mb-4 tracking-tight">Turn Long Videos Into Viral Clips</h1>
              <p className="text-lg text-[rgba(26,26,26,0.7)] max-w-2xl">
                Get paid to clip podcasts, vlogs, and long-form content. Help SA creators amplify their reach on TikTok, Instagram, and YouTube Shorts.
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
              <p className="text-2xl text-[#1a1a1a] mb-1">R{(totalBudget / 1000).toFixed(0)}K+</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Total Budget</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">{totalSpots}</p>
              <p className="text-sm text-[rgba(26,26,26,0.6)]">Open Spots</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
              <p className="text-2xl text-[#1a1a1a] mb-1">{totalApplicants}</p>
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
                placeholder="Search campaigns, creators, or content types..."
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

                {/* Clip Details */}
                <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-white/40 rounded-xl">
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Video Length</p>
                    <p className="text-xs text-[#1a1a1a]">{campaign.videoLength}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Clips Needed</p>
                    <p className="text-xs text-[#1a1a1a]">{campaign.clipsNeeded}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Frequency</p>
                    <p className="text-xs text-[#1a1a1a]">{campaign.frequency}</p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <p className="text-xs text-[rgba(26,26,26,0.5)] mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {campaign.requirements.map((req, idx) => (
                      <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded-lg flex items-center gap-1">
                        <Play className="w-3 h-3" />
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

        {/* How to Get Started Section */}
        {!isAuthenticated && (
          <div className="mt-16 bg-gradient-to-br from-[#7b20b5]/5 via-[#FFD700]/5 to-[#7b20b5]/5 rounded-2xl p-12 border-2 border-[#7b20b5]/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7b20b5]/10 to-[#FFD700]/10 rounded-full px-5 py-2 mb-4 border border-[#7b20b5]/20">
                <Sparkles className="w-4 h-4 text-[#7b20b5]" />
                <span className="text-sm text-[#7b20b5]">Getting Started</span>
              </div>
              <h2 className="text-4xl mb-4">3 Steps to Start Earning as a Clipper</h2>
              <p className="text-lg text-[rgba(26,26,26,0.7)] max-w-2xl mx-auto">
                No previous experience required. If you can edit videos, you can earn money clipping content.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">1</span>
                </div>
                <h3 className="text-xl mb-3 mt-4">Sign Up Free</h3>
                <p className="text-[rgba(26,26,26,0.7)] mb-4">
                  Create your clipper profile in under 2 minutes. Add your editing skills and portfolio.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(26,26,26,0.6)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    No signup fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Instant access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Mobile friendly
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#e5c200] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">2</span>
                </div>
                <h3 className="text-xl mb-3 mt-4">Browse & Apply</h3>
                <p className="text-[rgba(26,26,26,0.7)] mb-4">
                  Find campaigns that match your skills. Apply with one click and get responses within 24 hours.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(26,26,26,0.6)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Filter by budget
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    See requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Track applications
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">3</span>
                </div>
                <h3 className="text-xl mb-3 mt-4">Create & Earn</h3>
                <p className="text-[rgba(26,26,26,0.7)] mb-4">
                  Download the content, create clips, submit for approval, and get paid directly to your account.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(26,26,26,0.6)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Fast payouts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Client feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Build reputation
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => navigateTo("signup")}
                size="lg"
                className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white px-10 py-6 text-lg rounded-xl shadow-xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Clipper Journey
              </Button>
            </div>
          </div>
        )}

        {/* Skills & Tools Section */}
        <div className="mt-16 bg-white rounded-2xl p-12 border-2 border-black/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What You Need to Succeed</h2>
            <p className="text-lg text-[rgba(26,26,26,0.7)] max-w-2xl mx-auto">
              Basic video editing skills and the right tools are all you need to start earning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#7b20b5]" />
                Skills That Pay
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#7b20b5]/5 to-transparent rounded-xl">
                  <Zap className="w-5 h-5 text-[#7b20b5] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Video Editing Basics</h4>
                    <p className="text-sm text-[rgba(26,26,26,0.6)]">Cutting, trimming, and basic transitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFD700]/5 to-transparent rounded-xl">
                  <Zap className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Subtitle & Caption Creation</h4>
                    <p className="text-sm text-[rgba(26,26,26,0.6)]">Adding engaging text overlays and captions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl">
                  <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Trend Awareness</h4>
                    <p className="text-sm text-[rgba(26,26,26,0.6)]">Understanding what makes content viral</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl">
                  <Zap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Multi-Platform Formatting</h4>
                    <p className="text-sm text-[rgba(26,26,26,0.6)]">Adapting clips for TikTok, Instagram, YouTube</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Video className="w-6 h-6 text-[#7b20b5]" />
                Popular Tools
              </h3>
              <div className="space-y-4">
                <div className="p-4 border-2 border-black/10 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4>CapCut</h4>
                    <Badge className="bg-green-500/20 text-green-700">Free</Badge>
                  </div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">Mobile & desktop, perfect for TikTok clips</p>
                </div>
                <div className="p-4 border-2 border-black/10 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Adobe Premiere Rush</h4>
                    <Badge className="bg-blue-500/20 text-blue-700">Paid</Badge>
                  </div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">Professional editing with templates</p>
                </div>
                <div className="p-4 border-2 border-black/10 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4>DaVinci Resolve</h4>
                    <Badge className="bg-green-500/20 text-green-700">Free</Badge>
                  </div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">Advanced color grading and editing</p>
                </div>
                <div className="p-4 border-2 border-black/10 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Final Cut Pro</h4>
                    <Badge className="bg-blue-500/20 text-blue-700">Paid</Badge>
                  </div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">Mac users' professional choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Clipping Section */}
        <div className="mt-16 bg-white rounded-2xl p-12 border-2 border-black/10">
          <h2 className="text-4xl mb-8 text-center">Why Become a Clipper?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-3">High Demand</h4>
              <p className="text-[rgba(26,26,26,0.7)]">
                Every creator needs clips. Turn podcasts and vlogs into viral short-form content that drives millions of views.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#e5c200] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-3">Steady Income</h4>
              <p className="text-[rgba(26,26,26,0.7)]">
                Recurring contracts mean predictable monthly income. Many campaigns offer weekly or daily work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl mb-3">Build Your Portfolio</h4>
              <p className="text-[rgba(26,26,26,0.7)]">
                Work with top SA creators and brands. Build a portfolio that opens doors to bigger opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#7b20b5]/10 to-[#7b20b5]/5 rounded-2xl p-6 text-center border border-[#7b20b5]/20">
            <div className="text-4xl mb-2 text-[#7b20b5]">R8K</div>
            <div className="text-sm text-[rgba(26,26,26,0.7)]">Avg. Weekly Earnings</div>
            <div className="text-xs text-[rgba(26,26,26,0.5)] mt-1">for active clippers</div>
          </div>
          <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 rounded-2xl p-6 text-center border border-[#FFD700]/20">
            <div className="text-4xl mb-2 text-[#1a1a1a]">24h</div>
            <div className="text-sm text-[rgba(26,26,26,0.7)]">Avg. Response Time</div>
            <div className="text-xs text-[rgba(26,26,26,0.5)] mt-1">from creators</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-6 text-center border border-green-500/20">
            <div className="text-4xl mb-2 text-[#1a1a1a]">150+</div>
            <div className="text-sm text-[rgba(26,26,26,0.7)]">Active Clippers</div>
            <div className="text-xs text-[rgba(26,26,26,0.5)] mt-1">earning monthly</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-6 text-center border border-blue-500/20">
            <div className="text-4xl mb-2 text-[#1a1a1a]">95%</div>
            <div className="text-sm text-[rgba(26,26,26,0.7)]">Success Rate</div>
            <div className="text-xs text-[rgba(26,26,26,0.5)] mt-1">approved clips</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-gradient-to-br from-white to-[#f8f8fa] rounded-2xl p-12 border-2 border-black/10">
          <h2 className="text-4xl mb-4 text-center">From Our Clipper Community</h2>
          <p className="text-center text-[rgba(26,26,26,0.7)] mb-12 max-w-2xl mx-auto">
            Real stories from South African clippers earning on Kairo
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-full flex items-center justify-center text-white">
                  T
                </div>
                <div>
                  <h4 className="text-[#1a1a1a]">Thabo M.</h4>
                  <p className="text-xs text-[rgba(26,26,26,0.5)]">Podcast Clipper • Johannesburg</p>
                </div>
              </div>
              <p className="text-sm text-[rgba(26,26,26,0.7)] mb-3">
                "I started clipping podcasts 3 months ago. Now I'm earning R25K+ monthly working from home. Kairo made it so easy to find consistent work."
              </p>
              <div className="flex items-center gap-2 text-xs text-[#FFD700]">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#e5c200] rounded-full flex items-center justify-center text-white">
                  N
                </div>
                <div>
                  <h4 className="text-[#1a1a1a]">Naledi K.</h4>
                  <p className="text-xs text-[rgba(26,26,26,0.5)]">Lifestyle Clipper • Cape Town</p>
                </div>
              </div>
              <p className="text-sm text-[rgba(26,26,26,0.7)] mb-3">
                "I was doing this on Fiverr for peanuts. Kairo connected me with SA creators who actually value quality editing. Game changer!"
              </p>
              <div className="flex items-center gap-2 text-xs text-[#FFD700]">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                  S
                </div>
                <div>
                  <h4 className="text-[#1a1a1a]">Sipho N.</h4>
                  <p className="text-xs text-[rgba(26,26,26,0.5)]">Gaming Clipper • Durban</p>
                </div>
              </div>
              <p className="text-sm text-[rgba(26,26,26,0.7)] mb-3">
                "Started as a side hustle while studying. Now I have 3 recurring clients and clear my tuition fees from clipping gaming streams."
              </p>
              <div className="flex items-center gap-2 text-xs text-[#FFD700]">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="mt-16 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-2xl p-12 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Scissors className="w-4 h-4" />
              <span className="text-sm">Join 150+ Active Clippers</span>
            </div>
            <h2 className="text-4xl mb-4">Ready to Start Clipping?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join South Africa's fastest-growing clipper community. Sign up now and start earning from your editing skills in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
              <Button
                onClick={() => navigateTo("signup")}
                size="lg"
                className="bg-white text-[#7b20b5] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Create Free Clipper Account
              </Button>
              <Button
                onClick={() => navigateTo("howItWorks")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </div>
            
            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl mb-1">💰</div>
                <div className="text-sm">Earn R4K-R20K per campaign</div>
              </div>
              <div>
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm">Work remotely, set your hours</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-sm">Get paid within 48 hours</div>
              </div>
            </div>
          </div>
        )}

        {/* Authenticated User CTA */}
        {isAuthenticated && (
          <div className="mt-16 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Start Applying to Campaigns</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              You're all set! Browse the campaigns above and start applying to the ones that match your skills.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="lg"
              className="bg-white text-[#7b20b5] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl"
            >
              View All Campaigns
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
