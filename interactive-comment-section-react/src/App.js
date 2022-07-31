import "./styles/App.scss";
import dataJSON from "./data.json";
import { useEffect, useState } from "react";
import CommentSection from "./components/CommentSection/CommentSection";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(dataJSON);

    return () => {
      console.log(dataJSON);
      setData({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <CommentSection comments={data.comments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;
