import React from "react";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie";
import TvShow from "../pages/TvShow";
import Header from "./Header";
import Footer from "./Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/tvShow",
        element: <TvShow />,
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
