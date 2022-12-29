/** @format */

import React from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import HistoryCard from "./HistoryCard";

function HomepageVideos() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "history"), (snapshot) => {
      setvideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className='homepage-videos'>
      <div className='like-component-container playlistcard-video'>
        {videos.length === 0 ? (
          <div className='empty-playlist-container'>
            <h1>You Have No Video in history</h1>
            <img
              src='https://thumbs.gfycat.com/HandsomeGorgeousHorse-max-1mb.gif'
              alt='playlist-gif'
            />
          </div>
        ) : (
          videos.map(
            ({
              id,
              data: {
                name,
                imgsrc,
                channel,
                timestamp,
                avatar,
                views,
                videoid,
              },
            }) => (
              <HistoryCard
                className='video'
                key={id}
                imgsrc={imgsrc}
                songName={name}
                value={id}
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

export default HomepageVideos;
