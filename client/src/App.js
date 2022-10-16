import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
