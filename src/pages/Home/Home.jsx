import React from "react";
import { MovieProvider } from "../../context/MovieContext";
import Trending from "./homeComponents/Trending";
import Popular from "./homeComponents/Popular";
import TopRated from "./homeComponents/TopRated";
import Upcomming from "./homeComponents/UpComming";
import HeroBanner from "./homeComponents/HeroBanner";
import SlideButton from "../../component/SlideButton";

function Home() {
  return (
    <MovieProvider>
      <HeroBanner />
      <div className="container text-light mt-5">
        <SlideButton title="Trending" />
        <Trending />
        <SlideButton title="What's popular" />
        <Popular />
        <SlideButton title="Top Rated " />
        <TopRated />
        <SlideButton title="Upcoming " />
        <Upcomming />
      </div>
    </MovieProvider>
  );
}

export default Home;