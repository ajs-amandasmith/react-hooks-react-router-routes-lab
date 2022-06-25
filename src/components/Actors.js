import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map(actor => (
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <h4>Movies:</h4>
      <ul>
        {actor.movies.map(movie => (
          <li key={movie}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
)}

export default Actors;
