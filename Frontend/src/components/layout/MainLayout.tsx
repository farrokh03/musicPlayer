import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import SideMenu from "./SideMenu";
import { useState } from "react";
import { GlobalMiniPlayer } from "./GlobalMiniPlayer";
import Queue from "./queue";
import ListeningActivity from "./ListeningActivity";
import RecentlyPlayed from "./Recent";
const MainLayout = () => {
  const [railOpen, setRailOpen] = useState(true);
  const [playlistOpen, setPlaylistOpen] = useState(false);

  return (
    <>
      <GlobalHeader />
      <div
        className={`app-shell ${railOpen ? "rail-expanded" : ""}  grid-cols-3 gap-1`}
      >
        <SideMenu
          menu={railOpen}
          setMenu={setRailOpen}
          playlistOpen={setPlaylistOpen}
        />
        <Outlet />
        <div className="col-start-3 w-90 px-2 py-1 flex gap-2 flex-col">
          <GlobalMiniPlayer
            playlistopen={playlistOpen}
            setplaylistopen={setPlaylistOpen}
          />
          <Queue />
          <ListeningActivity />
          <RecentlyPlayed />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
