import { ArrowLeft, Building2, DollarSign, Users, TrendingUp, Check, Sparkles, Zap, Shield, Globe, Video, Scissors } from "lucide-react";
import { Page } from "../App";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface HowItWorksPageProps {
  navigateTo: (page: Page) => void;
}

export default function HowItWorksPage({ navigateTo }: HowItWorksPageProps) {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7b20b5] to-[#FFD700] p-[1px] rounded-full mb-6">
            <div className="bg-white rounded-full px-6 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7b20b5]" />
              <p className="text-sm text-[#1a1a1a]">Your Complete Guide</p>
            </div>
          </div>
          <h1 className="text-6xl tracking-tight mb-6">
            How <span className="bg-gradient-to-r from-[#7b20b5] to-[#FFD700] bg-clip-text text-transparent">Kairo</span> Works
          </h1>
          <p className="text-xl text-[rgba(26,26,26,0.6)] max-w-3xl mx-auto leading-relaxed">
            Kairo is South Africa's first creator marketplace where you can build your own branded company, 
            sell content, and collaborate with brands — all in one powerful platform.
          </p>
        </div>

        {/* What is Kairo */}
        <Card className="p-8 mb-12 bg-white border-2 border-[#7b20b5]/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-[#7b20b5]/10 text-[#7b20b5] hover:bg-[#7b20b5]/20 mb-4">
                About Kairo
              </Badge>
              <h2 className="text-[#1a1a1a] mb-4">
                The South African Creator Platform
              </h2>
              <p className="text-[rgba(26,26,26,0.6)] mb-4 leading-relaxed">
                Kairo is built specifically for the South African creator economy. We give you the tools to build a professional business, 
                not just a social media presence.
              </p>
              <p className="text-[rgba(26,26,26,0.6)] leading-relaxed">
                Create your own company hub with a custom URL, brand it with your logo and colors, and start 
                earning from your content and collaborations. It's your business, your way.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#7b20b5]/5 to-[#FFD700]/5 rounded-xl p-6 border border-[#7b20b5]/20">
                <Globe className="w-8 h-8 text-[#7b20b5] mb-3" />
                <h4 className="text-[#1a1a1a] mb-2">Your Own URL</h4>
                <p className="text-sm text-[rgba(26,26,26,0.6)]">
                  Get kairo.co.za/yourcompany
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700]/5 to-[#7b20b5]/5 rounded-xl p-6 border border-[#FFD700]/20">
                <Building2 className="w-8 h-8 text-[#FFD700]" />
                <h4 className="text-[#1a1a1a] mb-2">Full Branding Control</h4>
                <p className="text-sm text-[rgba(26,26,26,0.6)]">
                  Logo, banner, colors — make it yours
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* The 4-Step Process */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] mb-4">Launch in 4 Simple Steps</h2>
            <p className="text-lg text-[rgba(26,26,26,0.6)]">
              From signup to earning in under 10 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <Card className="p-8 bg-white border-2 border-black/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7b20b5]/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white">01</span>
                </div>
                <h3 className="text-[#1a1a1a] mb-3">Sign Up & Choose Your Path</h3>
                <p className="text-[rgba(26,26,26,0.6)] mb-4 leading-relaxed">
                  Create your account as a creator or brand. It's free to join and takes less than 2 minutes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-[#7b20b5]" />
                    No credit card required
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-[#7b20b5]" />
                    Choose creator or brand account
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 bg-white border-2 border-black/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#e5c200] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white">02</span>
                </div>
                <h3 className="text-[#1a1a1a] mb-3">Create Your Company</h3>
                <p className="text-[rgba(26,26,26,0.6)] mb-4 leading-relaxed">
                  Set up your branded hub with our 3-step wizard. Upload your logo, choose your category, and you're live.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-[#FFD700]" />
                    Custom company name & URL
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-[#FFD700]" />
                    Upload logo & banner
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 bg-white border-2 border-black/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white">03</span>
                </div>
                <h3 className="text-[#1a1a1a] mb-3">Choose Your Revenue Streams</h3>
                <p className="text-[rgba(26,26,26,0.6)] mb-4 leading-relaxed">
                  Decide how you want to earn: sell content, take brand collaborations, or both. You're in control.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-blue-500" />
                    Create and monetize content (80/20 split)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-blue-500" />
                    Accept brand campaigns
                  </li>
                </ul>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-8 bg-white border-2 border-black/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white">04</span>
                </div>
                <h3 className="text-[#1a1a1a] mb-3">Start Earning & Growing</h3>
                <p className="text-[rgba(26,26,26,0.6)] mb-4 leading-relaxed">
                  Upload content, accept campaigns, and track everything from your dashboard. We handle payments and analytics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-green-500" />
                    Real-time revenue tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                    <Check className="w-4 h-4 text-green-500" />
                    Automatic payouts
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-[rgba(26,26,26,0.6)]">
              Built for South African creators, by South Africans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#7b20b5]/10 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#7b20b5]" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Fair Revenue Split</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                Keep 80% of every sale. We only succeed when you do. Transparent pricing, no hidden fees.
              </p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Instant Setup</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                Launch your company in minutes with our guided wizard. No technical knowledge required.
              </p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Secure Payments</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                South African bank integration with secure, encrypted transactions. Your money is safe.
              </p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Analytics Dashboard</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                Track revenue, views, engagement, and growth. Make data-driven decisions for your business.
              </p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Brand Partnerships</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                Connect with top SA brands looking for authentic creator partnerships and collaborations.
              </p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-pink-500" />
              </div>
              <h4 className="text-[#1a1a1a] mb-2">Your Brand, Your Rules</h4>
              <p className="text-sm text-[rgba(26,26,26,0.6)] leading-relaxed">
                Full control over pricing, branding, and content. Build a real business, not just a profile.
              </p>
            </Card>
          </div>
        </div>

        {/* Campaign Types Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] mb-4">Explore Campaign Opportunities</h2>
            <p className="text-lg text-[rgba(26,26,26,0.6)]">
              Two powerful ways to earn as a creator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* UGC Campaigns */}
            <Card 
              onClick={() => navigateTo("ugcCampaigns")}
              className="p-8 bg-gradient-to-br from-[#7b20b5]/5 to-[#7b20b5]/10 border-2 border-[#7b20b5]/20 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7b20b5] to-[#6a1ca0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] mb-2 group-hover:text-[#7b20b5] transition-colors">
                    UGC Creator Campaigns
                  </h3>
                  <Badge className="bg-[#7b20b5]/20 text-[#7b20b5] mb-3">
                    User-Generated Content
                  </Badge>
                </div>
              </div>
              
              <p className="text-[rgba(26,26,26,0.6)] mb-6 leading-relaxed">
                Create authentic video content for South Africa's top brands. Produce unboxings, reviews, tutorials, 
                and brand collaborations that resonate with real audiences.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#7b20b5]" />
                  <span>R5,000 - R150,000 per campaign</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#7b20b5]" />
                  <span>Work with brands like Nando's, Woolworths, Takealot</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#7b20b5]" />
                  <span>Creative freedom with brand guidelines</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#7b20b5]" />
                  <span>Build your content portfolio</span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#7b20b5] text-white rounded-xl hover:bg-[#6a1ca0] transition-colors flex items-center justify-center gap-2">
                Browse UGC Campaigns
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </Card>

            {/* Clipper Campaigns */}
            <Card 
              onClick={() => navigateTo("clipperCampaigns")}
              className="p-8 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 border-2 border-[#FFD700]/20 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#e5c200] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scissors className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] mb-2 group-hover:text-[#FFD700] transition-colors">
                    Clipper Campaigns
                  </h3>
                  <Badge className="bg-[#FFD700]/20 text-[#8B7500] mb-3">
                    Video Editing
                  </Badge>
                </div>
              </div>
              
              <p className="text-[rgba(26,26,26,0.6)] mb-6 leading-relaxed">
                Turn long-form content into viral short clips. Edit podcasts, vlogs, and interviews into 
                TikTok, Instagram Reels, and YouTube Shorts for top SA creators.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#FFD700]" />
                  <span>R4,000 - R20,000 per campaign</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#FFD700]" />
                  <span>Work with Podcast and Chill, Mac G Media & more</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#FFD700]" />
                  <span>Recurring weekly/monthly contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[rgba(26,26,26,0.7)]">
                  <Check className="w-4 h-4 text-[#FFD700]" />
                  <span>Remote work, flexible schedule</span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#FFD700] text-white rounded-xl hover:bg-[#e5c200] transition-colors flex items-center justify-center gap-2">
                Browse Clipper Campaigns
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-12 bg-gradient-to-br from-[#7b20b5] to-[#FFD700] border-0 text-center">
          <h2 className="text-white mb-4">Ready to Build Your Creator Company?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 10,000+ South African creators earning from their passion. Start today, it's completely free.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigateTo("signup")}
              className="px-8 py-4 bg-white text-[#7b20b5] rounded-xl hover:shadow-2xl transition-all"
            >
              Create Your Company Now
            </button>
            <button
              onClick={() => navigateTo("home")}
              className="px-8 py-4 bg-white/10 text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Back to Home
            </button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            No credit card required • 80/20 revenue split • Launch in minutes
          </p>
        </Card>
      </div>
    </div>
  );
}