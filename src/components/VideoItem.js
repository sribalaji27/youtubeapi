import "./VideoItem.css";
import React from "react";

// const VideoItem = (props) => {
//Destructuring.. No need to use props all the time in our code. Instead of props.videos, we put like this.
const VideoItem = ({ video, onVideoSelect }) => {
  console.table(video);
  console.log(video.snippet.thumbnails.medium.url);
  return (
    // Add a event handler when someone click on a particular video to call a callback function with THAT VIDEO .. SO we used arrow function along with the video argument over belwo
    // Then only App or VideoList component will get that video to render onto the screen
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
