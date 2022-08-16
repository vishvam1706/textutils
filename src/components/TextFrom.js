import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let lowercase = text.toLocaleLowerCase();
    setText(lowercase);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text", "success");
  };

  const handleonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === "light" ? "#212529" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleonChange}
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Sapce
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#212529" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          Words and {text.length} characters
        </p>
        {/* <p>
          {(0.008 *
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element != "";
              }).length) /
            60}{" "}
          Hours Read
        </p> */}
        <p>
          {0.008 *
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length}{" "}
          Minutes Read
        </p>
        <p>
          {0.008 *
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length *
            60}{" "}
          Second Read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
