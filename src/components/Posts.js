import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { getStorePosts } from "../selectors/index";

const Posts = () => {
  //   const allPosts = useSelector(getStorePosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <h2>POSTS</h2>;
};

export default Posts;
