import { Page } from "../App";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PlusCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
  isAuthenticated: boolean;
  userData: {
    name: string;
    email: string;
    profilePicture: string;
  };
  userType?: "creator" | "brand" | null;
}

export default function Header({ navigateTo, currentPage, isAuthenticated, userData, userType }: HeaderProps) {
  const getInitials = () => {
    return userData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const isHomePage = currentPage === "home";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-[#F2F2F4]/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <motion.button 
            onClick={() => navigateTo("home")}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="../assets/035a2d6638b6203d9a9cf60b4103d1195cb5d299.png" 
              alt="Kairo" 
              className="w-[250px] h-[150px] object-contain"
            />
          </motion.button>
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigateTo("home")}
              className={`text-sm transition-colors ${isHomePage ? "text-[#6C3FAF]" : "text-[#F2F2F4]/70 hover:text-[#F2F2F4]"}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo("marketplace")}
              className={`text-sm transition-colors ${currentPage === "marketplace" ? "text-[#6C3FAF]" : "text-[#F2F2F4]/70 hover:text-[#F2F2F4]"}`}
            >
              Discover
            </button>
            <button 
              className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors"
            >
              Sell
            </button>
            <button 
              className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors"
            >
              For Brands
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!isAuthenticated && (
            <>
              <motion.button 
                onClick={() => navigateTo("signin")}
                className="text-sm text-[#F2F2F4]/90 hover:text-[#F2F2F4] transition-colors px-4 py-2 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In / Sign Up
              </motion.button>
              <motion.button 
                onClick={() => navigateTo("signup")}
                className="px-6 py-2.5 text-sm gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(108, 63, 175, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.span
                  animate={{ y: [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Start Selling
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </>
          )}
          {isAuthenticated && (
            <>
              {userType === "creator" && (
                <motion.button 
                  onClick={() => navigateTo("createContent")}
                  className="px-6 py-2.5 text-sm gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(108, 63, 175, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <PlusCircle className="w-4 h-4" />
                  </motion.div>
                  Create Content
                </motion.button>
              )}
              {userType === "brand" && (
                <motion.button 
                  onClick={() => navigateTo("marketplace")}
                  className="px-6 py-2.5 text-sm gradient-primary text-[#F2F2F4] rounded-[20px] shadow-kairo"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(108, 63, 175, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Find Creators
                </motion.button>
              )}
              <motion.button
                onClick={() => navigateTo("profile")}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Avatar className="w-9 h-9 border-2 border-[#6C3FAF]">
                  <AvatarImage src={userData.profilePicture} alt={userData.name} />
                  <AvatarFallback className="bg-[#6C3FAF] text-[#F2F2F4] text-sm">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
