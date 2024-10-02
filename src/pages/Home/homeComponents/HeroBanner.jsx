import React, { useContext } from "react";
import MovieContext from "../../../context/MovieContext";

function HeroBanner() {
  const { trending, loading, error } = useContext(MovieContext);

  if (loading) return <div>Loading Banner...</div>;
  if (error) return <div>Error: {error}</div>;

  // Select a random movie from the trending list
  const randomIndex = Math.floor(Math.random() * trending.length);
  const heroMovie = trending[randomIndex];

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: url('https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}'),
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-content">
        <h1>{heroMovie.title}</h1>
        <p>{heroMovie.overview}</p>
      </div>
    </div>
  );
}

export default HeroBanner;