import React, { useEffect, useState } from "react";
import { getListMovieTheater, getListShowTime } from "actions/ApiCall";
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

  useEffect(() => {
    let filmData = films?.data.filter((f) => {
      return f.id === movieId;
    });
    setFilm(filmData[0]);

    getListMovieTheater(movieId, order?.day).then((result) => {
      setListMovieTheater(result.data);
    });

    let responseShowtime = getListShowTime(movieId);
    responseShowtime.then((result) => {
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
