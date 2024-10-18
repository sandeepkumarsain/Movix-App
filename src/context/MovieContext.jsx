import React, { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    topRated: [],
    loading: true,
    error: null,
  });

  const API_KEY = "0f37a05a4fd0810f65ce7c9635b185e8";
  const base_url = "https://api.themoviedb.org/3";

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trendingRes, popularRes, topRatedRes] =
          await Promise.all([
            fetch(`${base_url}${requests.fetchTrending}`),
            fetch(`${base_url}${requests.fetchPopular}`),
            fetch(`${base_url}${requests.fetchTopRated}`),
          ]);

        const [trending, popular, topRated] = await Promise.all([
          trendingRes.json(),
          popularRes.json(),
          topRatedRes.json(),
        ]);

        setMovies({
          trending: trending.results,
          popular: popular.results,
          topRated: topRated.results,
          loading: false,
          error: null,
        });
      } catch (error) {
        setMovies({
          trending: [],
          popular: [],
          topRated: [],
          loading: false,
          error: error.message,
        });
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;
