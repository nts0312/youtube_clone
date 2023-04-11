import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
          />

          {video?.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
