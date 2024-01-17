import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value)
  };

  const [text, setText] = useState("Enter text here");
  // setText("new text");
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div class="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
    <div className="continer">
        <h1>Your text summary</h1>
        <p>3432 words and 4532324 characters</p>
    </div>
    </>
  );
}
