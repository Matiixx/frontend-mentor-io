export function GetLastID(comments, maxID) {
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

function CreateNewComment(content, data) {
  let newID = GetLastID(data.comments, 0) + 1;
  return {
    id: newID,
    content,
    createdAt: "1 sec ago",
    replies: [],
    score: 0,
    user: data.currentUser,
  };
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

function AddReplyRecursively(comments, parentID, reply) {
  return comments.map((el) => {
    if (el.id === parentID) {
      if ("replies" in el) return { ...el, replies: [...el.replies, reply] };
      return { ...el, replies: [reply] };
    }
    if ("replies" in el) {
      el.replies = AddReplyRecursively(el.replies, parentID, reply);
    }
    return el;
  });
}

export function AddNewComment(content, [data, setData]) {
  const newComment = CreateNewComment(content, data);
  setData({
    comments: [...data.comments, newComment],
    currentUser: data.currentUser,
  });
}

export function DeleteComment(commentID, [data, setData]) {
  setData({
    comments: DeleteRecursive(data.comments, commentID),
    currentUser: data.currentUser,
  });
}

export function AddNewReply(parentID, content, [data, setData]) {
  const newReply = {
    ...CreateNewComment(content, data),
    replyingTo: GetCommentByID(data.comments, parentID).user.username,
  };

  setData({
    comments: AddReplyRecursively(data.comments, parentID, newReply),
    currentUser: data.currentUser,
  });
}
