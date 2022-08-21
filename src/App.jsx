import React, {useState} from "react";
import Counter from "./Counter.jsx";
import "./normalize.css"
import "./style.css";

function App() {
  const [value, setValue] = useState("text in input");

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
