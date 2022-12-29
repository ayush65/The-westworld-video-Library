/** @format */

import React from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import VideoSidebarCard from "./VideoSidebarCard";
import "./ShowVideo.css";

function VideoSidebar() {
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
    <div className='video-sidebar'>
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
          <VideoSidebarCard
            className='video'
            key={id}
            imgsrc={imgsrc}
            songName={name}
            value={id}
            channelname={channel}
            avatar={channelimg}
            views={views}
            timestamp={timestamp}
            videoid={videoid}
          />
        )
      )}
    </div>
  );
}

export default VideoSidebar;
