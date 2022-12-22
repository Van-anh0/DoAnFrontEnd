import React, { useEffect, useState } from "react";
import Seat from "./Seat";
import "./Seat.scss";
import { Link } from "react-router-dom";
import { getListSeat } from "../../actions/ApiCall";

const GenerateSeats = (seats) => {
  return (
    <div className="row">
      {seats.map((seat) => {
        return <Seat seat={seat} />;
      })}
    </div>
  );
};

const SeatMatrix = () => {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    //   fetch("/data/seats.json")
    //   .then(res => res.json())
    //   .then(data => setSeats(data))

    let responseSeat = getListSeat();
    responseSeat.then((result) => {
      setSeats(result.data);
    });
  }, []);

  return (
    <div className="movie-complex">
      <div className="nd">
        <p className="title">Tên phim: TÌNH YÊU KHÔNG SỢ HÃI</p>
        <div className="ct">
          <p>Rạp chiếu: Cinestar Đà Lạt</p>
          <p>Suất chiếu: 16:00</p>
          <p>Ngày: 23/11/2022</p>
        </div>
      </div>
      <div className="movie-screen">
        <p>MÀN HÌNH</p>
      </div>

      <div className="container movie-layout">
        <div>{GenerateSeats(seats)}</div>
      </div>

      <div className="ghiChu">
        <div className="ghe">
          <p>
            Ghế đã có người đặt: <button className="book"></button>
          </p>
          <p>
            Ghế chưa có người đặt: <button className="default"></button>
          </p>
          <p>
            Ghế đang chọn: <button className="select"></button>
          </p>
        </div>

        <h1>Giá 1 ghế: 45.000vnđ</h1>
      </div>

      <div className="seat__total">
        <table>
          <tr className="seat__total_header">
            <th>Loại vé</th>
            <th>Số lượng</th>
            <th>Giá (VNĐ)</th>
            <th>Tổng tiền (VNĐ)</th>
          </tr>
          <tr className="seat__total_body">
            <th>Vé thường</th>
            <th>3</th>
            <th>45000đ</th>
            <th>270000đ</th>
          </tr>
        </table>
      </div>

      <div className="movie-button">
        <button>Quay lại</button>
        <Link to={"/thanhtoan"} onClick={() => {}}>
          <button>Thanh toán</button>
        </Link>
      </div>
    </div>
  );
};

export default SeatMatrix;
