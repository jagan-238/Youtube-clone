import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 20,
      q: query,
      type: "video",
      key: API_KEY,
    },
  });
  return data.items;
};

export const fetchVideoById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: "snippet,statistics",
      id,
      key: API_KEY,
    },
  });
  return data.items[0];
};
