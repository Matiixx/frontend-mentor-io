import "./styles/App.scss";
import dataJSON from "./data.json";
import { useEffect } from "react";
import CommentSection from "./components/CommentSection/CommentSection";
import { useLocalStorage } from "./utils/useLocalStorage";
import { AddNewComment, DeleteComment } from "./utils/utility";

function App() {
  const [data, setData] = useLocalStorage("comments", {});

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      console.log(dataJSON);
      setData(dataJSON);
    }

    // eslint-disable-next-line
  }, []);

  const addComment = (content) => {
    AddNewComment(content, data.currentUser, [data, setData]);
  };

  const deleteComment = (id) => {
    DeleteComment(id, [data, setData]);
  };

  const isCurrentUser = (user) => {
    return data.currentUser.username === user.username;
  };

  return (
    <div className="App">
      <CommentSection
        comments={data.comments}
        currentUser={data.currentUser}
        addCommentHandle={addComment}
        isCurrentUser={isCurrentUser}
        deleteHandle={deleteComment}
      />
    </div>
  );
}

export default App;
