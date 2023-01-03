import React, { useEffect } from "react";
import { movieApi } from "actions";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";
import { useDispatch } from "react-redux";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import "./MovieItem.scss";
import { Link } from "react-router-dom";

function MovieItem(props) {
  const dispatch = useDispatch();
  const { status, movie } = props;

  useEffect(() => {
    //todo: cho nay dang chay 2 lan vi co strict mode
    let params = {};
    let filter = "";

    if (status == MOVIE_STATUS_SHOWING) {
      filter += "status," + MOVIE_STATUS_SHOWING;
      params.filter = filter;
    } else {
      filter += "status," + MOVIE_STATUS_TOSHOW;
      params.filter = filter;
    }

    if (params?.filter) {
      movieApi.getListMovie(params).then((result) => {
        dispatch(actionUpdateMovie(result));
      });
    }
  }, [status, dispatch]);

  function handleClickMovie() {}

  return (
    <Link className="movie_item" to={"/detail/" + movie.id}>
      <div className="movie_item__picture">
        <img src={movie.poster}></img>
      </div>
      <div className="movie_item__text">
        <p>{movie.name}</p>
        <p className="movie_item__text_rated">({movie.rated})</p>
        <div className="movie_item__text_category">
          <p>{movie.ticket}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
