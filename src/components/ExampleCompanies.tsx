import { Building2, Star, Users, TrendingUp, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Page } from "../App";

interface ExampleCompaniesProps {
  navigateTo?: (page: Page) => void;
  isAuthenticated?: boolean;
}

export default function ExampleCompanies({ navigateTo, isAuthenticated }: ExampleCompaniesProps) {
  const companies = [
    {
      name: "Cape Town Creatives",
      slug: "capetown-creatives",
      category: "Content Creation",
      description: "Professional content creation and brand collaboration opportunities",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200",
      followers: "2.4K",
      contentCount: 12,
      rating: 4.9,
      revenue: "R 45K",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Fitness Forward SA",
      slug: "fitness-forward",
      category: "Fitness & Wellness",
      description: "Transform your body and mind with certified SA fitness programs",
      logo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200",
      followers: "5.1K",
      rating: 4.8,
      revenue: "R 78K",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Digital Marketing Hub",
      slug: "digital-marketing-hub",
      category: "Marketing & Branding",
      description: "Master digital marketing for the South African market",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200",
      followers: "3.8K",
      rating: 4.9,
      revenue: "R 92K",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f8f8fa] to-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 mb-6 border border-black/5 shadow-sm">
            <TrendingUp className="w-4 h-4 text-[#7b20b5]" />
            <p className="text-sm text-[rgba(26,26,26,0.8)]">Success Stories</p>
          </div>
          <h2 className="text-5xl mb-6 tracking-tight max-w-3xl mx-auto">
            Join South Africa's fastest growing creator companies
          </h2>
          <p className="text-xl text-[rgba(26,26,26,0.6)] max-w-2xl mx-auto">
            See how creators are building thriving businesses with their own branded hubs
          </p>
        </div>

        {/* Company Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {companies.map((company) => (
            <Card
              key={company.slug}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-[#7b20b5]/20"
            >
              {/* Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${company.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {company.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 -mt-12 relative">
                {/* Logo */}
                <div className="w-20 h-20 rounded-2xl border-4 border-white bg-white shadow-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-[#1a1a1a] mb-2 group-hover:text-[#7b20b5] transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-[rgba(26,26,26,0.6)] mb-4 line-clamp-2">
                  {company.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Followers</p>
                    <p className="text-sm text-[#1a1a1a]">{company.followers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                      <p className="text-sm text-[#1a1a1a]">{company.rating}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[rgba(26,26,26,0.5)] mb-1">Revenue</p>
                    <p className="text-sm text-[#7b20b5]">{company.revenue}</p>
                  </div>
                </div>

                {/* URL */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-[rgba(26,26,26,0.5)] group-hover:text-[#7b20b5] transition-colors">
                    <span>kairo.co.za/{company.slug}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl p-8 border border-black/5 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7b20b5] to-[#FFD700] rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-[#1a1a1a] mb-1">Ready to build yours?</h3>
                <p className="text-sm text-[rgba(26,26,26,0.6)]">
                  Join 10,000+ creators earning on Kairo
                </p>
              </div>
            </div>
            <button 
              onClick={() => navigateTo?.(isAuthenticated ? "createCompany" : "signup")}
              className="w-full px-6 py-3 bg-[#7b20b5] text-white rounded-xl hover:bg-[#6a1ca0] transition-colors"
            >
              Create Your Company — It's Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}