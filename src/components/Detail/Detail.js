import React, { useEffect, useState } from "react";
import { cinemaApi, showApi } from "actions";
import Film from "./Film/Film";
import { useLocation } from "react-router-dom";
import { renameKeys } from "utils/common";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import { selectCurrentMovie } from "redux/movie/movieSlice";

function DetailMovie() {
  const order = useSelector(selectCurrentorder);
  const films = useSelector(selectCurrentMovie);

  const [film, setFilm] = useState({});
  const [listMovieTheater, setListMovieTheater] = useState([]);
  const [showtimes, setShowtimes] = useState([]);

  const pathname = useLocation().pathname;
  let movieId = pathname.replace("/detail/", "");

  function setFilmData() {
    return films?.data.filter((f) => {
      return f.id === movieId;
    });
  }
  useEffect(() => {
    let filmData = setFilmData();
    if (filmData) {
      setFilm(filmData[0]);
    }

    cinemaApi.getListCinema(movieId).then((result) => {
      setListMovieTheater(result.data);
    });

    showApi.getListShow(movieId).then((result) => {
      let listResponse = renameKeys(result.data);
      setShowtimes(listResponse);
    });
  }, [movieId, order?.day]);

  return (
    <div>
      <Film
        film={film}
        listMovieTheater={listMovieTheater}
        showtimes={showtimes}
      />
    </div>
  );
}

export default DetailMovie;
