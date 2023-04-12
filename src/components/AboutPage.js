import React from "react";
class AboutPage extends React.Component {
  render() {
    return (
      //React.Fragment wont render anything and <> are implied for Fragments
      <>
        <h2 className="h2tag">About</h2>
        <p className="paraGraph">This appplication uses React.JS</p>
      </>
    );
  }
}

export default AboutPage;
