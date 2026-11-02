import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import { PlayerProvider } from "./features/player/context/PlayerContext";
import Auth from "./Pages/AuthPage";
import ArtistProfile from "./Pages/ArtistProfile";
import ArtistDashboardPage from "./features/artist-dashboard/pages/ArtistDashboardPage";

const App = () => {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/dashboard" element={<ArtistDashboardPage />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
        </Routes>
      </Router>
    </PlayerProvider>
  );
};

export default App;
