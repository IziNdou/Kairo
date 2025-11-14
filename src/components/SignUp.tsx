import { useState } from "react";
import { Page } from "../App";
import { Eye, EyeOff, User, Building2, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import kairoLogo from "figma:asset/035a2d6638b6203d9a9cf60b4103d1195cb5d299.png";

interface SignUpProps {
  navigateTo: (page: Page) => void;
  onSignUpComplete: (userType: "creator" | "brand") => void;
}

export default function SignUp({ navigateTo, onSignUpComplete }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<"creator" | "brand" | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      alert("Please select account type");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Creating account:", { ...formData, userType });
    onSignUpComplete(userType);
  };

  const handleSocialSignUp = (provider: string) => {
    if (!userType) {
      alert("Please select account type first");
      return;
    }
    console.log(`Signing up with ${provider} as ${userType}`);
    onSignUpComplete(userType);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        {/* Back Button */}
        <button
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-black rounded-2xl shadow-lg p-8 space-y-6 border border-white/10">
          {/* Header */}
          <div className="text-center space-y-4">
            <img 
              src={kairoLogo} 
              alt="Kairo" 
              className="w-[180px] h-auto mx-auto object-contain"
            />
            <div className="space-y-2">
              <h1 className="text-white">Create Your Account</h1>
              <p className="text-white/60">Join the South African creator economy</p>
            </div>
          </div>

          {/* Account Type Selection */}
          <div className="space-y-3">
            <Label className="text-white">I am a</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType("creator")}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  userType === "creator"
                    ? "border-[#6C3FAF] bg-[#6C3FAF]/10"
                    : "border-white/10 hover:border-[#6C3FAF]/50 text-white"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    userType === "creator" ? "bg-[#6C3FAF] text-white" : "bg-white/5 text-white"
                  }`}
                >
                  <User className="w-6 h-6" />
                </div>
                <span className="text-sm text-white">Content Creator</span>
              </button>

              <button
                type="button"
                onClick={() => setUserType("brand")}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  userType === "brand"
                    ? "border-[#6C3FAF] bg-[#6C3FAF]/10"
                    : "border-white/10 hover:border-[#6C3FAF]/50 text-white"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    userType === "brand" ? "bg-[#6C3FAF] text-white" : "bg-white/5 text-white"
                  }`}
                >
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-sm text-white">Brand</span>
              </button>
            </div>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 bg-white/5 border-white/10 hover:bg-white/10 text-white"
              onClick={() => handleSocialSignUp("Google")}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 bg-white/5 border-white/10 hover:bg-white/10 text-white"
              onClick={() => handleSocialSignUp("Facebook")}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign up with Facebook
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 bg-white/5 border-white/10 hover:bg-white/10 text-white"
              onClick={() => handleSocialSignUp("Apple")}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#000000">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Sign up with Apple
            </Button>
          </div>

          <div className="relative">
            <Separator className="bg-white/10" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 text-sm text-white/60">
              Or sign up with email
            </span>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="h-11 bg-white/5 border-white/10 focus:border-[#6C3FAF] text-white placeholder:text-white/40"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-11 bg-white/5 border-white/10 focus:border-[#6C3FAF] text-white placeholder:text-white/40"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="h-11 bg-white/5 border-white/10 focus:border-[#6C3FAF] text-white placeholder:text-white/40"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="h-11 bg-white/5 border-white/10 focus:border-[#6C3FAF] text-white placeholder:text-white/40 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="h-11 bg-white/5 border-white/10 focus:border-[#6C3FAF] text-white placeholder:text-white/40 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
            >
              Create Account
            </Button>
          </form>

          {/* Sign In CTA */}
          <div className="text-center pt-4">
            <p className="text-sm text-white/60">
              Already have an account?{" "}
              <button
                onClick={() => navigateTo("signin")}
                className="text-[#6C3FAF] hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
