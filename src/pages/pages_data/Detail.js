import React, { useEffect, useState } from "react";
import {
  getListMovieTheater,
  getListShowTime,
  getOneMovie,
} from "../../actions/ApiCall";
import DetailFilm from "../../components/DetailFilm/DetailFilm";
import { useLocation } from "react-router-dom";
import { renameKeys } from "../../utils/common";

function Detail() {
  const [film, setFilm] = useState({});
  const [types, setTypes] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const pathname = useLocation().pathname;
  let id = pathname.replace("/detail/", "");
  useEffect(() => {
    let response = getOneMovie(id);
    response.then((result) => {
      setFilm(result.data);
    });

    let responseType = getListMovieTheater();
    responseType.then((result) => {
      setTypes(result.data);
    });

    let responseShowtime = getListShowTime();
    responseShowtime.then((result) => {
      let listResponse = renameKeys(result.data);
      setShowtimes(listResponse);
    });
  }, []);

  return (
    <div>
      <DetailFilm film={film} types={types} showtimes={showtimes} />
    </div>
  );
}

export default Detail;
