import "./styles/App.scss";
import { useEffect } from "react";
import CommentSection from "./components/CommentSection/CommentSection";
import useStore from "./store/useStore";

function App() {
  const FetchData = useStore((state) => state.FetchData);
  const data = useStore((state) => state.data);

  useEffect(() => {
    async function fetchData() {
      await FetchData();
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <CommentSection comments={data.comments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;
