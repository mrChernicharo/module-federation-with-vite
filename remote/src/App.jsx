import { useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Remote App</h1>

      <Button />

      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
