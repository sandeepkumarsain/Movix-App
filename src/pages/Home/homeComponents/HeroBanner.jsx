import React, { useContext, useState } from "react";
import MovieContext from "../../../context/MovieContext";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const { trending, loading, error } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const navigate = useNavigate(); // React Router navigation

  if (loading) return <div>Loading Banner...</div>;
  if (error) return <div>Error: {error}</div>;

  const randomIndex = Math.floor(Math.random() * trending.length);
  const heroMovie = trending[randomIndex];

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`); // Navigate to the search results page with the query
    }
  };

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(4, 21, 45, 0.99)),url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
        height: "60vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#04152d",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="banner-content">
        <form onSubmit={handleSearch}>
          <input
            className="inps"
            type="text"
            placeholder="Search for Movie or TV Shows"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          <button className="btns" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroBanner;
