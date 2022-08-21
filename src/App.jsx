import React, {useState} from "react";
import Input from "./Input.jsx";
import "./normalize.css"
import "./style.css";

function App() {
  const [things, setThings] = useState([]);

  function addElement(e) {
    setThings([...things, e]);
  }

  return (
    <>
      <Input addElement={addElement} />
      <h3>Things:</h3>
      <ul id="list">
        {things.map((t, i) => (
          <li className="thing" key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
