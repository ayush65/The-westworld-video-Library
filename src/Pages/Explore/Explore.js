import React from "react";
import RecommendedVideos from "../Recommendedvideos/RecommendedVideos";
import "./Explore.css";
import Sidebar from "../Sidebar/Sidebar";

function Explore() {
  return (
    <div className='explore-components'>
      <Sidebar />
      <RecommendedVideos />
    </div>
  );
}

export default Explore;
