import React, { useState, useEffect } from "react";
import "./Film.scss";
import icon from "assets/images/ytb2.png";
import { Link } from "react-router-dom";
import { trimTime } from "utils/common";

import { useDispatch } from "react-redux";
import { initOrder } from "redux/order/orderSlice";

function DetailFilm({ film, listMovieTheater, showtimes }) {
  const dispatch = useDispatch();

  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();
  const [showtimeId, setShowtimeId] = useState();
  const [movieTheater, setMovieTheater] = useState();
  const [attribute, setAttribute] = useState();

  useEffect(() => {
    setListDay(Object.keys(showtimes));
    setDay(Object.keys(showtimes)[0]);
    setMovieTheater(listMovieTheater[0]);
    if (film.sku) {
      setAttribute(film.sku[0]?.attribute);
    }
  }, [showtimes]);

  function checkGoToCart(movieTheater, showtimeId) {
    if (movieTheater != null && showtimeId != null) {
      return true;
    }
    return false;
  }

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleChangeMovieTheater = (event) => {
    setMovieTheater(event.tartget.value);
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
            <img src={film.image} alt={film.name}></img>
          </div>

          <div className="text">
            <div className="detail">
              <h1 className="name">Phim: {film.name}</h1>
              <span className="tt">Khởi chiếu: </span>{" "}
              <span>{attribute?.release_date}</span>
              <br />
              <span className="tt">Thể loại: </span>{" "}
              <span>{attribute?.type}</span>
              <br />
              <span className="tt">Đạo diễn: </span>{" "}
              <span>{attribute?.director}</span>
              <br />
              <span className="tt">Diễn viên: </span>{" "}
              <span>{attribute?.cast}</span>
              <br />
              <span className="tt">Quốc gia: </span>{" "}
              <span>{attribute?.country}</span>
              <br />
            </div>
            <div className="content">
              <h1>Nội dung phim</h1>
              <span>{attribute?.description}</span>
            </div>
          </div>
        </div>
        <div className="dateTime">
          <div className="cinemas">
            <select onChange={handleChangeMovieTheater}>
              {listMovieTheater?.map((movieTheater) => (
                <option key={movieTheater.id}>
                  <div>
                    <div>{movieTheater?.name}</div>
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
          {film.sku?.map((sku) => (
            <>
              <select className="detailFilm_type">
                <option key={sku.id}>Loại vé: {sku?.type}</option>
              </select>
              <div className="detailFilm__time">
                {sku.showtime?.map((showtime) => (
                  <button
                    onClick={() =>
                      setShowtimeToOrder({
                        showtime_id: showtime.id,
                        movie_id: film.id,
                        ticket: [],
                        movie_name: film.name,
                        movie_theater_name: movieTheater?.name,
                        poster: film.poster,
                        day: showtime.day,
                        start_time: showtime.start_time,
                      })
                    }
                    className={
                      showtime.id == showtimeId ? "detailFilm__on_button" : ""
                    }
                    key={showtime.id}
                  >
                    <div key={showtime.id}>
                      <div>{trimTime(showtime?.start_time)}</div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ))}
        </div>

        <div className="foo">
          <div className="a">
            <img src={icon}></img>
            <div>TRAILER</div>
          </div>

          <Link
            to={"/seat"}
            className={
              checkGoToCart(movieTheater, showtimeId) ? "" : "disabled"
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
