// src/features/videos/videoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularVideos, fetchVideoById, fetchSuggestedVideos } from "../../api/youtube";

export const getPopularVideos = createAsyncThunk("videos/getPopular", fetchPopularVideos);
export const getVideoDetails = createAsyncThunk("videos/getDetails", fetchVideoById);
export const getSuggestedVideos = createAsyncThunk("videos/getSuggested", fetchSuggestedVideos);

const videoSlice = createSlice({
  name: "videos",
  initialState: { list: [], current: null, suggested: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.pending, state => { state.loading = true; })
      .addCase(getPopularVideos.fulfilled, (state, action) => { state.list = action.payload; state.loading = false; })
      .addCase(getPopularVideos.rejected, state => { state.loading = false; })
      .addCase(getVideoDetails.fulfilled, (state, action) => { state.current = action.payload; })
      .addCase(getSuggestedVideos.fulfilled, (state, action) => { state.suggested = action.payload; });
  }
});

export default videoSlice.reducer;
