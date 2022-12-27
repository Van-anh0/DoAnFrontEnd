import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListSeat } from "actions/ApiCall";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";

import SeatItem from "./SeatItem/SeatItem";
import "./Seat.scss";

const GenerateSeats = (seats) => {
  return (
    <div className="row">
      {seats.map((seat) => {
        return <SeatItem seat={seat} key={seat.id} />;
      })}
    </div>
  );
};

const Seat = () => {
  const order = useSelector(selectCurrentorder);

  const [seats, setSeats] = useState([]);
  useEffect(() => {
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
          {order?.total_price ? (
            <tr className="seat__total_body">
              <th>Vé thường</th>
              <th>{order.quantity}</th>
              <th>{order.price}đ</th>
              <th>{order.total_price}đ</th>
            </tr>
          ) : (
            <div></div>
          )}
        </table>
      </div>

      <div className="movie-button">
        <button>Quay lại</button>
        <Link to={"/payment"} onClick={() => {}}>
          <button>Thanh toán</button>
        </Link>
      </div>
    </div>
  );
};

export default Seat;