import React, { useState } from "react";
import "./AddComment.scss";

export default function AddComment({
  currentUser,
  isReplying,
  addCommentHandle,
}) {
  const [newComment, setNewComment] = useState("");

  const handleTextAreaChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment) {
      return;
    }
    if (isReplying) {
      setNewComment("");
    }
    if (!isReplying) {
      addCommentHandle(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="new-comment-container">
      <div className="user-info">
        {currentUser && (
          <img src={`${currentUser.image.png}`} alt="profile-logo" />
        )}
      </div>
      <div className="text-area-container">
        <textarea
          value={newComment}
          onChange={handleTextAreaChange}
          placeholder="Add a comment..."
        />
      </div>
      <div className="send-btn">
        <button onClick={handleSubmit}>{isReplying ? "Reply" : "Send"}</button>
      </div>
    </div>
  );
}
