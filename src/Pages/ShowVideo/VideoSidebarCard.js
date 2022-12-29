/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useVideo } from "../Context/VideoContext";
import "../Playlist/Playlist.css";
import "./ShowVideo.css";

function VideoSidebarCard({
  id,
  imgsrc,
  avatar,
  songName,
  videoid,
  channelname,
  views,
  timestamp,
}) {
  const { stateDispatch } = useVideo();

  return (
    <div className='video-sidebar-card'>
      <img src={imgsrc} alt='playlists-img' className='playlist-img' />
      <Link
        to='/showvideo'
        onClick={() => {
          stateDispatch({ type: "videoshow", payload: videoid });
          stateDispatch({
            type: "videoshowimg",
            payload: imgsrc,
          });
          stateDispatch({
            type: "videoSongname",
            payload: songName,
          });
          stateDispatch({
            type: "videoviews",
            payload: views,
          });
          stateDispatch({
            type: "videochannelName",
            payload: channelname,
          });
          stateDispatch({
            type: "videoAvatar",
            payload: avatar,
          });
          stateDispatch({
            type: "videoTimestamp",
            payload: timestamp,
          });
        }}
        className='text watch-now-button '>
        Watch Now
      </Link>
      <div className='video-info'>
        <div className='videocard-header'>
          <img src={avatar} alt={id} className='video-avatar' />
          <h2>{songName}</h2>
        </div>
        <p className='channel-name'>{channelname}</p>
        <div className='video-card-footer'>
          <p className='footer-margin '>{views}</p>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSidebarCard;
