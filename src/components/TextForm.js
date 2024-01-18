import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  };


  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-2"style={{color: props.mode==='dark'? 'white': '#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{backgroundColor: props.mode==='light'? 'white': 'grey', color : props.mode==='light'? '#042743': 'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="continer my-3"style={{color: props.mode==='dark'? 'white': '#042743'}}  >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
