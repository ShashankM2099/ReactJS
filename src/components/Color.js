import React, { useEffect, useState } from "react";
function Color() {
  let [color, setColor] = useState("red"); // setting the default color to red to show

  //Button-48
  useEffect(() => {
    document.getElementById("changeColor").style = color;
    // react opening
    // official for cmpny or offline to practice
    // my skills or learning
    // offer letter istada
  });
  return (
    <>
      <h1 className="h1tag"> Click on the button to change colors!</h1>
      <p
        className="paraGraph"
        id="changeColor"
        style={{
          textAlign: "center",
        }}
      >
        My fav color is {color}
      </p>
      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="submit"
          onClick={() => setColor("blue")}
          style={{ margin: "0 10px" }}
        >
          Blue
        </button>
        <button
          type="submit"
          onClick={() => setColor("green")}
          style={{ margin: "0 10px" }}
        >
          Green
        </button>
        <button
          type="submit"
          onClick={() => setColor("yellow")}
          style={{ margin: "0 10px" }}
        >
          Yellow
        </button>
        <button
          type="submit"
          onClick={() => setColor("violet")}
          style={{ margin: "0 10px" }}
        >
          Violet
        </button>
      </div>
    </>
  );
}

export default Color;
