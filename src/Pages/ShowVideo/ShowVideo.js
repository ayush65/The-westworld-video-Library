/** @format */

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./ShowVideo.css";
import { AiFillLike } from "react-icons/ai";
import { useVideo } from "../Context/VideoContext";
import { Link } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../firebase";
import uuid from "react-uuid";

function ShowVideo() {
  const { statetotal } = useVideo();

  console.log(statetotal.count);
  console.log(statetotal.imgsrc);

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [playlistmodal, setplaylistmodal] = useState(false);

  const toggleplaylistModal = () => {
    setplaylistmodal(!playlistmodal);
  };
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "playlist"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendpost = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "playlist", uuid());
    const payload = {
      name: input,
      imgsrc: statetotal.imgsrc,
    };
    await setDoc(docRef, payload);
    setInput("");
    toast.dark("Playlist created");
  };

  const handlechange = (e) => {
    const { value } = e.target;
    const docRef = doc(db, value, uuid());
    const payload = {
      imgsrc: statetotal.imgsrc,
      avatar: statetotal.avatar,
      songName: statetotal.songName,
      channelname: statetotal.channelname,
      views: statetotal.views,
      timestamp: statetotal.timestamp,
    };
    setDoc(docRef, payload);
    toast.dark("Added to Playlist");
  };

  const handleLikechange = () => {
    const docRef = doc(db, "like", uuid());
    const payload = {
      imgsrc: statetotal.imgsrc,
      avatar: statetotal.avatar,
      songName: statetotal.songName,
      channelname: statetotal.channelname,
      views: statetotal.views,
      timestamp: statetotal.timestamp,
    };
    setDoc(docRef, payload);
    toast.dark("Video is been Liked");
  };

  return (
    <div className='show-video-container'>
      <Link to='/' className='text btn-margin-youtube'>
        Back
      </Link>
      <div>
        <YouTube videoId={statetotal.count} opts={opts} />
        <div className='video-container'>
          <div onClick={handleLikechange}>
            <AiFillLike /> Like
          </div>
          <div onClick={toggleplaylistModal}>
            <MdPlaylistAdd /> Add To Playlist
          </div>
        </div>
      </div>

      {playlistmodal && (
        <div className='modal-container'>
          <div className='overlays'></div>
          <div className='modal-contents'>
            <div className='modal-header-icon'>
              <AiFillCloseCircle />
              <p>Close</p>
            </div>
            <div className='modala'>
              <div className='overlay'></div>
              <div className='modal-content'>
                <h2>Playlists</h2>
                <form>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                  />
                  <button
                    onClick={sendpost}
                    type='submit'
                    className='create-button'>
                    create playlist
                  </button>
                </form>

                <button className='close-modal' onClick={toggleplaylistModal}>
                  CLOSE <AiFillCloseCircle />
                </button>
                {posts.map(({ id, data: { name } }) => (
                  <div className='addtoplaylist-container' key={id}>
                    <input
                      type='checkbox'
                      className='addtoplaylist-input'
                      name='db-names'
                      value={name}
                      id='flexCheckDefault'
                      onChange={handlechange}></input>
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default ShowVideo;
