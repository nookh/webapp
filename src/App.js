import "./App.css";
import { useEffect } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { useTelegram } from "./components/hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
