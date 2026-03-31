import React from "react";

/**
 * Prevent unnecessary re-renders
 */
const MovieCard = React.memo(({ movie }) => {
  console.log("Rendering:", movie.title);

  return (
    <div style={styles.card}>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </div>
  );
});

const styles = {
  card: {
    padding: "10px",
    border: "1px solid #ccc",
    margin: "8px",
  },
};

export default MovieCard;