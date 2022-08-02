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

function GetCommentByID(comments, id) {
  for (let com of comments) {
    if (com.id === id) return com;
    if (com?.replies && com.replies.length !== 0) {
      if (GetCommentByID(com.replies, id)) {
        return GetCommentByID(com.replies, id);
      }
    }
  }
  return null;
}

function DeleteRecursive(comments, id) {
  return comments
    .map((el) => {
      return { ...el };
    })
    .filter((el) => {
      if ("replies" in el) {
        el.replies = DeleteRecursive(el.replies, id);
      }
      return el.id !== id;
    });
}

export function AddNewComment(content, user, [data, setData]) {
  let newID = GetLastID(data.comments, 0) + 1;
  let newComment = {
    id: newID,
    content,
    createdAt: "1 sec ago",
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

export function DeleteComment(commentID, [data, setData]) {
  setData({
    comments: DeleteRecursive(data.comments, commentID),
    currentUser: data.currentUser,
  });
}
