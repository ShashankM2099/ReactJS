import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Counter from "./Counter";
import CoursesPage from "./CoursesPage";
import DogBreeds from "./DogBreeds";
import Form from "./Form";
import HomePage from "./HomePage";
function Router() {
  return (
    <>
      <nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/courses" element={<CoursesPage />} />
          <Route exact path="/dogbreed" element={<DogBreeds />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </nav>
    </>
  );
}

export default Router;
