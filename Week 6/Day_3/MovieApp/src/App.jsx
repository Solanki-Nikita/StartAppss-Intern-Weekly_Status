import React, { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { moviesData } from "./data/movies";
import useDebounce from "./hooks/useDebounce";

const ITEMS_PER_PAGE = 20;

const App = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 300);

  // ✅ Filter movies (optimized)
  const filteredMovies = useMemo(() => {
    console.log("Filtering...");
    return moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  // ✅ Paginated movies (only render small chunk)
  const paginatedMovies = useMemo(() => {
    const start = 0;
    const end = page * ITEMS_PER_PAGE;
    return filteredMovies.slice(start, end);
  }, [filteredMovies, page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <MovieList movies={paginatedMovies} />

      {/* Load More Button */}
      {paginatedMovies.length < filteredMovies.length && (
        <button onClick={() => setPage((p) => p + 1)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default App;