import React, { useState, useEffect } from "react";
function Counter() {
  //react counter component : functional component
  //hook and setting the default state to 0
  let [count, setCount] = useState(0);
  //function component should start with capital case, and you can pass props.method
  const FinalName = "Shashank";
  /**
   *
   * @param {userName} props takes in name
   * @returns returns the name passed
   */
  function SetName(props) {
    return (
      <div>
        <p className="paraGraph">
          This is {props.userName} written using props by passing the
          props.userName attribute
        </p>
      </div>
    );
  }
  useEffect(() => {
    //Got the paragraph and set it to a counter
    document.querySelector(
      ".countTrack"
    ).textContent = `You have clicked me ${count} timess...`;
  });
  return (
    //Using a React.Fragment to get rid of <div> tags
    <>
      <h1 className="h1tag">Counter Page</h1>
      {/* setting the userName to the props */}
      <SetName userName={FinalName} />
      <button
        className="button-86"
        type="submit"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
      <p className="countTrack"></p>
      <button className="btn-primary" type="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}

export default Counter;
