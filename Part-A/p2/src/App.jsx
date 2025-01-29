import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setCount(count - 1 > 0 ? count - 1 : 0);
          }}
        >
          -
        </button>
        <span> {count} </span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
