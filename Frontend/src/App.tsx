import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import { PlayerProvider } from "./features/player/context/PlayerContext";

const App = () => {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </PlayerProvider>
  );
};
export default App;
