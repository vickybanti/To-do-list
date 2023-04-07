import React, { useState } from "react";

function App() {
  const [wordList, setList] = useState("");

  const [itemList, setItem] = useState([]);

  function showList(event) {
    const newValue = event.target.value;
    setList(newValue);
  }

  function handleItem() {
    setItem((prevItem) => {
      return [...prevItem, wordList];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={showList} value={wordList} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
