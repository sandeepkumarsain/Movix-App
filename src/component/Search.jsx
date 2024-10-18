import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MovieContext from '../context/MovieContext'; // Correct import

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { setMovies } = useContext(MovieContext); // Correct usage

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchSearchResults(query);
    }
  };

  const fetchSearchResults = async (query) => {
    try {
      const API_KEY = "0f37a05a4fd0810f65ce7c9635b185e8";
      const base_url = "https://api.themoviedb.org/3";
      const url = `${base_url}/search/movie?api_key=${API_KEY}&query=${query}`;

      const response = await fetch(url);
      const data = await response.json();

      setMovies({
        searchResults: data.results,
        loading: false,
        error: null,
      });

      navigate(`/search/${query}`);
    } catch (error) {
      setMovies({
        searchResults: [],
        loading: false,
        error: error.message,
      });
    }
  };

  return (
    <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.9)" }}>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search..."
          style={{ width: "100%" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default Search;