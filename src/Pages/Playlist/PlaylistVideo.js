/** @format */

import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase";
import PlaylistCard from "./PlaylistCard";
import "./Playlist.css";

function PlaylistVideo() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "playlist"), (snapshot) => {
      setPlaylist(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className='playlistvideo-contain'>
      {playlist.length === 0 ? (
        <div className='empty-playlist-container'>
          <h1>The playlist is empty</h1>
          <img
            src='https://thumbs.gfycat.com/HandsomeGorgeousHorse-max-1mb.gif'
            alt='playlist-gif'
          />
        </div>
      ) : (
        playlist.map(({ id, data: { name, imgsrc } }) => (
          <PlaylistCard key={id} value={id} name={name} imgsrc={imgsrc} />
        ))
      )}
    </div>
  );
}

export default PlaylistVideo;
