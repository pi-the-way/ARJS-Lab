import React, { useState } from "react";
import "./App.css";

function App() {
  const options = ["Item 1", "Item 2", "Item 3"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div>
      <div className="checklist">
        {options.map((option, index) => (
          <div key={index} className="checklist-item">
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="selected-options">
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
