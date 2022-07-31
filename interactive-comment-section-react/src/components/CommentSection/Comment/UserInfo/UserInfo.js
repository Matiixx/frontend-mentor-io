import React from "react";
import "./UserInfo.scss";

export default function UserInfo({ user, createdAt }) {
  return (
    <div className="user-info-container">
      <div className="user-info">
        {user && (
          <>
            <img src={`${user.image.png}`} alt="profile" />
            <h3>{user.username}</h3>{" "}
          </>
        )}
        <span>{createdAt}</span>
      </div>
      <div className="reply-btn">
        <img src={"./images/icon-reply.svg"} alt="reply" />
        <span>Reply</span>
      </div>
    </div>
  );
}
