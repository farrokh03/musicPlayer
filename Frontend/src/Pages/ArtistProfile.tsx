import { useState } from "react";
import ArtistHeroSlider from "../components/ui/Slider";
import ArtistNavigation, {
  type ArtistTab,
} from "../features/components/ArtistNavigation";
import GlobalHeader from "../components/layout/GlobalHeader";
const ArtistProfile = () => {
  const [activeTab, setActiveTab] = useState<ArtistTab>("Overview");
  return (
    <div>
      <GlobalHeader />
      <ArtistHeroSlider />
      <ArtistNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sticky
      />
    </div>
  );
};
export default ArtistProfile;
