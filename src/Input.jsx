import React, {useState} from "react";

function validate(text) {
  let errors = [];
  if (text.indexOf('f') !== -1) {
    errors.push("Your element has letter 'f' or 'F'");
  }
  if (/\s/.test(text)) {
    errors.push("Your element has empty space");
  }
  if (text.length < 6) {
    errors.push("Your element's length is less than 6");
  }
  return errors;
}

function Input(props) {
  const {addElement} = props;
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleAddClick() {
    addElement(value);
  }

  const errors = validate(value.toLowerCase());
  const addDisabled = errors.length !== 0;
  const inputOutline = value.length === 0
    ? ""
    : errors.length === 0
      ? "green"
      : "red";

  const symbol = value.length === 0
    ? ""
    : errors.length === 0
      ? <>&#x2705;</>
      : <>&#x26D4;</>;

  return (
    <div className="input-container">
      <input
        id="input"
        type="text"
        style={{outlineColor: inputOutline}}
        value={value}
        onChange={handleChange} />
      <span id="symbol">{symbol}</span>
      <button id="add-button" disabled={addDisabled} onClick={handleAddClick}>
        Add element
      </button>
      <div id="notification">
        {value.length !== 0 && (
          errors.map(e => (
            <div key={e}>{e}</div>
          )
        ))}
      </div>
    </div>
  );
}

export default Input;
