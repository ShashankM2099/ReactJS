import React, { useState, useEffect } from "react";
function DogBreeds() {
  // can work with budget tracker, recipe app, to-do list app
  const [breeds, setBreeds] = useState([]);
  function fetchData() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(data.message))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h2>Dog Breeds</h2>
      <table>
        <thead>
          <tr>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(breeds).map((breed) => (
            <tr key={breed}>
              <td>{breed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DogBreeds;
