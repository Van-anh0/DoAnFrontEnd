import React, { useEffect, useState } from "react";
import "./MovieItem.scss";
import { Link } from "react-router-dom";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import { getListMovie } from "actions/ApiCall";
import moment from "moment";
import { useDispatch } from "react-redux";

function MovieItem(props) {
  const dispatch = useDispatch();
  const { listMovie, listDay, listMovieTheater } = props;
  const [day, setDay] = useState();
  const [movieTheater, setMovieTheater] = useState();

  useEffect(() => {
    let params = { day: day, movie_theater_id: movieTheater?.id };
    getListMovie(params).then((result) => {
      dispatch(actionUpdateMovie(result));
    });
  }, [day, movieTheater]);

  function handleChangeDay(event) {
    setDay(moment(event.target.value).format("YYYY-MM-DD"));
  }

  function handleChangeMovieTheater(event) {
    setMovieTheater(event.target.value);
  }
  return (
    <div className="showtimes">
      <div className="category">
        <div>Chọn rạp chiếu: </div>
        <select className="a" onChange={handleChangeMovieTheater}>
          {listMovieTheater.data.map((movieTheater) => {
            return (
              <div key={movieTheater.id}>
                <option value="" selected disabled hidden>
                  Chọn rạp chiếu
                </option>
                <option>{movieTheater.name}</option>
              </div>
            );
          })}
        </select>

        <div className="space"></div>
        <div>Chọn ngày chiếu:</div>
        <select className="a" onChange={handleChangeDay}>
          {listDay?.map((day) => {
            return (
              <>
                <option value="" selected disabled hidden>
                  Chọn ngày chiếu
                </option>
                <option>{day}</option>
              </>
            );
          })}
        </select>
      </div>

      {listMovie?.data.map((movie) => {
        return (
          <div className="listFilm" key={movie.id}>
            <div className="film">
              <Link to={`/detail/${movie.id}`} onClick={() => {}}>
                <div className="filmDT">
                  <div className="pic">
                    <img src={movie.poster} alt={movie.name}></img>
                  </div>

                  <div className="detail">
                    <h1>{movie.name}</h1>
                    <p>{movie.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieItem;
