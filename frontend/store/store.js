import { createSlice, configureStore } from "@reduxjs/toolkit";
//
const showVideoState = { showVideo: false };
const showVideoSlice = createSlice({
  name: "showVideo",
  initialState: showVideoState,
  reducers: {
    ON_SHOW(state) {
      state.showVideo = !state.showVideo;
    },
  },
});
const store = configureStore({
  reducer: { showVideo: showVideoSlice.reducer },
});
export const showVideoAction = showVideoSlice.actions;
export default store;
