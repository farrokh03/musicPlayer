import MusicDashboard from "../components/ui/MusicDashboard";
import ArtistHeroSlider from "../components/ui/Slider";
import ArtistNavigation from "../features/components/ArtistNavigation";
import type { ArtistTab } from "../features/components/ArtistNavigation";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<ArtistTab>("Overview");
  return (
    <div className="p-2">
      <ArtistHeroSlider />
      <ArtistNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sticky
      />
      <MusicDashboard />
    </div>
  );
};
export default HomePage;
