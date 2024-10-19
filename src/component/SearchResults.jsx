import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = "0f37a05a4fd0810f65ce7c9635b185e8";
const base_url = "https://api.themoviedb.org/3";

function SearchResults() {
  const { query } = useParams(); // Get the query from the URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Fetch search results when the query changes
      const fetchSearchResults = async () => {
        try {
          const response = await fetch(`${base_url}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      fetchSearchResults();
    }
  }, [query]); // Runs every time the query changes

  return (
    <div className="container">
      <div className="row">
        {results.length > 0 ? (
          results.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5>{movie.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
