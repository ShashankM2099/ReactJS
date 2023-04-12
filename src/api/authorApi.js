import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/authors/";

/**
 * returns the fetch of the base url while handling and catching the erroe
 * @returns
 */
export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

/**
 *
 * @param {author} author id
 * @returns author information
 */
export function saveAuthor(author) {
  return fetch(baseUrl + (author.id || ""), {
    method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Delete the author information with the ID
 * @param {authorId} authorId
 * @returns the new array
 */
export function deleteAuthor(authorId) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
