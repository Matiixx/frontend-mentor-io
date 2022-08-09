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

function saveToLocalStorage(data) {
  localStorage.setItem("comments", JSON.stringify(data));
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

const commentSlice = (set, get) => ({
  data: {},

  FetchData: async () => {
    const localData = localStorage.getItem("comments");
    if (localData) {
      set({ data: JSON.parse(localData) });
      return;
    }
    const response = await fetch("data.json");
    const comments = await response.json();
    set({ data: comments });
  },

  addComment: (content) => {
    const newComment = CreateNewComment(content, get().data);
    set((state) => ({
      data: {
        ...state.data,
        comments: [...state.data.comments, newComment],
      },
    }));
    saveToLocalStorage(get().data);
  },

  deleteComment: (id) => {
    set((state) => ({
      data: {
        ...state.data,
        comments: DeleteRecursive(state.data.comments, id),
      },
    }));
    saveToLocalStorage(get().data);
  },

  isCurrentUser: (user) => {
    return get().data.currentUser.username === user.username;
  },

  addNewReply: (parentID, content) => {
    const newReply = {
      ...CreateNewComment(content, get().data),
      replyingTo: GetCommentByID(get().data.comments, parentID).user.username,
    };
    set((state) => ({
      data: {
        ...state.data,
        comments: AddReplyRecursively(state.data.comments, parentID, newReply),
      },
    }));
    saveToLocalStorage(get().data);
  },
});

export default commentSlice;
