/** @format */

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./WatchLater.css";
import WatchLaterVideos from "./WatchLaterVideos";

function WatchLater() {
  return (
    <div className='watchlater'>
      <Sidebar />
      <WatchLaterVideos />
    </div>
  );
}

export default WatchLater;
