import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    totalcharacters: [],
    showingEpisodeCharacters: false,
    apiPage: 1,
  },
  reducers: {
    setCharacters: (state, action) => {
      state.totalcharacters = action.payload;
    },
    setshowingEpisodeCharacters: (state, action) => {
      state.showingEpisodeCharacters = action.payload;
    },
    increaseApiPage: (state) => {
      state.apiPage = state.apiPage + 1;
    },
    decreaseApiPage: (state) => {
      state.apiPage = state.apiPage - 1;
    },
  },
});

export const {
  setCharacters,
  setshowingEpisodeCharacters,
  increaseApiPage,
  decreaseApiPage,
} = characterSlice.actions;

export default characterSlice.reducer;
