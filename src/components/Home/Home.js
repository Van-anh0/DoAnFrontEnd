import React from "react";
import Slider from "../Slider/Slider";

import MovieTheater from "./MovieTheater/MovieTheater";
import TabDetail from "../Movie/Movie";
import { cinemaApi } from "actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionUpdateShowtime } from "redux/showtime/showtimeSlice";
import { actionUpdateMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { renameKeys } from "utils/common";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    cinemaApi.getListCinema().then((result) => {
      dispatch(actionUpdateMovieTheater(result));
    });

    // hieucn: to do
    // getListShowTime().then((result) => {
    //   dispatch(actionUpdateShowtime(renameKeys(result.data)));
    // });

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
