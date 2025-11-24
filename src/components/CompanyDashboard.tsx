import { useState } from "react";
import { Page } from "../App";
import { CompanyData } from "./CreateCompany";
import {
  Building2,
  TrendingUp,
  DollarSign,
  Users,
  Eye,
  Video,
  Briefcase,
  Settings,
  BarChart3,
  Globe,
  Plus,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CompanyDashboardProps {
  navigateTo: (page: Page) => void;
  companyData: CompanyData | null;
}

export default function CompanyDashboard({ navigateTo, companyData }: CompanyDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!companyData) {
    return (
      <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <Card className="p-12 text-center bg-white">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#7b20b5]/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#7b20b5]" />
              </div>
              <h2 className="text-[#1a1a1a]">No Company Yet</h2>
              <p className="text-[rgba(26,26,26,0.6)]">
                Create your company to start selling content and collaborating with brands
              </p>
              <Button
                onClick={() => navigateTo("createCompany")}
                className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white mt-4"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Company
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Mock analytics data
  const stats = {
    totalRevenue: 45820,
    totalViews: 12487,
    totalSales: 234,
    activeCollaborations: 3,
    contentItems: 12,
    followers: 1542,
  };

  const recentActivity = [
    { type: "sale", title: "Digital Marketing Package purchased", amount: 299, time: "2 hours ago" },
    { type: "view", title: "Photography Portfolio viewed", views: 45, time: "5 hours ago" },
    { type: "collaboration", title: "New campaign invitation from Nando's", time: "1 day ago" },
    { type: "sale", title: "Brand Strategy Consultation booked", amount: 499, time: "2 days ago" },
  ];

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigateTo("profile")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </button>

        {/* Company Header */}
        <div className="mb-8">
          <Card className="p-6 bg-white relative overflow-hidden">
            {/* Banner */}
            {companyData.banner && (
              <div className="absolute inset-0 h-32 opacity-20">
                <ImageWithFallback
                  src={companyData.banner}
                  alt="Company banner"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="relative flex items-start gap-6">
              {/* Logo */}
              <div className="w-24 h-24 rounded-2xl border-4 border-white bg-white shadow-lg overflow-hidden flex-shrink-0">
                {companyData.logo ? (
                  <ImageWithFallback
                    src={companyData.logo}
                    alt={companyData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#7b20b5] to-[#FFD700] flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-[#1a1a1a] mb-2">{companyData.name}</h1>
                    <p className="text-[rgba(26,26,26,0.6)] mb-3">
                      {companyData.description}
                    </p>
                    <div className="flex items-center gap-4 flex-wrap text-sm text-[rgba(26,26,26,0.6)]">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4" />
                        kairo.co.za/{companyData.slug}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {stats.followers.toLocaleString()} followers
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => navigateTo("companyPage")}
                      variant="outline"
                      className="border-[#7b20b5] text-[#7b20b5] hover:bg-[#7b20b5]/5"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Public Page
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {companyData.sellsContent && (
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigateTo("createContent")}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7b20b5]/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-[#7b20b5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] mb-1">Create Content</h3>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">
                    Upload videos, courses, or digital products
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[rgba(26,26,26,0.4)]" />
              </div>
            </Card>
          )}

          {companyData.collaboratesWithBrands && (
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] mb-1">Browse Campaigns</h3>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">
                    Find and apply to brand collaborations
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[rgba(26,26,26,0.4)]" />
              </div>
            </Card>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-[#7b20b5]/10 rounded-lg">
                <DollarSign className="w-5 h-5 text-[#7b20b5]" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Revenue</p>
            <h2 className="text-[#7b20b5]">R {stats.totalRevenue.toLocaleString()}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Views</p>
            <h2 className="text-[#1a1a1a]">{stats.totalViews.toLocaleString()}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Sales</p>
            <h2 className="text-[#1a1a1a]">{stats.totalSales}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-[#FFD700]/20 rounded-lg">
                <Briefcase className="w-5 h-5 text-[#FFD700]" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Active Campaigns</p>
            <h2 className="text-[#1a1a1a]">{stats.activeCollaborations}</h2>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white p-1 h-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            {companyData.sellsContent && (
              <TabsTrigger value="content" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
                <Video className="w-4 h-4 mr-2" />
                Content ({stats.contentItems})
              </TabsTrigger>
            )}
            {companyData.collaboratesWithBrands && (
              <TabsTrigger value="campaigns" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
                <Briefcase className="w-4 h-4 mr-2" />
                Campaigns ({stats.activeCollaborations})
              </TabsTrigger>
            )}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6 bg-white">
              <h3 className="text-[#1a1a1a] mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activity.type === "sale"
                          ? "bg-green-50"
                          : activity.type === "view"
                          ? "bg-blue-50"
                          : "bg-[#FFD700]/20"
                      }`}
                    >
                      {activity.type === "sale" && (
                        <DollarSign className="w-5 h-5 text-green-600" />
                      )}
                      {activity.type === "view" && (
                        <Eye className="w-5 h-5 text-blue-600" />
                      )}
                      {activity.type === "collaboration" && (
                        <Briefcase className="w-5 h-5 text-[#FFD700]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1a1a1a] mb-1">{activity.title}</p>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        {activity.time}
                      </p>
                    </div>
                    {activity.amount && (
                      <div className="text-right">
                        <p className="text-[#7b20b5]">
                          +R {activity.amount.toLocaleString()}
                        </p>
                      </div>
                    )}
                    {activity.views && (
                      <div className="text-right">
                        <p className="text-[rgba(26,26,26,0.6)]">
                          {activity.views} views
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          {companyData.sellsContent && (
            <TabsContent value="content" className="space-y-6">
              <Card className="p-12 text-center bg-white">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[#7b20b5]/10 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-[#7b20b5]" />
                  </div>
                  <h3 className="text-[#1a1a1a]">Manage Your Content</h3>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    View and manage all your content from your creator dashboard
                  </p>
                  <Button
                    onClick={() => navigateTo("dashboard")}
                    className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white mt-4"
                  >
                    Go to Creator Dashboard
                  </Button>
                </div>
              </Card>
            </TabsContent>
          )}

          {/* Campaigns Tab */}
          {companyData.collaboratesWithBrands && (
            <TabsContent value="campaigns" className="space-y-6">
              <Card className="p-12 text-center bg-white">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <h3 className="text-[#1a1a1a]">Brand Collaborations</h3>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    Browse available campaigns and manage your collaborations
                  </p>
                  <Button className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white mt-4">
                    Browse Campaigns
                  </Button>
                </div>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}