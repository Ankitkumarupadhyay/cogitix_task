import { configureStore } from "@reduxjs/toolkit";
import episodeSlice from "./episodeSlice";
import characterSlice from "./characterSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    episode: episodeSlice,
    characters: characterSlice,
    login: loginSlice,
  },
});

export default store;
