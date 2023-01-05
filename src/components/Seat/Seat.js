import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { seatApi } from "actions";
import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import SeatItem from "./SeatItem/SeatItem";

import "./Seat.scss";
import ModalProduct from "components/Modal/Product/ModalProduct";
import { trimDate, trimTime } from "utils/common";

const Seat = () => {
  const order = useSelector(selectCurrentorder);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [listSeat, setListSeat] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    seatApi.getListSeat(order.showtime_id, order.room_id).then((result) => {
      setListSeat(result.data);
    });
  }, [order.showtime_id]);

  function handleShowModalProduct() {
    setShowModalProduct(!showModalProduct);
  }

  return (
    <div>
      {showModalProduct ? (
        <ModalProduct handleShowModalProduct={handleShowModalProduct} />
      ) : (
        <></>
      )}
      <div className="movie-complex">
        <div className="nd">
          <p className="title">Tên phim: {order.movie_name}</p>
          <div className="ct">
            <p>{order.cinema_name}</p>
            <p>Suất chiếu: {trimTime(order.showtime)}</p>
            <p>Ngày: {trimDate(order.showtime)}</p>
          </div>
        </div>
        <div className="movie-screen">
          <p>MÀN HÌNH</p>
        </div>

        <div className="container-movie-layout">
          <div className="row">
            {listSeat.length > 0 ? (
              listSeat.map((seat) => <SeatItem seat={seat} key={seat.id} />)
            ) : (
              <div>Không có ghế trong phòng {order.room_name} này!</div>
            )}
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
          <div className="seat_table">
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
                <th></th>
                <th>{order.total}đ</th>
              </tr>
            </table>
          </div>
        </div>

        <div className="movie-button">
          <button onClick={() => navigate(-1)}>Quay lại</button>
          <button onClick={handleShowModalProduct}>Chọn đồ ăn</button>
          <Link to={order?.show_seat.length > 0 ? "/cart" : ""}>
            <button className={order?.show_seat.length > 0 ? "" : "disabled"}>
              Thanh toán
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seat;
