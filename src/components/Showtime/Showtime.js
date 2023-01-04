import React from "react";
import Slider from "../Slider/Slider";
import MovieItem from "./MovieItem/MovieItem";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { selectCurrentMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { useEffect, useState } from "react";
import { movieApi, showtimeApi } from "actions";
import { useDispatch } from "react-redux";
import { actionUpdateMovie } from "redux/movie/movieSlice";

import "./Showtime.scss";

function Showtime() {
  const listMovie = useSelector(selectCurrentMovie);
  const listCinema = useSelector(selectCurrentMovieTheater);
  const dispatch = useDispatch();

  const [day, setDay] = useState();
  const [cinema, setCinema] = useState();
  const [listShowtime, setListShowtime] = useState({});

  useEffect(() => {
    let params = { showtime: day, cinema_id: cinema?.id };
    movieApi.getListMovie(params).then((result) => {
      dispatch(actionUpdateMovie(result));
    });
    setCinema(listCinema[0]);

    showtimeApi.getListGroupByMovie().then((res) => {
      setListShowtime(res.data);
    });
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
              listShowtime={listShowtime[movie.id]}
              listCinema={listCinema}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Showtime;
