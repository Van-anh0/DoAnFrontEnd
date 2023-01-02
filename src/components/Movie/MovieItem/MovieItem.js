import React, { useEffect } from "react";
import Contents from "components/Content/Content";
import { movieApi } from "actions";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionUpdateMovie, selectCurrentMovie } from "redux/movie/movieSlice";
import "./MovieItem.scss";

function MovieItem(props) {
  const dispatch = useDispatch();
  const { status } = props;

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

  return (
    <div className="movie_item">
      <div className="movie_item__picture">
        <img src="https://cinestar.com.vn/pictures/Cinestar/12-2022/hung-thu-vo-hinh-poster.jpg"></img>
      </div>
      <div className="movie_item__text">
        <p>Hung thủ vô hình</p>
        <p className="movie_item__text_rated">(C16)</p>
        <div className="movie_item__text_category">
          <p>2D</p>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
