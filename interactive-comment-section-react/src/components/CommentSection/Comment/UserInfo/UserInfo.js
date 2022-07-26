import React from "react";
import useStore from "../../../../store/useStore";
import "./UserInfo.scss";

export default function UserInfo({
  user,
  createdAt,
  commentID,
  handleReplyClick,
}) {
  const deleteHandle = useStore((state) => state.deleteComment);
  const isCurrentUser = useStore((state) => state.isCurrentUser);
  return (
    <div className="user-info-container">
      <div className="user-info">
        {user && (
          <>
            <img src={`${user.image.png}`} alt="profile" />
            <h3>{user.username}</h3>{" "}
            {isCurrentUser(user) && (
              <div className="is-current-user-mark">you</div>
            )}
          </>
        )}
        <span>{createdAt}</span>
      </div>
      {isCurrentUser(user) && (
        <div className="delete btn" onClick={() => deleteHandle(commentID)}>
          <img src={"./images/icon-delete.svg"} alt="delete" />
          <span>Delete</span>
        </div>
      )}
      {!isCurrentUser(user) && (
        <div className="reply btn" onClick={() => handleReplyClick(commentID)}>
          <img src={"./images/icon-reply.svg"} alt="reply" />
          <span>Reply</span>
        </div>
      )}
    </div>
  );
}
