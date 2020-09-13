import React from "react";
import VideoItem from "./VideoItem";

// You can destructure instead of using props like below, if we use like this we no need to use props

// const VideoList = ({videos, onVideoSelect}) => {

const VideoList = (props) => {
  //props.videos

  const videos = props.videos.map(function (video) {
    //   Passing video as a prop to the Video Item
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <h1 className="ui relaxed divded list"> {videos} </h1>;
};

export default VideoList;
