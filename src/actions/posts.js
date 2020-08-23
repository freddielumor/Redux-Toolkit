import axios from "axios";
import { POSTS_URL } from "../utils/apiConfig";

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export function getPostsRequest() {
  return {
    type: GET_POSTS_REQUEST,
  };
}

export function getPostsSuccess(payload) {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
}

export function getPostsError(payload) {
  return {
    type: GET_POSTS_ERROR,
    payload,
  };
}

export function getPosts() {
  return async (dispatch) => {
    dispatch(getPostsRequest());

    const response = await axios.get(POSTS_URL);
    console.log({ response });

    if (response.status !== 200) {
      dispatch(getPostsError(response.statusText));
      return;
    }

    dispatch(getPostsSuccess(response.data));
  };
}
