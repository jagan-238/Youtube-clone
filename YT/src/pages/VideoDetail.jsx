import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../api/youtube";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideoById(id).then(setVideo);
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title={video.snippet.title}
        allowFullScreen
        className="rounded"
      />
      <h2 className="text-xl font-bold mt-4">{video.snippet.title}</h2>
      <p className="text-gray-600">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
