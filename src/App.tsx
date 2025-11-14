import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutTheClimb from "./components/AboutTheClimb";
import Services from "./components/Services";
import ForCreators from "./components/ForCreators";
import ForBrands from "./components/ForBrands";
import ForCourseSellers from "./components/ForCourseSellers";
import HowItWorks from "./components/HowItWorks";
import FeaturedCreators from "./components/FeaturedCreators";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BankingDetails from "./components/BankingDetails";
import Profile from "./components/Profile";
import CreateContent from "./components/CreateContent";
import Dashboard from "./components/Dashboard";
import CreateCompany, { CompanyData } from "./components/CreateCompany";
import CompanyDashboard from "./components/CompanyDashboard";
import CompanyPage from "./components/CompanyPage";
import UGCCampaigns from "./components/UGCCampaigns";
import ClipperCampaigns from "./components/ClipperCampaigns";
import Marketplace from "./components/Marketplace";
import HowItWorksPage from "./components/HowItWorksPage";
import LoadingScreen from "./components/LoadingScreen";

export type Page = 
  | "home" 
  | "marketplace" 
  | "signin" 
  | "signup" 
  | "banking" 
  | "profile" 
  | "createContent" 
  | "dashboard" 
  | "createCompany" 
  | "companyDashboard" 
  | "companyPage" 
  | "howItWorks" 
  | "ugcCampaigns" 
  | "clipperCampaigns";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [userType, setUserType] = useState<"creator" | "brand" | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "",
  });
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: Page) => {
    // Show loading screen
    setIsTransitioning(true);
    
    // Wait for loading animation, then change page
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "instant" });
      
      // Hide loading screen after content loads
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 800);
  };

  const handleSignUpComplete = (type: "creator" | "brand") => {
    setUserType(type);
    navigateTo("banking");
  };

  const handleAuthComplete = () => {
    setIsAuthenticated(true);
    navigateTo("home");
  };

  const handleUpdateProfile = (data: { name: string; email: string; profilePicture: string }) => {
    setUserData(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setUserData({
      name: "John Doe",
      email: "john@example.com",
      profilePicture: "",
    });
    setCompanyData(null);
    navigateTo("home");
  };

  const handleCompanyCreated = (data: CompanyData) => {
    setCompanyData(data);
  };

  return (
    <div className="min-h-screen bg-[#141424]">
      <CustomCursor />
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isTransitioning && <LoadingScreen />}
      </AnimatePresence>
      
      <Header 
        navigateTo={navigateTo} 
        currentPage={currentPage} 
        isAuthenticated={isAuthenticated}
        userData={userData}
        userType={userType}
      />

      {currentPage === "home" && (
        <>
          <Hero navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
          <AboutTheClimb navigateTo={navigateTo} />
          <Services />
          <ForCreators navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
          <ForBrands />
          <ForCourseSellers />
          <HowItWorks navigateTo={navigateTo} />
          <FeaturedCreators />
          <FinalCTA navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
        </>
      )}

      {currentPage === "marketplace" && <Marketplace navigateTo={navigateTo} isAuthenticated={isAuthenticated} />}
      {currentPage === "signin" && <SignIn navigateTo={navigateTo} onSignInComplete={handleAuthComplete} />}
      {currentPage === "signup" && <SignUp navigateTo={navigateTo} onSignUpComplete={handleSignUpComplete} />}
      {currentPage === "banking" && <BankingDetails navigateTo={navigateTo} userType={userType} onComplete={handleAuthComplete} />}
      {currentPage === "profile" && (
        <Profile 
          navigateTo={navigateTo}
          userType={userType}
          userData={userData}
          onUpdateProfile={handleUpdateProfile}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "createContent" && <CreateContent navigateTo={navigateTo} />}
      {currentPage === "dashboard" && <Dashboard navigateTo={navigateTo} />}
      {currentPage === "createCompany" && (
        <CreateCompany navigateTo={navigateTo} onCompanyCreated={handleCompanyCreated} />
      )}
      {currentPage === "companyDashboard" && (
        <CompanyDashboard navigateTo={navigateTo} companyData={companyData} />
      )}
      {currentPage === "companyPage" && (
        <CompanyPage navigateTo={navigateTo} companyData={companyData} />
      )}
      {currentPage === "howItWorks" && <HowItWorksPage navigateTo={navigateTo} />}
      {currentPage === "ugcCampaigns" && <UGCCampaigns navigateTo={navigateTo} isAuthenticated={isAuthenticated} />}
      {currentPage === "clipperCampaigns" && <ClipperCampaigns navigateTo={navigateTo} isAuthenticated={isAuthenticated} />}

      <Footer />
    </div>
  );
}
