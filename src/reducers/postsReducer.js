import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from "../actions/posts";

const initialState = {
  posts: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
