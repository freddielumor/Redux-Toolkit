import React from "react";
import "./PostCard.scss";

export default function PostCard({ title, body }) {
  return (
    <div className="postCard">
      <div className="postCard__inner">
        <h4 className="postCard__title">{title}</h4>
        <hr className="postCard__divider" />
        <p className="postCard__body">{body}</p>
      </div>
    </div>
  );
}
