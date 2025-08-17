// src/components/VideoCard.jsx
import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
  const navigate = useNavigate();

  // Extract necessary properties
  const { id, snippet, statistics } = video;
  const videoId = id?.videoId || id; // For search vs detail API responses

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/video/${videoId}`)}
    >
      {/* Thumbnail */}
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt={snippet?.title}
        className="w-full rounded"
      />

      {/* Title */}
      <h2 className="mt-2 font-semibold text-sm line-clamp-2">
        {snippet?.title}
      </h2>

      {/* Published Date */}
      <p className="text-xs text-gray-500">
        {new Date(snippet?.publishedAt).toLocaleDateString()}
      </p>

      {/* Stats (optional because statistics is missing in search results) */}
      {statistics && (
        <p className="text-xs text-gray-500">
          {Number(statistics.viewCount).toLocaleString()} views •{" "}
          {Number(statistics.likeCount || 0).toLocaleString()} likes
        </p>
      )}
    </div>
  );
}

export default VideoCard;
