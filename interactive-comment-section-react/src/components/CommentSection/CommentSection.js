import React, { useId, useState } from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "./Comment/Comment";
import "./CommentSection.scss";

export default function CommentSection({ comments, currentUser }) {
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
                  handleReply={handleReplyClick}
                  replyCommentID={replyCommentID}
                  currentUser={currentUser}
                />
                <AddComment
                  currentUser={currentUser}
                  isReplying={true}
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
              currentUser={currentUser}
              handleReply={handleReplyClick}
              replyCommentID={replyCommentID}
            />
          );
        })}
      <AddComment currentUser={currentUser} isReplying={false} />
    </div>
  );
}
