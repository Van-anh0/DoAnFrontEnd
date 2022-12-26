import React from "react";
import Slider from "../Slider/Slider";

import MovieTheater from "./MovieTheater/MovieTheater";
import TabDetail from "../Movie/Movie";
import {
  getListMovie,
  getListMovieTheater,
  getListShowTime,
} from "actions/ApiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import { actionUpdateShowtime } from "redux/showtime/showtimeSlice";
import { actionUpdateMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { renameKeys } from "utils/common";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // getListMovie().then((result) => {
    //   dispatch(actionUpdateMovie(result));
    // });

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
      <MovieTheater />
    </div>
  );
}

export default Home;
