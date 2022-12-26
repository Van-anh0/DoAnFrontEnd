import React, { useEffect, useState } from "react";
import Contents from "components/Content/Contents";
import { getListMovie } from "actions/ApiCall/index";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionUpdateMovie, selectCurrentMovie } from "redux/movie/movieSlice";

function MovieItem(props) {
  const dispatch = useDispatch();
  const films = useSelector(selectCurrentMovie);
  const { status } = props;

  useEffect(() => {
    //todo: cho nay dang chay 2 lan vi co strict mode
    let params = {};
    let filter = "type,movie";

    if (status == MOVIE_STATUS_SHOWING) {
      filter += ",status," + MOVIE_STATUS_SHOWING;
      params.filter = filter;
    } else {
      filter += ",status," + MOVIE_STATUS_TOSHOW;
      params.filter = filter;
    }

    if (params?.filter) {
      getListMovie(params).then((result) => {
        dispatch(actionUpdateMovie(result));
      });
    }
  }, [status]);

  return (
    <div>
      <Contents films={films.data} />
    </div>
  );
}

export default MovieItem;
