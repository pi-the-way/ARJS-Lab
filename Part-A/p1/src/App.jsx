import { useState } from "react";
import "./App.css";

function App() {
  const list = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
  ];
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type here"
        />
        <ul>
          {list
            .filter((item) =>
              item.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
