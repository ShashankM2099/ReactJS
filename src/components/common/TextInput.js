import React from "react";
function TextInput(props) {
  //creating a re-usable text input component
  return (
    <div>
      <input
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        className="form-field"
        placeholder={props.placeholder}
        required="true"
      />
      {props.error && <div className="alert">{props.error}</div>}
    </div>
  );
}

export default TextInput;
