import ForCreators from "../components/ForCreators";
import { Page } from "../App";

interface ForCreatorsPageProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

export default function ForCreatorsPage({ navigateTo, isAuthenticated }: ForCreatorsPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ForCreators navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
    </div>
  );
}
