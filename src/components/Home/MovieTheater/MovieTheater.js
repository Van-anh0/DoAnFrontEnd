import React from "react";
import { AiFillStar } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import imageDefault from "assets/images/ci1.png";
import "./MovieTheater.scss";
import { selectCurrentMovieTheater } from "redux/movieTheater/movieTheaterSlice";
import { useSelector } from "react-redux";

function MovieTheater() {
  const cinema = useSelector(selectCurrentMovieTheater);

  return (
    <div className="cinemas">
      <div className="titlee">
        <h1>HỆ THỐNG RẠP CHIẾU PHIM</h1>
        <p>Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước</p>
        
      </div>
      
      <div className="gridCinema">
        {cinema?.data?.map((el) => (
          <div className="gridCinema__container" key={el.id}>
            <div className="cinema">
              <img src={el.image ? el.image : imageDefault}></img>
              <div className="detail">
                <h1>{el.name}</h1>
                <p>{el.address}</p>
                <div className="star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <div className="location">
                  <div className="inLine">
                    <VscLocation className="icon" />
                  </div>

                  <p className="inLine">{el.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieTheater;
