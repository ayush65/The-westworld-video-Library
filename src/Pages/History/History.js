/** @format */

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./History.css";
import HistoryVideos from "./HistoryVideos";

function History() {
  return (
    <div className='history-container'>
      <Sidebar />
      <HistoryVideos />
    </div>
  );
}

export default History;
