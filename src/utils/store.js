import { configureStore } from "@reduxjs/toolkit";
import episodeSlice from "./episodeSlice";
import characterSlice from "./characterSlice";

const store = configureStore({
  reducer: {
    episode: episodeSlice,
    characters: characterSlice,
  },
});

export default store;
