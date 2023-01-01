import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import { orderApi } from "actions";
import { clearCurrentOrder } from "redux/order/orderSlice";
import { useDispatch } from "react-redux";
import { trimDate, trimTime } from "utils/common";

function Cart() {
  const order = useSelector(selectCurrentorder);
  const dispatch = useDispatch();

  const handleCreateOrder = () => {
    orderApi.createOrder(order).then(() => {
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

        {order?.total ? (
          <>
            <div className="dt">
              <img src={order.movie_image}></img>
              <div className="dtt">
                <p>Phim: {order.movie_name}</p>
                <p>Rạp chiếu: {order.cinema_name}</p>
                <p>Ngày chiếu: {trimDate(order.showtime)}</p>
                <p>Xuất chiếu: {trimTime(order.showtime)}</p>
              </div>
            </div>
            <div className="dsghe">
              {order.show_seat?.map((orderItem, index) => (
                <div className="ghe" key={index}>
                  <p>Ghế</p>
                  <p>{orderItem.seat_name}</p>
                  <p>{orderItem.price}đ</p>
                </div>
              ))}
            </div>
            <div className="dsghe">
              {order.order_item?.map((orderItem, index) => (
                <div className="ghe" key={index}>
                  <p>Combo</p>
                  <p>{orderItem.product_name}</p>
                  <p>{orderItem.quantity}</p>
                  <p>{orderItem.price}đ</p>
                </div>
              ))}
            </div>

            <div className="tong">
              <h1>TỔNG TIỀN</h1>
              <p>
                <span>{order.total}</span> vnđ
              </p>
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div
          className={order?.show_seat.length > 0 ? "thanhtoan" : "disabled"}
          onClick={() => handleCreateOrder()}
        >
          Thanh toán
        </div>
        <Link to={"/"}>
          <button>Quay lại trang chủ</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
