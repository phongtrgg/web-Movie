import { createSlice, configureStore } from "@reduxjs/toolkit";

const pageState = { page: 1 };
const pageSlice = createSlice({
  name: "page",
  initialState: pageState,
  reducers: {
    ON_UP(state) {
      state = state.page++;
    },
    ON_DOWN(state) {
      state = state.page--;
    },
    ON_RS(state) {
      state = state.page = 1;
    },
  },
});
//
const videoState = { video: [], show: false };
const videoSlice = createSlice({
  name: "video",
  initialState: videoState,
  reducers: {
    ON_ADD(state, payload) {
      state.video = payload.payload;
    },
    ON_SHOW(state) {
      state.show = true;
    },
    ON_OFF(state) {
      state.show = false;
    },
  },
});

const store = configureStore({
  reducer: { page: pageSlice.reducer, video: videoSlice.reducer },
});
export const videoAction = videoSlice.actions;
export const pageAction = pageSlice.actions;
export default store;
