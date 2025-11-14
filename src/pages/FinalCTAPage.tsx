import FinalCTA from "../components/FinalCTA";
import { Page } from "../App";

interface FinalCTAPageProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

export default function FinalCTAPage({ navigateTo, isAuthenticated }: FinalCTAPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <FinalCTA navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
    </div>
  );
}
