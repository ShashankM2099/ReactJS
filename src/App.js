import "./App.css";
import React, { useEffect } from "react";
//Components to Route
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
/**
 * Imported the components
 */
import Records from "./data.json";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Counter from "./components/Counter";
import GermanCity from "./components/GermanCity";
import Form from "./components/Form";
import DogBreeds from "./components/DogBreeds";
import HomePage from "./components/HomePage";
import Color from "./components/Color";

function App() {
  /**
   * need to create a new react app in this projekt
   * extends component need a render function
   * functional component doesn't need a render attribute
   * React only allows let/const...VAR is not allowed
   */
  console.log(Records);
  /**
   * Manual Routing via route option location.pathname
   * @returns manual Routing for the pages
   */
  function getPage() {
    //getting the route
    const route = window.location.pathname;
    //routing to About Page
    if (route === "/about") {
      return <AboutPage />;
    }
    //routing to Courses Page
    if (route === "/courses") {
      return <CoursesPage />;
    }
    //routing to Counter Page
    if (route === "/counter") {
      return <Counter />;
    }
    //routing to color pages
    if (route === "/color") {
      return <Color />;
    }
    // routing to german breweries page
    if (route === "/german") {
      return <GermanCity />;
    }
    // routing to a mock form page
    if (route === "/form") {
      return <Form />;
    }
    // routing to dogbreed page an API callback
    if (route === "/dogbreed") {
      return <DogBreeds />;
    }
    // add new route via if statement add the js in the component
    return <HomePage />;
    /**
     * HomePage Component that has About Page anchor tag to another page
     * Every App has 5 compos
     * Header
     * Side Nav
     *  Main Content or Body
     * Footer Tag
     * Component to run other comps
     */
  }
  function SetTitle() {
    useEffect(() => {
      document.title = "React Application";
    }, []);
  }

  // Implement HTML in the return here
  return (
    <html className="htmlTag">
      <body className="bodyTag">
        <div className="dot">
          <Header />
          {getPage()}
          {SetTitle()}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;
