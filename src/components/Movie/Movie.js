import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import MovieItem from "./MovieItem/MovieItem";
import "./Movie.scss";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import { useDispatch } from "react-redux";
import { movieApi } from "actions";
import { TRANSLATEX, SLIDE_QUANTITY_SHOW, CLICK_BACK } from "utils/constants";

function Movie() {
  const dispatch = useDispatch();
  const films = useSelector(selectCurrentMovie);

  const [status, setStatus] = useState(MOVIE_STATUS_SHOWING);
  const [translateX, setTranslateX] = useState(0);

  const [isItem, setIsItem] = useState("dangchieu");

  function handleOnClickMoveTab(item) {
    setIsItem(item);
  }
  function handleClickTab(event) {
    setStatus(event);
  }

  function handleAll(item, event) {
    handleOnClickMoveTab(item);
    handleClickTab(event);
  }

  function handleClickBraces(event) {
    if (event === CLICK_BACK) {
      if (translateX < 0) {
        setTranslateX(translateX + TRANSLATEX);
      }
    } else {
      if (
        translateX >
        -TRANSLATEX * (films.data.length - SLIDE_QUANTITY_SHOW)
      ) {
        setTranslateX(translateX - TRANSLATEX);
      }
    }
  }

  const styles = {
    transform: `translateX(${translateX}vw)`,
    transition: "all 0.5s",
  };

  useEffect(() => {
    let params = {
      filter: "status," + status,
    };
    movieApi.getListMovie(params).then((res) => {
      dispatch(actionUpdateMovie(res));
    });
  }, [status]);

  return (
    <div className="movie">
      <div className="movie_tab">
        <div className="movie_tab__content">
          <div
            onClick={() => handleAll("dangchieu", MOVIE_STATUS_SHOWING)}
            className={
              isItem === "dangchieu"
                ? "movie_tab__item_active"
                : "movie_tab__item_not_active"
            }
          >
            Phim đang chiếu
          </div>
          <div
            onClick={() => handleAll("sapchieu", MOVIE_STATUS_TOSHOW)}
            className={
              isItem === "sapchieu"
                ? "movie_tab__item_active"
                : "movie_tab__item_not_active"
            }
          >
            Phim sắp chiếu
          </div>
          <div className="movie_tab__item_not_active">Suất chiếu đặc biệt</div>
        </div>
      </div>
      <div className="movie_content">
        <div
          className="movie_content__braces"
          onClick={() => handleClickBraces("back")}
        >
          <FiChevronLeft />
        </div>
        <div className="movie_content_item">
          <div className="movie_content_item__list" style={styles}>
            {films?.data.length > 0 ? (
              films.data?.map((el) => (
                <MovieItem status={status} key={el.id} movie={el} />
              ))
            ) : (
              <div className="loading">Chưa có phim mới ròi...</div>
            )}
          </div>
        </div>
        <div
          className="movie_content__braces"
          onClick={() => handleClickBraces("move")}
        >
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Movie;
