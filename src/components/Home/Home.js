import React from "react";
import Slider from "../Slider/Slider";

import MovieTheater from "./MovieTheater/MovieTheater";
import TabDetail from "../Movie/Movie";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionUpdateShowtime } from "redux/showtime/showtimeSlice";
import { actionUpdateMovieTheater } from "redux/movieTheater/movieTheaterSlice";

import { renameKeys } from "utils/common";
import { cinemaApi, showtimeApi } from "actions";
import BreadcrumbHome from "components/Breadcrumb/BreadcrumHome";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    cinemaApi.getListCinema().then((result) => {
      dispatch(actionUpdateMovieTheater(result));
    });

    showtimeApi.getListShowtime().then((result) => {
      dispatch(actionUpdateShowtime(renameKeys(result.data)));
    });
  }, [dispatch]);

  return (
    <div>
      <BreadcrumbHome />
      <Slider />
      <TabDetail />
      <MovieTheater />
    </div>
  );
}

export default Home;
