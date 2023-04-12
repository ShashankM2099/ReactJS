import React from "react";

function Header() {
  const homePage = () => {
    document.title = "Home Page";
  };
  return (
    // plain nav to navigate between two pages.
    // Can add navigation here
    //To add new routes: add the tag
    <>
      <header>
        <div className="jumboTron">
          <h1 className="h1tag">React Administration</h1>
          {homePage()}
        </div>
        <nav className="topnav">
          <switch>
            <nav
              style={{
                justifyContent: "center",
              }}
            >
              {/* <Routes>
                <Route exact path="/home" component={<HomePage />} />
                <Route path="/about" component={<AboutPage />} />
                <Route path="/counter" component={<Counter />} />
                <Route path="/color" component={<Color />} />
                <Route path="/courses" component={<CoursesPage />} />
                <Route path="/german" component={<GermanCity />} />
                <Route path="/dogbreed" component={<DogBreeds />} />
                <Route path="/form" component={<Form />} />
              </Routes> */}
              <a href="/">Home</a> <a href="/about"> About</a>
              <a href="/counter"> Counter</a> <a href="/color"> Color Change</a>
              <a href="/courses">Brewery</a> <a href="/german">German River</a>{" "}
              <a href="/dogbreed">Dog Breed</a>
              <a href="/form"> Fill a Form</a>
            </nav>
          </switch>
        </nav>{" "}
      </header>
    </>
  );
}

export default Header;
