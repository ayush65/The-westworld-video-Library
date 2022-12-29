/** @format */

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import db from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import "../Playlist/Playlist.css";

function HistoryCard({
  id,
  imgsrc,
  value,
  avatar,
  songName,
  channelname,
  views,
  timestamp,
}) {
  const handleDelete = async (idle) => {
    toast.dark("video deleted from History");
    const docRef = doc(db, "history", idle);
    await deleteDoc(docRef);
  };
  return (
    <div>
      <div className='playlist-videocard-container-'>
        <ToastContainer />
        <img src={imgsrc} alt='playlists-img' className='playlist-img-' />
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

export default HistoryCard;
