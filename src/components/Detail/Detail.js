import React, { useEffect, useState } from "react";
import Film from "./Film/Film";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import { selectCurrentMovie } from "redux/movie/movieSlice";

import { cinemaApi, showtimeApi } from "actions";
import { renameKeys } from "utils/common";

function DetailMovie() {
  const order = useSelector(selectCurrentorder);
  const listMovie = useSelector(selectCurrentMovie);

  const [movie, setMovie] = useState({});
  const [listMovieTheater, setListMovieTheater] = useState([]);
  const [showtimes, setShowtimes] = useState([]);

  const pathname = useLocation().pathname;
  let movieId = pathname.replace("/detail/", "");

  function setMovieData() {
    return listMovie?.data.filter((f) => {
      return f.id === movieId;
    });
  }
  useEffect(() => {
    let filmData = setMovieData();
    if (filmData) {
      setMovie(filmData[0]);
    }

    cinemaApi.getListCinema(movieId).then((result) => {
      setListMovieTheater(result.data);
    });

    showtimeApi.getListShowtime(movieId).then((result) => {
      let listResponse = renameKeys(result.data);
      setShowtimes(listResponse);
    });
  }, [movieId, order?.day]);

  return (
    <div>
      <Film
        movie={movie}
        listMovieTheater={listMovieTheater}
        showtimes={showtimes}
      />
    </div>
  );
}

export default DetailMovie;
