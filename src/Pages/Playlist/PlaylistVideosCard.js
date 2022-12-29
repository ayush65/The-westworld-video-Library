/** @format */

import React, { useState } from "react";
import "../VideoCard/VideoCard.css";
import "./Playlist.css";
import db from "../../firebase";
import { MdDelete } from "react-icons/md";
import { useVideo } from "../Context/VideoContext";
import { deleteDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PlaylistVideosCard({
  id,
  imgsrc,
  value,
  avatar,
  songName,
  channelname,
  views,
  timestamp,
}) {
  const { statetotal } = useVideo();

  const [playlists] = useState(statetotal.playlistvideo);

  const handleDelete = async (idle) => {
    toast.dark("video deleted from playlist");
    const docRef = doc(db, playlists, idle);
    await deleteDoc(docRef);
  };

  return (
    <div>
      <div className='playlist-videocard-container-'>
        <ToastContainer />
        <img src={imgsrc} alt='playlists-img-' className='playlist-img-' />
        <div className='video-info'>
          <div className='videocard-header'>
            <img src={avatar} alt='alt' className='video-avatar' />
            <h2>{songName}</h2>
          </div>
          <p className='channel-name'>{channelname}</p>
          <div className='video-card-footer'>
            <p className='footer-margin '>{views}</p>
            <p>{timestamp}</p>
          </div>
        </div>
        <div
          className='delete-icon-'
          onClick={() => {
            handleDelete(value);
          }}>
          <h5>
            <MdDelete />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PlaylistVideosCard;
