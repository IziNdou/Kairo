import { useState } from "react";
import { Page } from "../App";
import { Building2, Upload, X, ArrowLeft, Check } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CreateCompanyProps {
  navigateTo: (page: Page) => void;
  onCompanyCreated: (companyData: CompanyData) => void;
}

export interface CompanyData {
  name: string;
  slug: string;
  description: string;
  logo: string;
  banner: string;
  sellsContent: boolean;
  collaboratesWithBrands: boolean;
  category: string;
  website: string;
  twitter: string;
  instagram: string;
}

export default function CreateCompany({ navigateTo, onCompanyCreated }: CreateCompanyProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CompanyData>({
    name: "",
    slug: "",
    description: "",
    logo: "",
    banner: "",
    sellsContent: true,
    collaboratesWithBrands: false,
    category: "",
    website: "",
    twitter: "",
    instagram: "",
  });
  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  const categories = [
    "Education & Courses",
    "Fitness & Wellness",
    "Content Creation",
    "Digital Products",
    "Consulting & Coaching",
    "Technology & Software",
    "Marketing & Branding",
    "Creative Services",
    "Entertainment",
    "Other",
  ];

  const handleInputChange = (field: keyof CompanyData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from name
    if (field === "name") {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
      setFormData((prev) => ({ ...prev, logo: url }));
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBannerPreview(url);
      setFormData((prev) => ({ ...prev, banner: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    console.log("Company created:", formData);
    onCompanyCreated(formData);
    navigateTo("companyDashboard");
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.name && formData.description && (formData.sellsContent || formData.collaboratesWithBrands);
    }
    if (step === 2) {
      return formData.category;
    }
    return true;
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5 py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#7b20b5] to-[#FFD700] rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[#1a1a1a] mb-2">Create Your Company</h1>
            <p className="text-[rgba(26,26,26,0.6)]">
              Build your brand on Kairo and start earning
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    s < step
                      ? "bg-[#7b20b5] text-white"
                      : s === step
                      ? "bg-[#7b20b5] text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {s < step ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-1 rounded-full ${
                      s < step ? "bg-[#7b20b5]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8 bg-white">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Cape Town Creatives"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Company URL</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[rgba(26,26,26,0.6)]">kairo.co.za/</span>
                    <Input
                      id="slug"
                      placeholder="your-company"
                      value={formData.slug}
                      onChange={(e) => handleInputChange("slug", e.target.value)}
                      className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                      required
                    />
                  </div>
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">
                    This will be your unique company URL
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell people what your company does and what makes it special..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="min-h-32 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5] resize-none"
                    required
                  />
                  <p className="text-sm text-[rgba(26,26,26,0.6)]">
                    {formData.description.length}/500 characters
                  </p>
                </div>

                <div className="space-y-4">
                  <Label>What will you do on Kairo? *</Label>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 border-2 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                      <Checkbox
                        id="sellContent"
                        checked={formData.sellsContent}
                        onCheckedChange={(checked) =>
                          handleInputChange("sellsContent", checked)
                        }
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="sellContent"
                          className="cursor-pointer text-[#1a1a1a]"
                        >
                          Sell Content & Courses
                        </label>
                        <p className="text-sm text-[rgba(26,26,26,0.6)]">
                          Create and sell videos, courses, and digital products
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-2 rounded-xl hover:border-[#7b20b5]/30 transition-colors">
                      <Checkbox
                        id="collaborate"
                        checked={formData.collaboratesWithBrands}
                        onCheckedChange={(checked) =>
                          handleInputChange("collaboratesWithBrands", checked)
                        }
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="collaborate"
                          className="cursor-pointer text-[#1a1a1a]"
                        >
                          Collaborate with Brands
                        </label>
                        <p className="text-sm text-[rgba(26,26,26,0.6)]">
                          Partner with SA brands on campaigns and sponsored content
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Category & Branding */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Category *</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => handleInputChange("category", category)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.category === category
                            ? "border-[#7b20b5] bg-[#7b20b5]/5"
                            : "border-gray-200 hover:border-[#7b20b5]/30"
                        }`}
                      >
                        <p className="text-sm">{category}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Company Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                      {logoPreview ? (
                        <ImageWithFallback src={logoPreview} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <Upload className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label htmlFor="logo-upload">
                        <Button type="button" variant="outline" onClick={() => document.getElementById('logo-upload')?.click()}>
                          Upload Logo
                        </Button>
                      </label>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        Recommended: 512x512px, PNG or JPG
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Company Banner</Label>
                  <div className="space-y-4">
                    <div className="w-full h-48 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                      {bannerPreview ? (
                        <ImageWithFallback src={bannerPreview} alt="Banner" className="w-full h-full object-cover" />
                      ) : (
                        <Upload className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBannerUpload}
                        className="hidden"
                        id="banner-upload"
                      />
                      <label htmlFor="banner-upload">
                        <Button type="button" variant="outline" onClick={() => document.getElementById('banner-upload')?.click()}>
                          Upload Banner
                        </Button>
                      </label>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        Recommended: 1920x400px, PNG or JPG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Social Links */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-[#1a1a1a] mb-2">Connect Your Socials</h2>
                  <p className="text-[rgba(26,26,26,0.6)]">
                    Optional: Add your social media links to build trust
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-[rgba(26,26,26,0.6)]">@</span>
                    <Input
                      id="instagram"
                      placeholder="username"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter / X</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-[rgba(26,26,26,0.6)]">@</span>
                    <Input
                      id="twitter"
                      placeholder="username"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                    />
                  </div>
                </div>

                <div className="bg-[#7b20b5]/5 border border-[#7b20b5]/20 rounded-xl p-6 mt-8">
                  <h3 className="text-[#1a1a1a] mb-3">You're almost there!</h3>
                  <p className="text-sm text-[rgba(26,26,26,0.6)] mb-4">
                    Once you create your company, you'll be able to:
                  </p>
                  <ul className="space-y-2 text-sm text-[rgba(26,26,26,0.8)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#7b20b5]" />
                      Upload and sell your content
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#7b20b5]" />
                      Collaborate with top SA brands
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#7b20b5]" />
                      Access analytics and insights
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#7b20b5]" />
                      Get your own branded company page
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 h-11"
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                disabled={!canProceed()}
                className="flex-1 h-11 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 3 ? "Create Company" : "Continue"}
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}
