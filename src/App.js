import { useEffect } from "react";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div className="App">
      <h1>Hello this is website for bot</h1>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
