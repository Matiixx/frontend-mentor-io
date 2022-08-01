import "./styles/App.scss";
import dataJSON from "./data.json";
import { useEffect } from "react";
import CommentSection from "./components/CommentSection/CommentSection";
import { useLocalStorage } from "./utils/useLocalStorage";

function App() {
  const [data, setData] = useLocalStorage("comments", {});

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      console.log(dataJSON);
      setData(dataJSON);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <CommentSection comments={data.comments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;
