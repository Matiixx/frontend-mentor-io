import React from "react";
import "./Comment.scss";
import UserInfo from "./UserInfo/UserInfo";
import VoteButton from "./VoteButton/VoteButton";

export default function Comment({ commentData, parentCommentUsername }) {
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
              return (
                <Comment
                  key={el.id}
                  commentData={el}
                  parentCommentUsername={commentData.user.username}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
