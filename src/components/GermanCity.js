import React, { useState, useEffect } from "react";
function GermanCity() {
  /**
   *API URL - Link
   */
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  /**
   * useEffect -> rendering the function
   */
  useEffect(() => {
    fetchData();
  });

  /**
   * Fetching the API Link and
   * storing in then, response, storing in the hook
   */
  function fetchData() {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPosts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /**
   * @returns the implemented functions above
   */
  return (
    <>
      <h2> German Data API Call</h2>
      <table className="styled-table">
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {posts.length > 0
            ? posts.map((post) => (
                <tr key={post.id} className="active-row">
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            : []}
        </tbody>
      </table>
    </>
  );
}

export default GermanCity;
