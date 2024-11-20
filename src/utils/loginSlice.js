import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    changeLogin: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { changeLogin } = loginSlice.actions;

export default loginSlice.reducer;
