import Hero from "../components/Hero";
import ScrollHint from "../components/ScrollHint";
import { Page } from "../App";

interface HeroPageProps {
  navigateTo: (page: Page) => void;
  isAuthenticated: boolean;
}

export default function HeroPage({ navigateTo, isAuthenticated }: HeroPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Hero navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
      <ScrollHint />
    </div>
  );
}
