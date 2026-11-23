import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MusicDashboard from "../components/ui/MusicDashboard";
import ArtistHeroSlider from "../components/ui/Slider";
import ArtistNavigation from "../features/components/ArtistNavigation";
import type { ArtistTab } from "../features/components/ArtistNavigation";

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ArtistTab>("Overview");

  const handleArtistClick = useCallback(
    (artistId: string) => {
      navigate(`/artistProfile?artist=${encodeURIComponent(artistId)}`);
    },
    [navigate],
  );

  return (
    <div className="p-2">
      <ArtistHeroSlider onArtistClick={handleArtistClick} />
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
