import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;
