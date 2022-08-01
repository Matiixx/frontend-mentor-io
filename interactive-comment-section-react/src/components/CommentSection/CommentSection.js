import React from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "./Comment/Comment";
import "./CommentSection.scss";

export default function CommentSection({
  comments,
  currentUser,
  addCommentHandle,
}) {
  return (
    <div className="comment-section">
      {comments &&
        comments.map((el) => {
          return <Comment key={el.id} commentData={el} />;
        })}
      <AddComment
        currentUser={currentUser}
        isReplying={false}
        addCommentHandle={addCommentHandle}
      />
    </div>
  );
}
