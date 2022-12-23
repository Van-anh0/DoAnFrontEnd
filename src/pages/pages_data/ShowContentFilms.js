import React, { useEffect, useState } from "react";
import Contents from "../../components/Content/Contents";
import { getListMovieStatus } from "../../actions/ApiCall/index";
import {
  MOVIE_STATUS_SHOWING,
  MOVIE_STATUS_TOSHOW,
} from "../../utils/constants";
function ShowContentFilms(props) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    if (props.status == MOVIE_STATUS_SHOWING) {
      let response = getListMovieStatus(MOVIE_STATUS_SHOWING);
      response.then((result) => {
        setFilms(result.data);
      });
    } else {
      let response = getListMovieStatus(MOVIE_STATUS_TOSHOW);
      response.then((result) => {
        setFilms(result.data);
      });
    }
  }, []);

  return (
    <div>
      <Contents films={films} />
    </div>
  );
}

export default ShowContentFilms;
