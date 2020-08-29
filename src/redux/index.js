import { combineReducers } from "redux";
import postsSliceReducer from "./postsSlice";

export default combineReducers({
  posts: postsSliceReducer,
});
