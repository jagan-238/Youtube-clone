import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

// ✅ Axios instance
const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

// ✅ Get Popular Videos (Homepage)
export const getPopularVideos = async () => {
  try {
    const res = await youtube.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN", // Change region if you want
        maxResults: 20,
      },
    });
    return res.data.items;
  } catch (err) {
    console.error("Error fetching popular videos:", err);
    return [];
  }
};

// ✅ Search Videos
export const searchVideos = async (query) => {
  try {
    const res = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: query,
        type: "video",
      },
    });
    return res.data.items;
  } catch (err) {
    console.error("Error searching videos:", err);
    return [];
  }
};

// ✅ Get Video Details by ID
export const getVideoDetails = async (id) => {
  try {
    const res = await youtube.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
      },
    });
    return res.data.items[0];
  } catch (err) {
    console.error("Error fetching video details:", err);
    return null;
  }
};

// ✅ Get Related Videos
export const getRelatedVideos = async (id) => {
  try {
    const res = await youtube.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        type: "video",
        maxResults: 15,
      },
    });
    return res.data.items;
  } catch (err) {
    console.error("Error fetching related videos:", err);
    return [];
  }
};
