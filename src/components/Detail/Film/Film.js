import React, { useState, useEffect } from "react";
import "./Film.scss";
import icon from "assets/images/ytb2.png";
import { Link } from "react-router-dom";
import { trimTime } from "utils/common";

import { useDispatch, useSelector } from "react-redux";
import { initOrder } from "redux/order/orderSlice";
import { selectCurrentUser } from "redux/user/userSlice";

function DetailFilm({ movie, listCinema, showtimes }) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();
  const [showtimeId, setShowtimeId] = useState();
  const [cinema, setCinema] = useState();

  useEffect(() => {
    setListDay(Object.keys(showtimes));
    setDay(Object.keys(showtimes)[0]);
    setCinema(listCinema[0]);
  }, [showtimes]);

  function checkGoToCart(showtimeId) {
    if (showtimeId != null) {
      return true;
    }
    return false;
  }

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleChangeCinema = (event) => {
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
            <select onChange={handleChangeCinema}>
              {listCinema.length > 0 ? (
                listCinema?.map((cinema) => (
                  <option key={cinema.id}>
                    <div>
                      <div>{cinema?.name}</div>
                    </div>
                  </option>
                ))
              ) : (
                <option>
                  <div>
                    <div>Không tìm thấy rạp</div>
                  </div>
                </option>
              )}
            </select>
            <select onChange={handleChangeDay} value={day}>
              {listDay.length > 0 ? (
                listDay.map((dateTime, index) => (
                  <option key={index}>{dateTime}</option>
                ))
              ) : (
                <option>Không có ngày chiếu</option>
              )}
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

                    room_id: showtime.room_id,
                    room_name: showtime.room_name,

                    user_id: user.id,
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
          <a className="a" href={movie.trailer}>
            <img src={icon}></img>
            <p>TRAILER</p>
          </a>

          <Link
            to={"/seat"}
            className={checkGoToCart(showtimeId) ? "" : "disabled"}
          >
            <div className="b">Mua vé</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
