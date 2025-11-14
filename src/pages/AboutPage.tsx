import AboutTheClimb from "../components/AboutTheClimb";
import { Page } from "../App";

interface AboutPageProps {
  navigateTo: (page: Page) => void;
}

export default function AboutPage({ navigateTo }: AboutPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AboutTheClimb navigateTo={navigateTo} />
    </div>
  );
}
