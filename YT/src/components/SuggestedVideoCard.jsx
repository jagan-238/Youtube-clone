// src/components/VideoSuggestions.jsx
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function VideoSuggestions() {
  // Get suggested videos from Redux store
  const suggested = useSelector((state) => state.videos.suggested);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      {suggested.map((item) => {
        // Handle YouTube API response format (id can be string or object with videoId)
        const video = item.id.videoId
          ? item
          : { id: item.id, snippet: item.snippet };
        const videoId = video.id.videoId || video.id;

        return (
          <div
            key={videoId}
            className="cursor-pointer flex gap-2"
            onClick={() => navigate(`/video/${videoId}`)}
          >
            {/* Thumbnail */}
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              className="w-32 h-20 rounded"
            />

            {/* Video Info */}
            <div className="flex-1">
              <p className="text-sm font-semibold line-clamp-2">
                {video.snippet.title}
              </p>
              <p className="text-xs text-gray-500">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoSuggestions;
