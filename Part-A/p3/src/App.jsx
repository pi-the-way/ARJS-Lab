import { useState } from "react";
import "./App.css";

function App() {
  const images = ["/1.png", "/2.png", "/3.png"];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setActiveIndex(
              activeIndex > 0 ? activeIndex - 1 : images.length - 1
            );
          }}
        >
          {"<"}
        </button>
        <img src={images[activeIndex]} alt="img" />
        <button
          onClick={() => {
            setActiveIndex(
              activeIndex === images.length - 1 ? 0 : activeIndex + 1
            );
          }}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default App;
