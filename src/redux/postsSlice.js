import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_URL } from "../utils/apiConfig";

// Get Post Data
export const getPosts = createAsyncThunk("posts/get", async () => {
  const response = await axios.get(`${POSTS_URL}`);
  return response.data;
});

// Reducer
const { reducer } = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => state,
    [getPosts.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default reducer;

// Selectors
export const getAllPosts = (state) => state.posts.allPosts;
