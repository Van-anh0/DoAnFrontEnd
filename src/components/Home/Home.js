import React from "react";
import Slider from "../Slider/Slider";

import MovieTheater from "./MovieTheater/MovieTheater";
import TabDetail from "../Movie/Movie";
import { getListMovieTheater, getListShowTime } from "actions/ApiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
  }, [dispatch]);

  return (
    <div>
      <Slider />
      <TabDetail />
      <MovieTheater />
    </div>
  );
}

export default Home;
