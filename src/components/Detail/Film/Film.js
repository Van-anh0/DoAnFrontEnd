import React, { useState, useEffect } from "react";
import "./Film.scss";
import icon from "assets/images/ytb2.png";
import { Link } from "react-router-dom";
import { trimTime } from "utils/common";

import { useDispatch } from "react-redux";
import { initOrder } from "redux/order/orderSlice";

function DetailFilm({ movie, listCinema, showtimes }) {
  const dispatch = useDispatch();

  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();
  const [showtimeId, setShowtimeId] = useState();
  const [cinema, setCinema] = useState();

  useEffect(() => {
    setListDay(Object.keys(showtimes));
    setDay(Object.keys(showtimes)[0]);
    setCinema(listCinema[0]);
  }, [showtimes]);

  function checkGoToCart(cinema, showtimeId) {
    if (cinema != null && showtimeId != null) {
      return true;
    }
    return false;
  }

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleChangeMovieTheater = (event) => {
    setCinema(event.tartget.value);
  };

  const setShowtimeToOrder = (data) => {
    dispatch(initOrder(data));
    setShowtimeId(data.showtime_id);
  };

  return (
    <div className="detailFilm">
      <div className="col-detailFilm">
        <div className="Film">
          <div className="pic">
            <img src={movie.poster} alt={movie.name}></img>
          </div>

          <div className="text">
            <div className="detail">
              <h1 className="name">Phim: {movie.name}</h1>
              <span className="tt">Khởi chiếu: </span>{" "}
              <span>{movie?.release_date}</span>
              <br />
              <span className="tt">Thể loại: </span> <span>{movie?.type}</span>
              <br />
              <span className="tt">Đạo diễn: </span>{" "}
              <span>{movie?.director}</span>
              <br />
              <span className="tt">Diễn viên: </span> <span>{movie?.cast}</span>
              <br />
              <span className="tt">Quốc gia: </span>{" "}
              <span>{movie?.country}</span>
              <br />
            </div>
            <div className="content">
              <h1>Nội dung phim</h1>
              <span>{movie?.spoil}</span>
            </div>
          </div>
        </div>
        <div className="dateTime">
          <div className="cinemas">
            <select onChange={handleChangeMovieTheater}>
              {listCinema?.map((cinema) => (
                <option key={cinema.id}>
                  <div>
                    <div>{cinema?.name}</div>
                  </div>
                </option>
              ))}
            </select>
            <select onChange={handleChangeDay} value={day}>
              {listDay.map((dateTime, index) => (
                <option key={index}>{dateTime}</option>
              ))}
            </select>
          </div>
          <div className="detailFilm__time">
            {showtimes[day]?.map((showtime) => (
              <button
                onClick={() =>
                  setShowtimeToOrder({
                    movie_id: movie.id,
                    movie_name: movie.name,
                    movie_image: movie.poster,

                    show_seat: [],
                    order_item: [],
                    cinema_name: cinema?.name,

                    showtime_id: showtime.id,
                    showtime: showtime.showtime,
                  })
                }
                className={
                  showtime.id == showtimeId ? "detailFilm__on_button" : ""
                }
                key={showtime.id}
              >
                <div key={showtime.id}>
                  <div>{trimTime(showtime?.showtime)}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="foo">
          <div className="a">
            <img src={icon}></img>
            <div>TRAILER</div>
          </div>

          <Link
            to={"/seat"}
            className={
              checkGoToCart(cinema, showtimeId) ? "" : "disabled"
            }
          >
            <div className="b">Mua vé</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
