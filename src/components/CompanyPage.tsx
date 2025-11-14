import { Page } from "../App";
import { CompanyData } from "./CreateCompany";
import {
  Building2,
  Globe,
  Instagram,
  Twitter,
  Users,
  Star,
  Play,
  ShoppingCart,
  Check,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CompanyPageProps {
  navigateTo: (page: Page) => void;
  companyData: CompanyData | null;
}

export default function CompanyPage({ navigateTo, companyData }: CompanyPageProps) {
  if (!companyData) {
    return (
      <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <Card className="p-12 text-center bg-white">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#7b20b5]/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#7b20b5]" />
              </div>
              <h2 className="text-[#1a1a1a]">Company Not Found</h2>
              <p className="text-[rgba(26,26,26,0.6)]">
                This company doesn't exist or has been removed.
              </p>
              <Button
                onClick={() => navigateTo("home")}
                className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white mt-4"
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Mock content data
  const contentItems = [
    {
      id: "1",
      title: "Advanced Social Media Marketing",
      description: "Master social media marketing for South African businesses",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
      price: 299,
      rating: 4.8,
      students: 234,
    },
    {
      id: "2",
      title: "Cape Town Photography Masterclass",
      description: "Learn professional photography techniques in Cape Town",
      thumbnail: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400",
      price: 499,
      rating: 4.9,
      students: 156,
    },
    {
      id: "3",
      title: "Building Your Personal Brand",
      description: "Create a powerful personal brand in the SA market",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      price: 199,
      rating: 4.7,
      students: 312,
    },
  ];

  const stats = {
    totalStudents: 1542,
    totalContent: 12,
    averageRating: 4.8,
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5">
      {/* Back Button */}
      <div className="container mx-auto max-w-7xl px-6 pt-6">
        <button
          onClick={() => navigateTo("companyDashboard")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative h-80 bg-gradient-to-br from-[#7b20b5] to-[#FFD700] overflow-hidden">
        {companyData.banner && (
          <ImageWithFallback
            src={companyData.banner}
            alt="Company banner"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="container mx-auto max-w-7xl h-full relative z-10 flex items-end pb-12 px-6">
          <div className="flex items-end gap-6 w-full">
            {/* Company Logo */}
            <div className="w-32 h-32 rounded-2xl border-4 border-white bg-white shadow-2xl overflow-hidden flex-shrink-0">
              {companyData.logo ? (
                <ImageWithFallback
                  src={companyData.logo}
                  alt={companyData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#7b20b5] to-[#FFD700] flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 pb-2">
              <h1 className="text-white mb-3 drop-shadow-lg">{companyData.name}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  {companyData.category}
                </Badge>
                <span className="flex items-center gap-1.5 text-white/90">
                  <Users className="w-4 h-4" />
                  {stats.totalStudents.toLocaleString()} followers
                </span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  {stats.averageRating} rating
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-[#7b20b5] hover:bg-gray-100"
            >
              <Users className="w-4 h-4 mr-2" />
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl py-12 px-6">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Section */}
            <Card className="p-8 bg-white">
              <h2 className="text-[#1a1a1a] mb-4">About</h2>
              <p className="text-[rgba(26,26,26,0.7)] leading-relaxed mb-6">
                {companyData.description}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {companyData.website && (
                  <a
                    href={companyData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-sm">Website</span>
                  </a>
                )}
                {companyData.instagram && (
                  <a
                    href={`https://instagram.com/${companyData.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">@{companyData.instagram}</span>
                  </a>
                )}
                {companyData.twitter && (
                  <a
                    href={`https://twitter.com/${companyData.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm">@{companyData.twitter}</span>
                  </a>
                )}
              </div>
            </Card>

            {/* Content/Campaigns Tabs */}
            <Tabs defaultValue="content" className="space-y-6">
              <TabsList className="bg-white p-1 h-auto">
                {companyData.sellsContent && (
                  <TabsTrigger value="content" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Content ({stats.totalContent})
                  </TabsTrigger>
                )}
                {companyData.collaboratesWithBrands && (
                  <TabsTrigger value="campaigns" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
                    <Star className="w-4 h-4 mr-2" />
                    Campaigns
                  </TabsTrigger>
                )}
              </TabsList>

              {/* Content Tab */}
              {companyData.sellsContent && (
                <TabsContent value="content" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {contentItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <ImageWithFallback
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-[#7b20b5] text-white px-3 py-1 rounded-full text-sm">
                            R {item.price}
                          </div>
                        </div>
                        <div className="p-5 space-y-3">
                          <h3 className="text-[#1a1a1a] line-clamp-2">{item.title}</h3>
                          <p className="text-sm text-[rgba(26,26,26,0.6)] line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-sm text-[rgba(26,26,26,0.6)]">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                                {item.rating}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {item.students}
                              </span>
                            </div>
                            <Button size="sm" className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white">
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              Buy
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )}

              {/* Campaigns Tab */}
              {companyData.collaboratesWithBrands && (
                <TabsContent value="campaigns" className="space-y-6">
                  <Card className="p-12 text-center bg-white">
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="w-16 h-16 mx-auto bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-[#FFD700]" />
                      </div>
                      <h3 className="text-[#1a1a1a]">Active Campaigns</h3>
                      <p className="text-[rgba(26,26,26,0.6)]">
                        This creator is currently collaborating with top South African brands
                      </p>
                    </div>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* What You Get Card */}
            <Card className="p-6 bg-white sticky top-24">
              <h3 className="text-[#1a1a1a] mb-4">What You'll Get</h3>
              <ul className="space-y-3">
                {companyData.sellsContent && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,26,0.7)]">
                        Access to premium content and courses
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,26,0.7)]">
                        Lifetime access to all purchased content
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,26,0.7)]">
                        Expert knowledge from SA creators
                      </span>
                    </li>
                  </>
                )}
                {companyData.collaboratesWithBrands && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,26,0.7)]">
                        Authentic brand partnerships
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,26,0.7)]">
                        Quality SA-focused content
                      </span>
                    </li>
                  </>
                )}
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7b20b5] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[rgba(26,26,26,0.7)]">
                    Support local South African creators
                  </span>
                </li>
              </ul>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <Button
                  size="lg"
                  className="w-full bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Follow {companyData.name}
                </Button>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 bg-white">
              <h3 className="text-[#1a1a1a] mb-4">Company Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Followers</p>
                  <p className="text-[#1a1a1a]">{stats.totalStudents.toLocaleString()}</p>
                </div>
                {companyData.sellsContent && (
                  <div>
                    <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Content Items</p>
                    <p className="text-[#1a1a1a]">{stats.totalContent}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Average Rating</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    <p className="text-[#1a1a1a]">{stats.averageRating}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
