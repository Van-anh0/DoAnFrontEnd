import React from "react";
import Slider from "../Slider/Slider";
import MovieItem from "./MovieItem/MovieItem";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { selectCurrentShowtime } from "redux/showtime/showtimeSlice";
import { selectCurrentMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { useEffect, useState } from "react";
import { movieApi } from "actions";
import { useDispatch } from "react-redux";
import { actionUpdateMovie } from "redux/movie/movieSlice";

import "./Showtime.scss";

function Showtime() {
  const listMovie = useSelector(selectCurrentMovie);
  const listShowtime = useSelector(selectCurrentShowtime);
  const listCinema = useSelector(selectCurrentMovieTheater);

  const dispatch = useDispatch();

  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();
  const [cinema, setCinema] = useState();

  useEffect(() => {
    setListDay(Object.keys(listShowtime));
    let params = { showtime: day, cinema_id: cinema?.id };
    movieApi.getListMovie(params).then((result) => {
      dispatch(actionUpdateMovie(result));
    });
    setCinema(listCinema[0]);
  }, [day, listShowtime, cinema]);

  return (
    <div>
      <Slider />
      <div className="showtime_container">
        {listMovie?.data.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              listShowtime={listShowtime}
              listDay={listDay}
              cinema={cinema}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Showtime;
