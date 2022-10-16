import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
