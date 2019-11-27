import { API_KEY } from "./API_KEY";

export const getAllMovie = query =>
  fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${query}`).then(response => {
    if (response.ok) return response.json();
    throw Error(`Error ${response.status}: connection failed`);
  });
