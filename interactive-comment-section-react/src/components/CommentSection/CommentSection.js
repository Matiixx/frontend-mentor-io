import React from "react";
import Comment from "./Comment/Comment";
import "./CommentSection.scss";

export default function CommentSection({ comments }) {
  return (
    <div className="comment-section">
      {comments &&
        comments.map((el) => {
          return <Comment key={el.id} commentData={el} />;
        })}
    </div>
  );
}
