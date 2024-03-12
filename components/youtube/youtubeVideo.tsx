import React from "react";

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-200 overflow-hidden rounded-2xl relative">
      <iframe
        width="full" // Width of the embedded video
        height="315" // Height of the embedded video
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
