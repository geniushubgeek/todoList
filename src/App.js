import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [text, newText] = useState();
  const [items, newItems] = useState([]);
  function handleText(event) {
    newText(event.target.value);
  }
  function addItems() {
    newItems((prevItem) => {
      return [...prevItem, text];
    });
    newText("");
  }
  return (
    <div>
      <input type="text" onChange={handleText} value={text} />
      <button onClick={addItems}>Add item</button>
      <ul>
        {items.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
