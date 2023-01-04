import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { seatApi } from "actions";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";

import SeatItem from "./SeatItem/SeatItem";
import "./Seat.scss";

import ModalProduct from "components/Modal/ModalProduct";

const Seat = () => {
  const order = useSelector(selectCurrentorder);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [listSeat, setListSeat] = useState([]);

  useEffect(() => {
    // hieucn: to do
    seatApi.getListSeat(order.showtime_id).then((result) => {
      setListSeat(result.data);
    });
  }, [order.showtime_id]);

  const handleChooseProduct = () => {
    setShowModalProduct(true);
  };

  return (
    <div className="movie-complex">
      {showModalProduct ? <ModalProduct /> : <></>}
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
        <div className="row">
          {listSeat.map((seat) => {
            return <SeatItem seat={seat} key={seat.id} />;
          })}
        </div>
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
            <th>Loại ghế</th>
            <th>Số ghế</th>
            <th>Giá (VNĐ)</th>
          </tr>
          {order.show_seat?.map((showSeat) => (
            <tr className="seat__total_body" key={showSeat.seat_id}>
              <th>{showSeat.seat_name}</th>
              <th>{showSeat.row + showSeat.col}</th>
              <th>{showSeat.price}đ</th>
            </tr>
          ))}
          <tr className="seat__total_header">
            <th>Combo</th>
            <th>Số lượng</th>
            <th>Giá (VNĐ)</th>
          </tr>
          {order.order_item?.map((orderItem) => (
            <tr className="seat__total_body" key={orderItem.product_id}>
              <th>{orderItem.product_name}</th>
              <th>{orderItem.quantity}</th>
              <th>{orderItem.price}đ</th>
            </tr>
          ))}
          <tr className="seat__total_header">
            <th>Tổng tiền</th>
            <th>{order.total}</th>
          </tr>
        </table>
      </div>

      <div className="movie-button">
        <button>Quay lại</button>
        <button onClick={handleChooseProduct}>Chọn đồ ăn</button>
        <Link
          to={"/cart"}
          className={order?.show_seat.length > 0 ? "" : "disabled"}
        >
          <button>Thanh toán</button>
        </Link>
      </div>
    </div>
  );
};

export default Seat;
