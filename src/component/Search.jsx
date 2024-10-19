import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // React Router navigation hook

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      // Navigate to /search/:query when a search is performed
      navigate(`/search/${query}`);
    }
  };

  return (
    <div style={{ height: "40px", zIndex: "100" }}>
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
