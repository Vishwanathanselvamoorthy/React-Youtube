import React from "react";

const Video = ({ videos }) => {
  function formatViewsCount(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  }
  return (
    <div className="w-96 my-10 h-68">
      <div>
        <img
          className="rounded-xl"
          src={videos.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
      </div>
      <div className="text-white w-80">
        <h1 className=" font-bold overflow-hidden ">{videos.snippet.title}</h1>
        <h2 className="text-gray-400 text-sm font-semibold">
          {videos.snippet.channelTitle}
        </h2>
        <h3 className="text-gray-400 text-sm font-semibold">
          {formatViewsCount(videos.statistics.viewCount)} views
        </h3>
      </div>
    </div>
  );
};

export default Video;
