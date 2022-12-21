import React, { useState, useEffect } from "react";
import "../DetailFilm/DetailFilm.scss";
import icon from "../../assets/images/ytb2.png";
import { Link } from "react-router-dom";
import { trimDate, trimTime } from "../../utils/common";

function DetailFilm({ film, types, showtimes }) {
  const [listDay, setListDay] = useState([]);
  const [day, setDay] = useState();

  useEffect(() => {
    setListDay(Object.keys(showtimes));
    setDay(Object.keys(showtimes)[0]);
  }, [showtimes]);

  const handleChangeDay = (event) => {
    setDay(event.target.value);
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

          <div className="time">
            {showtimes[`${day}`]?.map((showtime, index) => (
              <button>
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

          <Link to={"/lichchieu"} onClick={() => {}}>
            <div className="b">Mua vé</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
