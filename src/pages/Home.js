import React from "react";
import Slider from "../components/Slider/Slider";

import Cinemas from "../components/Cinemas/Cinemas";
import TabDetail from "./pages_data/TabDetail";
import {
  getListMovie,
  getListMovieTheater,
  getListShowTime,
} from "../actions/ApiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionUpdateMovie } from "../redux/movie/movieSlice";
import { actionUpdateShowtime } from "../redux/showtime/showtimeSlice";
import { actionUpdateMovieTheater } from "../redux/movieTheater/movieTheaterSlice";
import { renameKeys } from "../utils/common";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getListMovie().then((result) => {
      dispatch(actionUpdateMovie(result));
    });

    getListShowTime().then((result) => {
      dispatch(actionUpdateShowtime(renameKeys(result.data)));
    });

    getListMovieTheater().then((result) => {
      dispatch(actionUpdateMovieTheater(result));
    });
  }, []);

  return (
    <div>
      <Slider />
      <TabDetail />
      <Cinemas />
    </div>
  );
}

export default Home;
