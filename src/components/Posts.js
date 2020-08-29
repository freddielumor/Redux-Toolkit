import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getAllPosts } from "../redux/postsSlice";
import PostCard from "./PostCard";
import "./Posts.scss";

const Posts = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(getAllPosts) || [];

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="posts">
      <h2>POSTS</h2>
      <div className="posts__content">
        {allPosts.map(({ id, title, body }) => {
          return <PostCard key={id} title={title} body={body} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
