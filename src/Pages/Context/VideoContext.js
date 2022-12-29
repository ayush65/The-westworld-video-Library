import { createContext, useContext, useReducer } from "react";
import { reducerFunc, initialstate } from "../VideoCard/VideoCard";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [statetotal, stateDispatch] = useReducer(reducerFunc, initialstate);

  return (
    <VideoContext.Provider value={{ statetotal, stateDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo, VideoContext };
