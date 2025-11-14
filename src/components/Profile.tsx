import { useState } from "react";
import { Page } from "../App";
import { User, Mail, CreditCard, Settings, LogOut, Camera, Lock, Bell, PlusCircle, LayoutDashboard, Building2, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProfileProps {
  navigateTo: (page: Page) => void;
  userType: "creator" | "brand" | null;
  userData: {
    name: string;
    email: string;
    profilePicture: string;
  };
  onUpdateProfile: (data: { name: string; email: string; profilePicture: string }) => void;
  onLogout: () => void;
}

export default function Profile({ navigateTo, userType, userData, onUpdateProfile, onLogout }: ProfileProps) {
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    profilePicture: userData.profilePicture,
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    weeklyDigest: true,
  });

  const [activeSection, setActiveSection] = useState<"account" | "preferences" | "banking">("account");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    onUpdateProfile(formData);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      onLogout();
    }
  };

  const handlePreferenceChange = (key: string, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const getInitials = () => {
    return formData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-[#f8f8fa] py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-[#1a1a1a] mb-2">Profile Settings</h1>
            <p className="text-[rgba(26,26,26,0.6)]">
              Manage your account settings and preferences
            </p>
          </div>
          {userType === "creator" && (
            <div className="flex gap-3">
              <Button
                onClick={() => navigateTo("companyDashboard")}
                variant="outline"
                className="border-[#FFD700] text-[#1a1a1a] hover:bg-[#FFD700]/10"
              >
                <Building2 className="w-4 h-4 mr-2" />
                My Company
              </Button>
              <Button
                onClick={() => navigateTo("dashboard")}
                variant="outline"
                className="border-[#7b20b5] text-[#7b20b5] hover:bg-[#7b20b5]/5"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                onClick={() => navigateTo("createContent")}
                className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Create Content
              </Button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-[240px,1fr] gap-6">
          {/* Sidebar Navigation */}
          <div className="space-y-2">
            <button
              onClick={() => setActiveSection("account")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === "account"
                  ? "bg-[#7b20b5] text-white"
                  : "bg-white text-[rgba(26,26,26,0.8)] hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
            <button
              onClick={() => setActiveSection("preferences")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === "preferences"
                  ? "bg-[#7b20b5] text-white"
                  : "bg-white text-[rgba(26,26,26,0.8)] hover:bg-gray-50"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Preferences</span>
            </button>
            <button
              onClick={() => setActiveSection("banking")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === "banking"
                  ? "bg-[#7b20b5] text-white"
                  : "bg-white text-[rgba(26,26,26,0.8)] hover:bg-gray-50"
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>Banking</span>
            </button>
            <Separator className="my-2" />
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Account Section */}
            {activeSection === "account" && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Update your account details and profile picture
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={formData.profilePicture} alt={formData.name} />
                        <AvatarFallback className="bg-[#7b20b5] text-white text-2xl">
                          {getInitials()}
                        </AvatarFallback>
                      </Avatar>
                      <button
                        className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#7b20b5] text-white flex items-center justify-center hover:bg-[#6a1ca0] transition-colors"
                        onClick={() => {
                          const url = prompt("Enter profile picture URL:");
                          if (url) handleInputChange("profilePicture", url);
                        }}
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-[#1a1a1a]">{formData.name}</h3>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        {userType === "creator" ? "Content Creator" : "Brand Account"}
                      </p>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">{formData.email}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Edit Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Change Password</Label>
                      <div className="flex gap-2">
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter new password"
                          className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                        />
                        <Button variant="outline" className="h-11">
                          <Lock className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        Leave blank to keep current password
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFormData({
                          name: userData.name,
                          email: userData.email,
                          profilePicture: userData.profilePicture,
                        });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSaveProfile}
                      className="bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
                    >
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Preferences Section */}
            {activeSection === "preferences" && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 text-[#7b20b5] mt-0.5" />
                        <div>
                          <p className="text-[#1a1a1a]">Email Notifications</p>
                          <p className="text-sm text-[rgba(26,26,26,0.6)]">
                            Receive email updates about your activity
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) => handlePreferenceChange("emailNotifications", checked)}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 text-[#7b20b5] mt-0.5" />
                        <div>
                          <p className="text-[#1a1a1a]">Push Notifications</p>
                          <p className="text-sm text-[rgba(26,26,26,0.6)]">
                            Get push notifications on your device
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.pushNotifications}
                        onCheckedChange={(checked) => handlePreferenceChange("pushNotifications", checked)}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#7b20b5] mt-0.5" />
                        <div>
                          <p className="text-[#1a1a1a]">Marketing Emails</p>
                          <p className="text-sm text-[rgba(26,26,26,0.6)]">
                            Receive emails about new features and offers
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.marketingEmails}
                        onCheckedChange={(checked) => handlePreferenceChange("marketingEmails", checked)}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#7b20b5] mt-0.5" />
                        <div>
                          <p className="text-[#1a1a1a]">Weekly Digest</p>
                          <p className="text-sm text-[rgba(26,26,26,0.6)]">
                            Get a weekly summary of your earnings and activity
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.weeklyDigest}
                        onCheckedChange={(checked) => handlePreferenceChange("weeklyDigest", checked)}
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/30 mt-6">
                    <Settings className="w-5 h-5 text-[#7b20b5] mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm text-[#1a1a1a]">Account Type: {userType === "creator" ? "Creator" : "Brand"}</p>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        Contact support if you need to change your account type
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Banking Section */}
            {activeSection === "banking" && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Banking Details</CardTitle>
                  <CardDescription>
                    Manage your payment information for {userType === "creator" ? "receiving earnings" : "brand payments"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3 p-4 bg-[#7b20b5]/5 rounded-xl border border-[#7b20b5]/20">
                    <Lock className="w-5 h-5 text-[#7b20b5] mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm text-[#1a1a1a]">Your banking details are secure</p>
                      <p className="text-sm text-[rgba(26,26,26,0.6)]">
                        All payment information is encrypted and stored securely
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#7b20b5]/10 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-[#7b20b5]" />
                        </div>
                        <div>
                          <p className="text-[#1a1a1a]">Bank Account</p>
                          <p className="text-sm text-[rgba(26,26,26,0.6)]">••••• 4532</p>
                        </div>
                      </div>
                      <Button variant="outline">Edit</Button>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigateTo("banking")}
                    className="w-full h-11 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
                  >
                    Update Banking Details
                  </Button>

                  {userType === "creator" && (
                    <div className="pt-4 space-y-3">
                      <h3 className="text-[#1a1a1a]">Payment History</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-[#f3f3f5] rounded-lg">
                          <div>
                            <p className="text-sm text-[#1a1a1a]">October 2025</p>
                            <p className="text-sm text-[rgba(26,26,26,0.6)]">Paid on Oct 5, 2025</p>
                          </div>
                          <p className="text-[#7b20b5]">R 2,450.00</p>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#f3f3f5] rounded-lg">
                          <div>
                            <p className="text-sm text-[#1a1a1a]">September 2025</p>
                            <p className="text-sm text-[rgba(26,26,26,0.6)]">Paid on Sep 5, 2025</p>
                          </div>
                          <p className="text-[#7b20b5]">R 3,120.00</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
