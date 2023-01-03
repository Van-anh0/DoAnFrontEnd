import React from "react";
import Slider from "../Slider/Slider";
import MovieItem from "./MovieItem/MovieItem";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { selectCurrentShowtime } from "redux/showtime/showtimeSlice";
import { selectCurrentMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { useEffect, useState } from "react";
import "./Showtime.scss";

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
      <div className="showtime_container">
        <MovieItem
          listMovie={listMovie}
          listDay={listDay}
          listMovieTheater={listMovieTheater}
        />
      </div>
    </div>
  );
}

export default Showtime;
