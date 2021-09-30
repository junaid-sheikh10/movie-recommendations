import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [output, setoutput] = useState("");
  var horror = ["conjuring", "conjuring 2"];
  var comedy = ["3 idiots", "hera pheri"];
  var romcom = ["hitched", "no strings attached"];

  function clickHandler(genre) {
    setoutput(
      <>
        {genre.map((item) => {
          return <p>{item}</p>;
        })}
      </>
    );
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Movie Recommendations 🎥</h1>
      <small>select a genre to get started </small>
      <hr></hr>
      <ul>
        <li style={{ listStyle: "none", display: "inline", margin: "3px" }}>
          <button onClick={() => clickHandler(horror)}>horror</button>
        </li>
        <li style={{ listStyle: "none", display: "inline", margin: "3px" }}>
          <button onClick={() => clickHandler(comedy)}>Comedy</button>
        </li>
        <li style={{ listStyle: "none", display: "inline", margin: "3px" }}>
          <button onClick={() => clickHandler(romcom)}>romcoms</button>
        </li>
      </ul>

      <hr style={{ width: "500px" }}></hr>
      <div
        style={{
          border: "5px solid blue",
          display: "block",
          height: "100px",
          width: "500px",
          margin: "auto"
        }}
      >
        <h3 style={{ color: "blue" }}>{output}</h3>
      </div>
    </div>
  );
}
