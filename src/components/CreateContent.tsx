import { useState } from "react";
import { Page } from "../App";
import { Upload, X, Video, DollarSign, FileText, Eye, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";

interface CreateContentProps {
  navigateTo: (page: Page) => void;
}

export default function CreateContent({ navigateTo }: CreateContentProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    tags: "",
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string>("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    "Education",
    "Entertainment",
    "Fitness & Wellness",
    "Technology",
    "Business",
    "Lifestyle",
    "Arts & Crafts",
    "Music",
    "Comedy",
    "Food & Cooking",
    "Travel",
    "Fashion & Beauty",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleVideoUpload = (file: File) => {
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };

  const handleThumbnailUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setThumbnailFile(file);
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleVideoUpload(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Content submitted:", { formData, videoFile, thumbnailFile });
    alert("Content published successfully!");
    navigateTo("dashboard");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", { formData, videoFile, thumbnailFile });
    alert("Content saved as draft!");
    navigateTo("dashboard");
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview("");
  };

  const removeThumbnail = () => {
    setThumbnailFile(null);
    setThumbnailPreview("");
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigateTo("profile")}
            className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Profile
          </button>
          <h1 className="text-[#1a1a1a] mb-2">Create New Content</h1>
          <p className="text-[rgba(26,26,26,0.6)]">
            Upload your video content and set your price to start earning
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Video Upload Section */}
          <Card className="p-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#7b20b5]" />
                <h3 className="text-[#1a1a1a]">Video Upload</h3>
              </div>

              {!videoPreview ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                    isDragging
                      ? "border-[#7b20b5] bg-[#7b20b5]/5"
                      : "border-[rgba(0,0,0,0.1)] hover:border-[#7b20b5]"
                  }`}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-[rgba(26,26,26,0.4)]" />
                  <h4 className="mb-2">Upload your video</h4>
                  <p className="text-sm text-[rgba(26,26,26,0.6)] mb-4">
                    Drag and drop your video file here, or click to browse
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => e.target.files && handleVideoUpload(e.target.files[0])}
                    className="hidden"
                    id="video-upload"
                    required
                  />
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <Button type="button" className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white pointer-events-none">
                      Browse Files
                    </Button>
                  </label>
                  <p className="text-sm text-[rgba(26,26,26,0.5)] mt-4">
                    Supported formats: MP4, MOV, AVI • Max size: 500MB
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <video
                      src={videoPreview}
                      controls
                      className="w-full max-h-96 object-contain"
                    />
                    <button
                      type="button"
                      onClick={removeVideo}
                      className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#f3f3f5] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#7b20b5]/10 rounded-lg">
                        <Video className="w-5 h-5 text-[#7b20b5]" />
                      </div>
                      <div>
                        <p className="text-sm">{videoFile?.name}</p>
                        <p className="text-sm text-[rgba(26,26,26,0.6)]">
                          {videoFile && (videoFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeVideo}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Thumbnail Upload */}
          <Card className="p-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#7b20b5]" />
                <h3 className="text-[#1a1a1a]">Thumbnail</h3>
              </div>

              {!thumbnailPreview ? (
                <div className="border-2 border-dashed border-[rgba(0,0,0,0.1)] rounded-xl p-8 text-center hover:border-[#7b20b5] transition-colors">
                  <Upload className="w-10 h-10 mx-auto mb-3 text-[rgba(26,26,26,0.4)]" />
                  <p className="text-sm text-[rgba(26,26,26,0.6)] mb-3">
                    Upload a thumbnail image for your content
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files && handleThumbnailUpload(e.target.files[0])}
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label htmlFor="thumbnail-upload" className="cursor-pointer">
                    <Button type="button" variant="outline" size="sm" className="pointer-events-none">
                      Upload Thumbnail
                    </Button>
                  </label>
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-48 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeThumbnail}
                    className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              )}
            </div>
          </Card>

          {/* Content Details */}
          <Card className="p-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#7b20b5]" />
                <h3 className="text-[#1a1a1a]">Content Details</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Give your content an engaging title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what viewers will learn or enjoy from your content..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="min-h-32 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5] resize-none"
                  required
                />
                <p className="text-sm text-[rgba(26,26,26,0.6)]">
                  {formData.description.length}/500 characters
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleInputChange("category", value)}
                    required
                  >
                    <SelectTrigger className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    type="text"
                    placeholder="e.g., tutorial, beginner, tips"
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                    className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[#FFD700]" />
                <h3 className="text-[#1a1a1a]">Set Your Price</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (ZAR)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(26,26,26,0.6)]">
                    R
                  </span>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5] pl-8"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <p className="text-sm text-[rgba(26,26,26,0.6)]">
                  You'll receive 80% of the sale price (R{formData.price ? (parseFloat(formData.price) * 0.8).toFixed(2) : "0.00"})
                </p>
              </div>

              <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl p-4">
                <p className="text-sm">
                  <span className="font-medium">Platform Fee:</span> 20% • This covers payment processing, hosting, and platform maintenance
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-11"
              onClick={handleSaveDraft}
            >
              Save as Draft
            </Button>
            <Button
              type="submit"
              className="flex-1 h-11 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
            >
              Publish Content
            </Button>
          </div>

          <p className="text-center text-sm text-[rgba(26,26,26,0.6)]">
            By publishing, you agree to our{" "}
            <a href="#" className="text-[#7b20b5] hover:underline">
              Content Guidelines
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#7b20b5] hover:underline">
              Terms of Service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
