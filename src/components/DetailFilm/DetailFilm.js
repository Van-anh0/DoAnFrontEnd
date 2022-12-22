import React, { useState, useEffect } from "react";
import "../DetailFilm/DetailFilm.scss";
import icon from "../../assets/images/ytb2.png";
import { Link } from "react-router-dom";
import { trimTime } from "../../utils/common";

import { useDispatch } from "react-redux";
import { addShowtimeId } from "../../redux/order/orderSlice";

function DetailFilm({ film, types, showtimes }) {
  const dispatch = useDispatch();

  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();
  const [showtimeId, setShowtimeId] = useState();

  useEffect(() => {
    setListDay(Object.keys(showtimes));
    setDay(Object.keys(showtimes)[0]);
  }, [showtimes]);

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const setShowtimeToOrder = (data) => {
    dispatch(addShowtimeId(data));
    setShowtimeId(data.showtime_id);
  };

  return (
    <div className="detailFilm">
      <div className="col-detailFilm">
        <div className="Film">
          <div className="pic">
            <img src={film.poster} alt={film.name}></img>
          </div>

          <div className="text">
            <div className="detail">
              <h1 className="name">{film.name}</h1>
              <span className="tt">Khởi chiếu: </span>{" "}
              <span>{film.release_date}</span>
              <br />
              <span className="tt">Thể loại: </span> <span>{film.type}</span>
              <br />
              <span className="tt">Đạo diễn: </span>{" "}
              <span>{film.director}</span>
              <br />
              <span className="tt">Diễn viên: </span> <span>{film.cast}</span>
              <br />
              <span className="tt">Quốc gia: </span> <span>{film.country}</span>
              <br />
            </div>
            <div className="content">
              <h1>Nội dung phim</h1>
              <span>{film.description}</span>
            </div>
          </div>
        </div>
        <div className="dateTime">
          <div className="cinemas">
            <select>
              {types?.map((type, index) => (
                <option>
                  <div key={index}>
                    <div>{type?.name}</div>
                  </div>
                </option>
              ))}
            </select>

            <select onChange={handleChangeDay} value={day}>
              {listDay.map((dateTime) => (
                <option>{dateTime}</option>
              ))}
            </select>
          </div>

          <div className="detailFilm__time">
            {showtimes[`${day}`]?.map((showtime, index) => (
              <button
                onClick={() =>
                  setShowtimeToOrder({
                    showtime_id: showtime.id,
                    movie_id: film.id,
                  })
                }
                className={
                  showtime.id == showtimeId ? "detailFilm__on_button" : ""
                }
              >
                <div key={index}>
                  <div>{trimTime(showtime?.start_time)}</div>
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

          <Link to={"/lichchieu"} className={showtimeId ? "" : "disabled"}>
            <div className="b">Mua vé</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
