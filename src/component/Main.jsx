import React from "react";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetail";
import SearchResults from "./SearchResults";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <TvShows />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/search/:query",
        element: <SearchResults />,
      },
    ],
  },
]);

function Main() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Main;
