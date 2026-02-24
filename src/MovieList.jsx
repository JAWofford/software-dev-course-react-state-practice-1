import React from "react";
import {movies} from "./mock-data/movies";
import "./MovieList.css";

export default function MovieList ({selectedGenre}){
    const filteredMovies = selectedGenre //if there is a selected genre
  ? movies.filter((movie) => movie.genre === selectedGenre) //then filter out movies whose genre equals selectedGenre
  : []; //else return empty array.  Can't do null or empty string because map() will fail. Still wrapping my head around these ternary operators.

    return (
  <div className="movie-list-container">

    {/* No genre selected yet */}
    {!selectedGenre && <p>Please select a genre to see a list of available movies.</p>}

    {/* Genre selected but no movies found */}
    {selectedGenre && filteredMovies.length === 0 && (
      <p>There are no {selectedGenre} movies available.</p>
    )}

    {/* Genre selected and movies found */}
    {filteredMovies.length > 0 && (
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    )}

  </div>
);
   
}