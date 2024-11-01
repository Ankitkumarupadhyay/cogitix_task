import { createSlice } from "@reduxjs/toolkit";

const episodeSlice = createSlice({
  name: "episode",
  initialState: {
    totalEpisodes: [],
    selectedEpisodeName: "All",
  },
  reducers: {
    setEpisodes: (state, action) => {
      state.totalEpisodes = action.payload;
    },

    setSelectedEpisodeName: (state, action) => {
      state.selectedEpisodeName = action.payload;
    },
  },
});

export const { setEpisodes, setSelectedEpisodeName } = episodeSlice.actions;

export default episodeSlice.reducer;
