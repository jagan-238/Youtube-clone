import { useEffect, useState } from "react";
import { fetchVideos } from "../api/youtube";
import { Link } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos("React tutorials").then(setVideos);
  }, []);

  return (
    <div className="px-6 py-4">
      {/* Responsive grid like YouTube */}
      <div className="grid gap-6 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {videos.map((video) => (
          <Link to={`/video/${video.id.videoId}`} key={video.id.videoId}>
            <div className="group cursor-pointer">
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Video Info */}
              <div className="mt-3 flex gap-3">
                {/* Channel avatar placeholder (like YouTube) */}
                <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold line-clamp-2 text-gray-900">
                    {video.snippet.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {video.snippet.channelTitle}
                  </p>
                  <p className="text-xs text-gray-500">1M views • 2 days ago</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
