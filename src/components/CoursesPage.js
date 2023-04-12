import React, { useState, useEffect } from "react";
//use this template to implement json mapping
function CoursesPage() {
  const API_LINK = "https://api.openbrewerydb.org/breweries";
  const [brew, setBrew] = useState([]); // cant display the data
  /**
   * Fetching the API and storing in the hook with then,catch commands
   * Displaying in a card format
   * @param {url} url
   */
  const fetchData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBrew(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * useEffect -> fetchData();
   */
  useEffect(() => {
    fetchData(API_LINK);
  });

  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            color: "purple",
          }}
        >
          InFamous German Breweries🍾
        </h2>
        {/* card format: div className - cardContainer */}
        {/* map to another div className: card */}
        {/* insert data */}
        <div className="card-container">
          {brew.map((drink) => (
            <div className="card" key={drink.id}>
              <p>
                <b>ID:</b>
                {drink.id}{" "}
              </p>
              <p>
                <b>Company Name:</b> {drink.name}
              </p>
              <p>
                <b>Brewery Type:</b> {drink.brewery_type}
              </p>
              <p>
                <b>City:</b> {drink.city}
              </p>
              <p>
                <b>State:</b> {drink.state}
              </p>
              <p>
                <b>Postal Code:</b> {drink.postal_code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursesPage;
