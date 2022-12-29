/** @format */

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Explore,
  History,
  Homepage,
  Like,
  Login,
  Playlist,
  PlaylistVideos,
  VideoRendering,
  Signup,
  WatchLater,
} from "../index";

function AllRoutes() {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "[]"));

  return (
    <div>
      <Routes>
        <Route
          path='/history'
          element={!user ? <Login /> : <History />}></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route
          path='/watchlater'
          element={!user ? <Login /> : <WatchLater />}></Route>
        <Route path='/like' element={!user ? <Login /> : <Like />}></Route>
        <Route
          path='/playlistvideos'
          element={!user ? <Login /> : <PlaylistVideos />}></Route>
        <Route
          path='/playlist'
          element={!user ? <Login /> : <Playlist />}></Route>
        <Route
          path='/showvideo'
          element={!user ? <Login /> : <VideoRendering />}></Route>
        <Route
          path='/explore'
          element={!user ? <Login /> : <Explore />}></Route>
        <Route
          path='/homepage'
          element={!user ? <Login /> : <Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
