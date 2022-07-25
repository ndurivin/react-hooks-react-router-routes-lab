import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesAll = movies.map((movie) => (
    <div key={movie.title}>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} mins</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>

    </div>
  ))
  return <div>
            <h1>Movies Page</h1>
            {moviesAll}
         </div>;
}

export default Movies;
