import React, { useId, useState } from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "./Comment/Comment";
import "./CommentSection.scss";

export default function CommentSection({
  comments,
  currentUser,
  addCommentHandle,
  isCurrentUser,
  deleteHandle,
  addNewReply,
}) {
  const [replyCommentID, setReplyCommentID] = useState(0);

  const replyComponentID = useId();

  const handleReplyClick = (id) => {
    setReplyCommentID(id);
  };

  return (
    <div className="comment-section">
      {comments &&
        comments.map((el) => {
          if (replyCommentID && replyCommentID === el.id) {
            return (
              <>
                <Comment
                  key={el.id}
                  commentData={el}
                  isCurrentUser={isCurrentUser}
                  deleteHandle={deleteHandle}
                  handleReply={handleReplyClick}
                  replyCommentID={replyCommentID}
                  addCommentHandle={addCommentHandle}
                  addNewReply={addNewReply}
                  currentUser={currentUser}
                />
                <AddComment
                  currentUser={currentUser}
                  isReplying={true}
                  addNewReply={addNewReply}
                  key={replyComponentID}
                  parentCommentID={el.id}
                />
              </>
            );
          }
          return (
            <Comment
              key={el.id}
              commentData={el}
              isCurrentUser={isCurrentUser}
              deleteHandle={deleteHandle}
              currentUser={currentUser}
              addCommentHandle={addCommentHandle}
              addNewReply={addNewReply}
              handleReply={handleReplyClick}
              replyCommentID={replyCommentID}
            />
          );
        })}
      <AddComment
        currentUser={currentUser}
        isReplying={false}
        addCommentHandle={addCommentHandle}
      />
    </div>
  );
}
