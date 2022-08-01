// import { useLocalStorage } from "./useLocalStorage";

function GetLastID(comments, maxID) {
  for (let com of comments) {
    if (com.id > maxID) maxID = com.id;
    if (com?.replies && com.replies.length !== 0) {
      let a = GetLastID(com.replies, maxID);
      maxID = a > maxID ? a : maxID;
    }
  }
  return maxID;
}

export function AddNewComment(content, user, [data, setData]) {
  let newID = GetLastID(data.comments, 0) + 1;
  let newComment = {
    content,
    createdAt: "1 sec ago",
    id: newID,
    replies: [],
    score: 0,
    user,
  };

  let newData = {
    comments: [...data.comments, newComment],
    currentUser: data.currentUser,
  };
  setData(newData);
}
