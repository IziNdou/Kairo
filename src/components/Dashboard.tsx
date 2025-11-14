import { useState } from "react";
import { Page } from "../App";
import { 
  Video, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MoreVertical,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  FileText,
  ArrowLeft
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DashboardProps {
  navigateTo: (page: Page) => void;
}

interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  views: number;
  revenue: number;
  category: string;
  status: "published" | "draft";
  createdAt: string;
}

export default function Dashboard({ navigateTo }: DashboardProps) {
  // Mock data - in a real app, this would come from an API/database
  const [contentItems] = useState<ContentItem[]>([
    {
      id: "1",
      title: "Advanced Social Media Marketing for SA Brands",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
      description: "Learn how to create engaging content for South African audiences",
      price: 299,
      views: 1247,
      revenue: 29850,
      category: "Business",
      status: "published",
      createdAt: "2025-09-15",
    },
    {
      id: "2",
      title: "Cape Town Photography Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400",
      description: "Capture the beauty of Cape Town with professional photography techniques",
      price: 499,
      views: 892,
      revenue: 44502,
      category: "Arts & Crafts",
      status: "published",
      createdAt: "2025-08-22",
    },
    {
      id: "3",
      title: "Building a Brand in South Africa",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      description: "Step-by-step guide to building your personal brand in the SA market",
      price: 199,
      views: 0,
      revenue: 0,
      category: "Business",
      status: "draft",
      createdAt: "2025-10-01",
    },
    {
      id: "4",
      title: "Fitness Training for Busy Professionals",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
      description: "Get fit with quick, effective workouts designed for busy schedules",
      price: 149,
      views: 0,
      revenue: 0,
      category: "Fitness & Wellness",
      status: "draft",
      createdAt: "2025-10-05",
    },
  ]);

  const publishedContent = contentItems.filter((item) => item.status === "published");
  const draftContent = contentItems.filter((item) => item.status === "draft");

  const totalRevenue = publishedContent.reduce((sum, item) => sum + item.revenue, 0);
  const totalViews = publishedContent.reduce((sum, item) => sum + item.views, 0);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this content?")) {
      console.log("Deleting content:", id);
      alert("Content deleted successfully!");
    }
  };

  const handleEdit = (id: string) => {
    console.log("Editing content:", id);
    navigateTo("createContent");
  };

  const ContentCard = ({ item }: { item: ContentItem }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <Badge
          className={`absolute top-3 right-3 ${
            item.status === "published"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          } text-white`}
        >
          {item.status === "published" ? "Published" : "Draft"}
        </Badge>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[#1a1a1a] line-clamp-2">{item.title}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEdit(item.id)}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-sm text-[rgba(26,26,26,0.6)] line-clamp-2 mb-3">
            {item.description}
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {item.category}
            </Badge>
            <span className="text-sm text-[#7b20b5]">R {item.price.toFixed(2)}</span>
          </div>
        </div>

        {item.status === "published" && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(0,0,0,0.1)]">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[rgba(26,26,26,0.6)]">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Views</span>
              </div>
              <p className="text-[#1a1a1a]">{item.views.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[rgba(26,26,26,0.6)]">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm">Revenue</span>
              </div>
              <p className="text-[#7b20b5]">R {item.revenue.toLocaleString()}</p>
            </div>
          </div>
        )}

        {item.status === "draft" && (
          <div className="flex gap-2 pt-2">
            <Button
              onClick={() => handleEdit(item.id)}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Continue Editing
            </Button>
            <Button
              onClick={() => alert("Content published!")}
              size="sm"
              className="flex-1 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
            >
              Publish Now
            </Button>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigateTo("profile")}
            className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Profile
          </button>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-[#1a1a1a] mb-2">Creator Dashboard</h1>
              <p className="text-[rgba(26,26,26,0.6)]">
                Manage your content and track your performance
              </p>
            </div>
            <Button
              onClick={() => navigateTo("createContent")}
              className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white h-11 gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New Content
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-[#7b20b5]/10 rounded-lg">
                <Video className="w-5 h-5 text-[#7b20b5]" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Content</p>
            <h2 className="text-[#1a1a1a]">{contentItems.length}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-[#FFD700]/20 rounded-lg">
                <DollarSign className="w-5 h-5 text-[#FFD700]" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Revenue</p>
            <h2 className="text-[#7b20b5]">R {totalRevenue.toLocaleString()}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Total Views</p>
            <h2 className="text-[#1a1a1a]">{totalViews.toLocaleString()}</h2>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm text-[rgba(26,26,26,0.6)] mb-1">Published</p>
            <h2 className="text-[#1a1a1a]">{publishedContent.length}</h2>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white p-1 h-auto">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              All Content ({contentItems.length})
            </TabsTrigger>
            <TabsTrigger value="published" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
              <Video className="w-4 h-4 mr-2" />
              Published ({publishedContent.length})
            </TabsTrigger>
            <TabsTrigger value="drafts" className="data-[state=active]:bg-[#7b20b5] data-[state=active]:text-white">
              <Clock className="w-4 h-4 mr-2" />
              Drafts ({draftContent.length})
            </TabsTrigger>
          </TabsList>

          {/* All Content */}
          <TabsContent value="all" className="space-y-6">
            {contentItems.length === 0 ? (
              <Card className="p-12 text-center bg-white">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[#7b20b5]/10 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-[#7b20b5]" />
                  </div>
                  <h3 className="text-[#1a1a1a]">No content yet</h3>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    Start creating content to build your portfolio and earn revenue
                  </p>
                  <Button
                    onClick={() => navigateTo("createContent")}
                    className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white mt-4"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Content
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentItems.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Published Content */}
          <TabsContent value="published" className="space-y-6">
            {publishedContent.length === 0 ? (
              <Card className="p-12 text-center bg-white">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-[#1a1a1a]">No published content</h3>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    Publish your drafts to start earning revenue
                  </p>
                </div>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedContent.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Drafts */}
          <TabsContent value="drafts" className="space-y-6">
            {draftContent.length === 0 ? (
              <Card className="p-12 text-center bg-white">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto bg-yellow-50 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-[#1a1a1a]">No drafts</h3>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    All your content is published. Create new content to add drafts.
                  </p>
                </div>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftContent.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
