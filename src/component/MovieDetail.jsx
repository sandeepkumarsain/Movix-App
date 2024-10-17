import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import CircleRating from "CircleRating";

const API_KEY = "0f37a05a4fd0810f65ce7c9635b185e8";
const base_url = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`${base_url}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      });
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch movie details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "path_to_placeholder_image"
        }
        alt={movie.title}
        className="img-fluid"
      />
      <p>{movie.overview}</p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      {/* Pass movie rating to CircleRating */}
      {/* <CircleRating rating={movie.vote_average} /> */}
    </div>
  );
}

export default MovieDetails;
