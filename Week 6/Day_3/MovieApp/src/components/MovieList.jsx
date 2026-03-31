import React from "react";
import MovieCard from "./MovieCard";

/**
 * Memoized list
 * Re-renders only when movies change
 */
const MovieList = React.memo(({ movies }) => {
  console.log("MovieList Render");

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
});

export default MovieList;