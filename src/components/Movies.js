import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map(movie => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <h4>Time: {movie.time}</h4>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Movies Page</h1>
    {displayMovies}
  </div>
)}

export default Movies;
