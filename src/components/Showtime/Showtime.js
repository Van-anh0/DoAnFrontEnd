import React from "react";
import Slider from "../Slider/Slider";
import MovieItem from "./MovieItem/MovieItem";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { selectCurrentShowtime } from "redux/showtime/showtimeSlice";
import { selectCurrentMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { useEffect, useState } from "react";

function Showtime() {
  const [listDay, setListDay] = useState([]);
  const listMovie = useSelector(selectCurrentMovie);
  const listShowtime = useSelector(selectCurrentShowtime);
  const listMovieTheater = useSelector(selectCurrentMovieTheater);
  useEffect(() => {
    setListDay(Object.keys(listShowtime));
  }, [listShowtime]);

  return (
    <div>
      <Slider />
      <MovieItem
        listMovie={listMovie}
        listDay={listDay}
        listMovieTheater={listMovieTheater}
      />
    </div>
  );
}

export default Showtime;
