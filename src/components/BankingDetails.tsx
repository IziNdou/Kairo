import { useState } from "react";
import { Page } from "../App";
import { CreditCard, Lock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface BankingDetailsProps {
  navigateTo: (page: Page) => void;
  userType: "creator" | "brand" | null;
  onComplete: () => void;
}

export default function BankingDetails({ navigateTo, userType, onComplete }: BankingDetailsProps) {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    accountType: "",
    branchCode: "",
  });

  const southAfricanBanks = [
    "ABSA Bank",
    "Standard Bank",
    "First National Bank (FNB)",
    "Nedbank",
    "Capitec Bank",
    "African Bank",
    "Investec",
    "Discovery Bank",
    "TymeBank",
    "Bank Zero",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Banking details submitted:", formData);
    // Simulate successful submission
    alert("Account setup complete! Welcome to Kairo.");
    onComplete();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkip = () => {
    if (confirm("You can add banking details later in your profile settings. Continue?")) {
      onComplete();
    }
  };

  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#f8f8fa] to-[#7b20b5]/5">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <button
          onClick={() => navigateTo("signup")}
          className="flex items-center gap-2 text-[rgba(26,26,26,0.6)] hover:text-[#7b20b5] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign Up
        </button>

        <div className="bg-black rounded-2xl shadow-lg p-8 space-y-6 border border-white/10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6C3FAF]/10 mb-2">
              <CreditCard className="w-8 h-8 text-[#6C3FAF]" />
            </div>
            <h1 className="text-white">Add Banking Details</h1>
            <p className="text-white/60">
              {userType === "creator"
                ? "Set up your payment details to receive earnings from your content"
                : "Add your payment method for brand partnerships and campaigns"}
            </p>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-3 p-4 bg-[#6C3FAF]/10 rounded-xl border border-[#6C3FAF]/20">
            <Lock className="w-5 h-5 text-[#6C3FAF] mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm text-white">Your information is secure</p>
              <p className="text-sm text-white/60">
                Your banking details are encrypted and will only be used for payments. We never share your information.
              </p>
            </div>
          </div>

          {/* Banking Details Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="accountHolderName">Account Holder Name</Label>
              <Input
                id="accountHolderName"
                type="text"
                placeholder="Full name as it appears on your account"
                value={formData.accountHolderName}
                onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
                className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name</Label>
              <Select
                value={formData.bankName}
                onValueChange={(value) => handleInputChange("bankName", value)}
                required
              >
                <SelectTrigger className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]">
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
                <SelectContent>
                  {southAfricanBanks.map((bank) => (
                    <SelectItem key={bank} value={bank}>
                      {bank}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  type="text"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                  className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountType">Account Type</Label>
                <Select
                  value={formData.accountType}
                  onValueChange={(value) => handleInputChange("accountType", value)}
                  required
                >
                  <SelectTrigger className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cheque">Cheque/Current</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="transmission">Transmission</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="branchCode">Branch Code</Label>
              <Input
                id="branchCode"
                type="text"
                placeholder="6-digit branch code"
                value={formData.branchCode}
                onChange={(e) => handleInputChange("branchCode", e.target.value)}
                className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#7b20b5]"
                maxLength={6}
                required
              />
              <p className="text-sm text-[rgba(26,26,26,0.6)]">
                Find your branch code on your bank statement or app
              </p>
            </div>

            {/* Payment Benefits */}
            <div className="bg-[#FFD700]/10 rounded-xl p-4 space-y-2 border border-[#FFD700]/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7b20b5]" />
                <span className="text-sm">Instant payment processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7b20b5]" />
                <span className="text-sm">Secure and encrypted transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7b20b5]" />
                <span className="text-sm">Automatic withdrawals to your account</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-11"
                onClick={handleSkip}
              >
                Skip for Now
              </Button>
              <Button
                type="submit"
                className="flex-1 h-11 bg-[#7b20b5] hover:bg-[#6a1ca0] text-white"
              >
                Complete Setup
              </Button>
            </div>
          </form>

          {/* Help Text */}
          <p className="text-center text-sm text-[rgba(26,26,26,0.6)]">
            Need help?{" "}
            <a href="#" className="text-[#7b20b5] hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
