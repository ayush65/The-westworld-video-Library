/** @format */

import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./RecommendedVideos.css";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";

function RecommendedVideos() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "videos"), (snapshot) => {
      setvideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className='recommendedvideo-container'>
      <h2>Recommended</h2>
      <div className='recommended-video'>
        {videos.map(
          ({
            id,
            data: {
              name,
              imgsrc,
              channel,
              timestamp,
              views,
              channelimg,
              videoid,
            },
          }) => (
            <VideoCard
              className='video-reccomened'
              key={id}
              imgsrc={imgsrc}
              songName={name}
              channelname={channel}
              avatar={channelimg}
              views={views}
              timestamp={timestamp}
              videoid={videoid}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
