import React from "react";
// import InputGroup from "./InputGroup";

export default function UserInput() {
  function InputGroup({ title, ...props }) {
    return (
      <div>
        <label>{title}</label>
        <input type="number" min="0" {...props} />
      </div>
    );
  }

  return (
    <div id="user-input" className="input-group">
      <InputGroup title="initial investment" step="10" />
      <InputGroup title="annual investment" step="100" />
      <InputGroup title="expected return" step="0.1" />
      <InputGroup title="duration" />
    </div>
  );
}
