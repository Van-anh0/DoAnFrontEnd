import React, { useEffect, useState } from "react";
import {
  getListMovieTheater,
  getListShowTime,
  getOneMovie,
} from "../../actions/ApiCall";
import DetailFilm from "../../components/DetailFilm/DetailFilm";
import { useLocation } from "react-router-dom";
import { renameKeys } from "../../utils/common";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "../../redux/order/orderSlice";

function Detail() {
  const order = useSelector(selectCurrentorder);

  const [film, setFilm] = useState({});
  const [listMovieTheater, setListMovieTheater] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const pathname = useLocation().pathname;
  let movieId = pathname.replace("/detail/", "");
  useEffect(() => {
    let response = getOneMovie(movieId);
    response.then((result) => {
      setFilm(result.data);
    });
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
      <DetailFilm
        film={film}
        listMovieTheater={listMovieTheater}
        showtimes={showtimes}
      />
    </div>
  );
}

export default Detail;
