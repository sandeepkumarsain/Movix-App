import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from '../context/MovieContext'; // Correct import

const SearchResults = () => {
  const { query } = useParams();
  const { movies } = useContext(MovieContext); // Correct usage

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {movies.searchResults && movies.searchResults.length > 0 ? (
        <ul>
          {movies.searchResults.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;