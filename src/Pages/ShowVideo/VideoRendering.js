/** @format */

import React from "react";
import ShowVideo from "./ShowVideo";
import "./ShowVideo.css";
import VideoSidebar from "./VideoSidebar";

function VideoRendering() {
  return (
    <div className='video-rendering'>
      <ShowVideo />
      <VideoSidebar />
    </div>
  );
}

export default VideoRendering;
