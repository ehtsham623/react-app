import React from "react";

export default function TextForms() {
  return (
    <div className="mb-3 container " style={{ background: "lightgrey" }}>
      <h1>Text Editor</h1>
      <textarea
        className="form-control"
        rows="6"
        placeholder="Enter text here..."
      ></textarea>
      <button className="btn btn-outline-dark my-3">Upper case</button>
    </div>
  );
}