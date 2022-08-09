import React, { useId } from "react";
import AddComment from "../../AddComment/AddComment";
import "./Comment.scss";
import UserInfo from "./UserInfo/UserInfo";
import VoteButton from "./VoteButton/VoteButton";

export default function Comment({
  commentData,
  parentCommentUsername,
  handleReply,
  replyCommentID,
  currentUser,
}) {
  const randID = useId();

  return (
    <>
      <div className="comment-container">
        <div className="comment">
          <div className="votes-container">
            <VoteButton score={commentData.score} />
          </div>
          <div className="comment-content">
            <UserInfo
              user={commentData.user}
              createdAt={commentData.createdAt}
              commentID={commentData.id}
              handleReplyClick={handleReply}
            />
            <div className="comment-body">
              <p>
                {parentCommentUsername && (
                  <span className="nickname-highlight">
                    {"@"}
                    {parentCommentUsername}{" "}
                  </span>
                )}
                {commentData.content}
              </p>
            </div>
          </div>
        </div>

        <div className="reply-container">
          {commentData.replies &&
            commentData.replies !== [] &&
            commentData.replies.map((el) => {
              if (replyCommentID && replyCommentID === el.id) {
                return (
                  <>
                    <Comment
                      key={el.id}
                      commentData={el}
                      handleReply={handleReply}
                      replyCommentID={replyCommentID}
                    />
                    <AddComment
                      currentUser={currentUser}
                      isReplying={true}
                      key={randID}
                      parentCommentID={el.id}
                    />
                  </>
                );
              }
              return (
                <Comment
                  key={el.id}
                  commentData={el}
                  parentCommentUsername={commentData.user.username}
                  handleReply={handleReply}
                  replyCommentID={replyCommentID}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
