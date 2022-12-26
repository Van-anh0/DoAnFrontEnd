import React from "react";
import "./Payment.scss";

import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import { createOrder } from "actions/ApiCall";
import { clearCurrentOrder } from "redux/order/orderSlice";
import { useDispatch } from "react-redux";

function Payment() {
  const order = useSelector(selectCurrentorder);
  const dispatch = useDispatch();

  const handleCreateOrder = () => {
    createOrder(order).then((result) => {
      dispatch(clearCurrentOrder());
      alert("thanh toan thanh cong");
    });
  };

  return (
    <div className="item">
      <div className="dv">
        <div className="tt">
          Cảm ơn quý khách đã đến Cinestar!
          <br />
          Xin quý khách vui lòng kiểm tra lại thông tin đặt vé
        </div>

        {order?.total_price ? (
          <>
            <div className="dt">
              <img src={order.poster}></img>
              <div className="dtt">
                <p>Phim: {order.movie_name}</p>
                <p>Rạp chiếu: {order.movie_theater_name}</p>
                <p>Ngày chiếu: {order.day}</p>
                <p>Xuất chiếu: {order.start_time}</p>
              </div>
            </div>
            <div className="dsghe">
              {order?.ticket.map((orderItem, index) => (
                <div className="ghe" key={index}>
                  <p>Ghế</p>
                  <p>{orderItem.seat_name}</p>
                  <p>{orderItem.price}đ</p>
                </div>
              ))}
            </div>

            <div className="tong">
              <h1>TỔNG TIỀN</h1>
              <p>
                <span>{order.total_price}</span> vnđ
              </p>
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div
          className={order?.total_price ? "thanhtoan" : "disabled"}
          onClick={() => handleCreateOrder()}
        >
          Thanh toán
        </div>
      </div>
    </div>
  );
}

export default Payment;
