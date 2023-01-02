import React, { useEffect, useState } from "react";
import "./MovieItem.scss";
import { Link } from "react-router-dom";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import { movieApi } from "actions";
import moment from "moment";
import { useDispatch } from "react-redux";

function MovieItem(props) {
  const dispatch = useDispatch();
  const { listMovie, listDay, listMovieTheater } = props;
  const [day, setDay] = useState();
  const [movieTheater, setMovieTheater] = useState();

  useEffect(() => {
    let params = { showtime: day, cinema_id: movieTheater?.id };
    movieApi.getListMovie(params).then((result) => {
      dispatch(actionUpdateMovie(result));
    });
  }, [day, movieTheater, dispatch]);

  function handleChangeDay(event) {
    setDay(moment(event.target.value).format("YYYY-MM-DD"));
  }

  function handleChangeMovieTheater(event) {
    setMovieTheater(event.target.value);
  }
  return (
    <div className="showtime">
      <div className="showtime__content">
        <div className="showtime__content_img">
          <img src="https://cinestar.com.vn/pictures/Cinestar/12-2022/quyet-tam-cua-em.jpg"></img>
        </div>
        <div className="showtime__content_text">
          <p className="showtime__content_text__name">Quyết tâm cua em (C16)</p>
          <p>
            Guy la một chàng trai vụng về trong tình trường, hay nói cách khác
            là &quot;ế nhờ thực lực&quot;. Cậu đem lòng yêu đơn phương June, một
            hot girl bậc nhất của trường, nổi tiếng với lời đồn là &quot;tráp
            gơ&quot; - thuật ngữ giới trẻ dùng để chỉ...
          </p>
          <div className="showtime__content_text_category">
            <span>2D</span>
          </div>
        </div>
      </div>
      <div className="showtime__schedule">
        <div className="showtime__schedule_row">
          <div className="showtime__schedule_row__day">02/01 2023</div>
          <div className="showtime__schedule_row__slot">
            <ul>
              <li>08:00</li>
              <li>08:00</li>
              <li>08:00</li>
            </ul>
          </div>
        </div>
        <div className="showtime__schedule_row">
          <div className="showtime__schedule_row__day">02/01 2023</div>
          <div className="showtime__schedule_row__slot">
            <ul>
              <li>08:00</li>
              <li>08:00</li>
              <li>08:00</li>
            </ul>
          </div>
        </div>
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
