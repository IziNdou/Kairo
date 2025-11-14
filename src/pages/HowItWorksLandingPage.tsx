import HowItWorks from "../components/HowItWorks";
import { Page } from "../App";

interface HowItWorksLandingPageProps {
  navigateTo: (page: Page) => void;
}

export default function HowItWorksLandingPage({ navigateTo }: HowItWorksLandingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <HowItWorks navigateTo={navigateTo} />
    </div>
  );
}
