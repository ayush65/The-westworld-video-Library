/** @format */

import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase";
import { useVideo } from "../Context/VideoContext";
import PlaylistVideosCard from "./PlaylistVideosCard";

function PlaylistVideos() {
  const [posts, setPosts] = useState([]);
  const { statetotal } = useVideo();

  const [playlistvideos] = useState(statetotal.playlistvideo);

  useEffect(() => {
    onSnapshot(collection(db, playlistvideos), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });

  return (
    <div>
      <h1>Playlists Video</h1>
      <div className='playlistcard-video'>
        {posts.length === 0 ? (
          <div className='empty-playlist-container'>
            <h1>No Video in the playlist</h1>
            <img
              src='https://thumbs.gfycat.com/HandsomeGorgeousHorse-max-1mb.gif'
              alt='playlist-gif'
            />
          </div>
        ) : (
          posts.map(
            ({
              id,
              data: {
                songName,
                imgsrc,
                channel,
                avatar,
                timestamp,
                views,
                channelimg,
                videoid,
              },
            }) => (
              <PlaylistVideosCard
                key={id}
                imgsrc={imgsrc}
                value={id}
                songName={songName}
                channelname={channel}
                avatar={avatar}
                views={views}
                timestamp={timestamp}
                videoid={videoid}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default PlaylistVideos;
