import React, { useState, useEffect } from "react";
import { trimTime } from "utils/common";
import { Link } from "react-router-dom";
import "./MovieItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { initOrder } from "redux/order/orderSlice";
import { selectCurrentUser } from "redux/user/userSlice";

function MovieItem({ movie, listShowtime, listCinema }) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [listDay, setListDay] = useState([]);
  const setShowtimeToOrder = (data) => {
    dispatch(initOrder(data));
  };

  useEffect(() => {
    if (listShowtime) {
      setListDay(Object.keys(listShowtime));
    }
  }, [listShowtime]);

  function findCinema(id) {
    return listCinema?.data.find((item) => item.id === id);
  }

  return (
    <div className="showtime">
      <Link className="showtime__content" to={"/detail/" + movie.id}>
        <div className="showtime__content_img">
          <img src={movie.poster}></img>
        </div>
        <div className="showtime__content_text">
          <p className="showtime__content_text__name">
            {movie.name} ({movie.rated})
          </p>
          <p>{movie.spoil}</p>
          <div className="showtime__content_text_category">
            <span>{movie.format_movie ? movie.format_movie : "2D"}</span>
          </div>
        </div>
      </Link>
      <div className="showtime__schedule">
        {listDay?.map((day) => {
          return (
            <div className="showtime__schedule_row" key={day}>
              <div className="showtime__schedule_row__day">{day}</div>
              <div className="showtime__schedule_row__slot">
                <ul>
                  {listShowtime[day].map((showtime) => {
                    return (
                      <Link
                        key={showtime.id}
                        to="/seat"
                        onClick={() =>
                          setShowtimeToOrder({
                            movie_id: movie.id,
                            movie_name: movie.name,
                            movie_image: movie.poster,

                            show_seat: [],
                            order_item: [],
                            cinema_name: findCinema(showtime.cinema_id)?.name,

                            showtime_id: showtime.id,
                            showtime: showtime.showtime,

                            room_id: showtime.room_id,
                            room_name: showtime.room_name,

                            user_id: user?.id,
                          })
                        }
                      >
                        {trimTime(showtime.showtime)}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="showtimes">
    //   <div className="category">
    //     <div>Chọn rạp chiếu: </div>
    //     <select className="a" onChange={handleChangeMovieTheater}>
    //       {listMovieTheater.data.map((movieTheater) => {
    //         return (
    //           <div key={movieTheater.id}>
    //             <option value="" selected disabled hidden>
    //               Chọn rạp chiếu
    //             </option>
    //             <option>{movieTheater.name}</option>
    //           </div>
    //         );
    //       })}
    //     </select>

    //     <div className="space"></div>
    //     <div>Chọn ngày chiếu:</div>
    //     <select className="a" onChange={handleChangeDay}>
    //       {listDay?.map((day) => {
    //         return (
    //           <>
    //             <option value="" selected disabled hidden>
    //               Chọn ngày chiếu
    //             </option>
    //             <option>{day}</option>
    //           </>
    //         );
    //       })}
    //     </select>
    //   </div>

    //   {listMovie?.data.map((movie) => {
    //     return (
    //       <div className="listFilm" key={movie.id}>
    //         <div className="film">
    //           <Link to={`/detail/${movie.id}`} onClick={() => {}}>
    //             <div className="filmDT">
    //               <div className="pic">
    //                 <img src={movie.poster} alt={movie.name}></img>
    //               </div>

    //               <div className="detail">
    //                 <h1>{movie.name}</h1>
    //                 <p>{movie.description}</p>
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default MovieItem;
