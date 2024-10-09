import React, { useContext } from "react";
import MovieContext from "../../../context/MovieContext";

function Trending() {
  const { trending, loading, error } = useContext(MovieContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="row">
      {trending.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.id}>
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5>{movie.title || movie.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
