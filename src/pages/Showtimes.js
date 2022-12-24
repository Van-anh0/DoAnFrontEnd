import React from "react";
import Slider from "../components/Slider/Slider";
import ListFilm from "../components/ListFilm/ListFilm";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "../redux/movie/movieSlice";
import { selectCurrentShowtime } from "../redux/showtime/showtimeSlice";
import { selectCurrentMovieTheater } from "../redux/movieTheater/movieTheaterSlice";
import { useEffect, useState } from "react";

function Showtimes() {
  const [listDay, setListDay] = useState([]);
  const listMovie = useSelector(selectCurrentMovie);
  const listShowtime = useSelector(selectCurrentShowtime);
  const listMovieTheater = useSelector(selectCurrentMovieTheater);
  useEffect(() => {
    setListDay(Object.keys(listShowtime));
  }, []);

  return (
    <div>
      <Slider />
      <ListFilm
        listMovie={listMovie}
        listDay={listDay}
        listMovieTheater={listMovieTheater}
      />
    </div>
  );
}

export default Showtimes;
