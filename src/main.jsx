import React, {useState} from "react";
import {createRoot} from 'react-dom/client';
import Counter from "./Counter.jsx";
import "./style.css";

function App() {
  const [value, setValue] = useState("text in input");

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
