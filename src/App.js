import "./App.css";
import Header from "./components/Header/Header";
import { useTelegram } from "./components/hooks/useTelegram";
// import { useEffect } from "react";

function App() {
  const { onToggleButton } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  return (
    <div className="App">
      <Header />
      <h1>Hello </h1>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
