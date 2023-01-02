import React, { useState } from "react";
import "antd/dist/antd.css";
import MovieItem from "./MovieItem/MovieItem";
import "./Movie.scss";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";
import { selectCurrentMovie } from "redux/movie/movieSlice";
import { useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Movie() {
  const [status, setStatus] = useState(MOVIE_STATUS_SHOWING);
  const films = useSelector(selectCurrentMovie);

  function handleClickTab(key) {
    setStatus(key);
  }

  return (
    <div className="movie">
      <div className="movie_tab">
        <div className="movie_tab__content">
          <div className="movie_tab__item">Phim đang chiếu</div>
          <div className="movie_tab__item">Phim sắp chiếu</div>
          <div className="movie_tab__item">Suất chiếu đặc biệt</div>
        </div>
      </div>
      <div className="movie_content">
        <div className="movie_content__braces">
          <FiChevronLeft />
        </div>
        {/* <MovieItem status={status} /> */}
        {films.data?.map((el) => (
          <MovieItem status={status} key={el.id} />
        ))}
        <div className="movie_content__braces">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Movie;
