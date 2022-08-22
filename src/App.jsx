import React, {useState} from "react";
import Input from "./Input.jsx";
import "./normalize.css"
import "./style.css";

function App() {
  const [things, setThings] = useState([]);

  function addElement(e) {
    setThings([...things, e]);
  }

  function deleteAll() {
    setThings([]);
  }

  function deleteElement(i) {
    const newThings = things.slice();
    newThings.splice(i, 1);
    setThings(newThings);
  }

  const deleteAllDisabled = things.length === 0;

  return (
    <>
      <Input addElement={addElement} />
      <h3>
        Things:
        <button id="delete-all-button" disabled={deleteAllDisabled} onClick={deleteAll}>
          Delete all elements
        </button>
      </h3>
      <ul id="list">
        {things.map((t, i) => (
          <li className="thing" key={i}>
            {t}
            <button onClick={() => deleteElement(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
