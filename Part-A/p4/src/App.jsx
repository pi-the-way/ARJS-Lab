import "./App.css";
import { useState } from "react";

function App() {
  const accordionData = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis.",
    },
    {
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="container">
        {accordionData.map((data, index) => (
          <div key={index} className="accordion">
            <div
              className="title"
              onClick={() => {
                setActiveIndex(() => (activeIndex === index ? null : index));
              }}
            >
              <span>{data.title}</span>
              {<span>{activeIndex === index ? "-" : "+"}</span>}
            </div>
            {activeIndex === index && (
              <div className="content">{data.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
