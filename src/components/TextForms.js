import React, { useState } from "react";

export default function TextForms() {
  //on Clicks
  const upClick = () => {
    setTextEditorState(textEditorValue.toUpperCase());
  };
  const lcClick = () => {
    setTextEditorState(textEditorValue.toLowerCase());
  };
  const trimClick = () => {
    setTextEditorState(textEditorValue.replaceAll(" ", ""));
  };
  //on Changes
  const onTextEditorChange = (event) => {
    setTextEditorState(event.target.value);
  };

  //states
  const [textEditorValue, setTextEditorState] = useState("");

  return (
    <>
      <div className="mb-3 container" style={{ background: "lightgrey" }}>
        <h1>Text Editor</h1>
        <textarea
          className="form-control"
          rows="6"
          value={textEditorValue}
          id="myTextEditorBox"
          placeholder="Enter text here..."
          onChange={onTextEditorChange}
        ></textarea>
        <button className="btn btn-outline-primary my-3" onClick={upClick}>
          Upper case
        </button>
        <button className="btn btn-outline-primary m-3" onClick={lcClick}>
          Lower case
        </button>
        <button className="btn btn-outline-primary my-3" onClick={trimClick}>
          Remove spaces
        </button>
      </div>
      <div className="container">
        <h1>Text Summery</h1>

        {textEditorValue.length === 0 ? 
          <p>Please write something to get summery</p>
         : 
          <p>
            {textEditorValue.split(/[^\s]+/).length - 1} words and{" "}
            {textEditorValue.length} characters in this text.
          </p>
    }
      </div>
    </>
  );
}
