import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import PlaylistVideo from "./PlaylistVideo";
import "./Playlist.css";

function Playlist() {
  return (
    <div className='playlist-container'>
      <Sidebar />
      <PlaylistVideo />
    </div>
  );
}

export default Playlist;
