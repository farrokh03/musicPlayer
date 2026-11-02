import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import { PlayerProvider } from "./features/player/context/PlayerContext";
import Auth from "./Pages/AuthPage";
import ArtistProfile from "./Pages/ArtistProfile";
const App = () => {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
        </Routes>
      </Router>
    </PlayerProvider>
  );
};
export default App;
